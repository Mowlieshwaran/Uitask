import "./Task1.css";
import { LoremIpsum } from "./content.jsx"
import { motion, useScroll, useSpring } from "framer-motion";

export default function Task1() {
    const { scrollYProgress } = useScroll();

    //   Scroll-triggered: A normal animation is triggered when an element enters the viewport.
    // Scroll-linked: Values are linked directly to scroll progress.
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <h1>
                <code>useScroll</code> with spring smoothing
            </h1>
            <LoremIpsum />
        </>
    );
}
