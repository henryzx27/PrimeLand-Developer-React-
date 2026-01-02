import React, { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Preloader from '../components/ui/Preloader';

const Layout = () => {
    const location = useLocation();
    const lenisRef = React.useRef(null);
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);

        const handleImagesLoaded = () => {
             // Add a small buffer time for smoothness
             setTimeout(() => {
                 setIsLoading(false);
             }, 800);
        };

        const images = Array.from(document.images);
        
        if (images.length === 0) {
            handleImagesLoaded();
            return;
        }

        let loadedImages = 0;
        const totalImages = images.length;

        const onImageLoad = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
                handleImagesLoaded();
            }
        };

        let hasPendingImages = false;
        images.forEach(img => {
            if (img.complete) {
                onImageLoad();
            } else {
                hasPendingImages = true;
                img.addEventListener('load', onImageLoad);
                img.addEventListener('error', onImageLoad); // Handle errors gracefully
            }
        });

        if (!hasPendingImages) {
             handleImagesLoaded();
        }

        // Cleanup
        return () => {
             images.forEach(img => {
                img.removeEventListener('load', onImageLoad);
                img.removeEventListener('error', onImageLoad);
             });
        };
    }, [location.pathname]);

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
            <Preloader isLoading={isLoading} />
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
