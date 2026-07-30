import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a clickable element
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    // If screen is smaller than md (768px), don't render custom cursor for better mobile UX
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:flex items-center justify-center"
            animate={{
                x: mousePosition.x - (isHovering ? 24 : 16),
                y: mousePosition.y - (isHovering ? 24 : 16),
                scale: isHovering ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 50,
                mass: 0.1
            }}
        >
            <div className={`relative w-8 h-8 flex items-center justify-center transition-all duration-300 ${isHovering ? 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]' : 'drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]'}`}>
                <img 
                    src="/bull_PNGs/vect.bull.svg" 
                    alt="cursor"
                    className="w-full h-full object-contain"
                    style={{
                        // Rotate so the top horn points top-left (approx pointing cursor style)
                        transform: 'rotate(-45deg)',
                        transformOrigin: 'center'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default CustomCursor;
