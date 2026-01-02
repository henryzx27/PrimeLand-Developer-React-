import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    const location = useLocation();
    const lenisRef = React.useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        // Force Lenis to scroll to top immediately on route change
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        // Fallback for native scroll just in case
        window.scrollTo(0, 0);
        
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-secondary font-sans text-neutral-800 antialiased selection:bg-accent selection:text-white">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default Layout;
