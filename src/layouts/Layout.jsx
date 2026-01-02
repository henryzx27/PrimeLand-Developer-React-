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

        const startTime = Date.now();
        const MIN_DISPLAY_TIME = 2600; // Matches preloader animation duration + buffer

        // Function to hide loader after ensuring min time
        const finishLoading = () => {
             const elapsedTime = Date.now() - startTime;
             const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsedTime);
             
             setTimeout(() => {
                 setIsLoading(false);
             }, remainingTime);
        };

        // Select CRITICAL images (those without loading="lazy")
        // We only block the view for these. Off-screen lazy images can load in background.
        const allImages = Array.from(document.images);
        const criticalImages = allImages.filter(img => img.getAttribute('loading') !== 'lazy');

        if (criticalImages.length === 0) {
            finishLoading();
            return;
        }

        let loadedCount = 0;
        const totalCritical = criticalImages.length;
        let isMounted = true;

        const checkCompletion = () => {
            if (loadedCount >= totalCritical && isMounted) {
                finishLoading();
            }
        };

        const onImageEvent = () => {
            loadedCount++;
            checkCompletion();
        };

        let pendingImages = false;
        criticalImages.forEach(img => {
            if (img.complete) {
                onImageEvent();
            } else {
                pendingImages = true;
                img.addEventListener('load', onImageEvent);
                img.addEventListener('error', onImageEvent);
            }
        });

        if (!pendingImages) {
             checkCompletion();
        }

        return () => {
             isMounted = false;
             criticalImages.forEach(img => {
                img.removeEventListener('load', onImageEvent);
                img.removeEventListener('error', onImageEvent);
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
