import { motion, useScroll, useSpring } from "framer-motion";

const PageProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#10b981] origin-left z-[1000] pointer-events-none"
            style={{ scaleX }}
        />
    );
};

export default PageProgressBar;
