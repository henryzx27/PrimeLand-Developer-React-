import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 40 };
            case "down": return { opacity: 0, y: -40 };
            case "left": return { opacity: 0, x: 40 };
            case "right": return { opacity: 0, x: -40 };
            default: return { opacity: 0, y: 40 };
        }
    };

    const getAnimate = () => {
        switch (direction) {
            case "up": 
            case "down": 
                return { opacity: 1, y: 0 };
            case "left": 
            case "right": 
                return { opacity: 1, x: 0 };
            default: return { opacity: 1, y: 0 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitial()}
            animate={isInView ? getAnimate() : getInitial()}
            transition={{ duration: 0.8, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }} 
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
