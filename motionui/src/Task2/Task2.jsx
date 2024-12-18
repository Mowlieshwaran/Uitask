
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import "./Task2.css"

export default function Task2() {
    const [lineCompleted, setLineCompleted] = useState(false);
    const [boxFalling, setBoxFalling] = useState(false);
    const controls = useAnimation();
    const handleLineComplete = () => {
        setLineCompleted(true);
        setBoxFalling(true);
        controls.start({
            y: 300,
        });
    };

    return (
        <>
        <motion.div
                style={{
                    position: "absolute",
                    top: 30,
                    left: 0,
                    height: 2,
                    background: "white",
                }}
                initial={{ width: 0 }}
                animate={{
                    width: "100vw",
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                }}
                onAnimationComplete={handleLineComplete}
            />


            <motion.div
                layout
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 100,
                    height: 100,
                    background: "white",
                    transform: "translate(-50%, -50%)",
                }}
                animate={{
                    rotate: lineCompleted ? 0 : 360,
                    y: boxFalling ? 300 : 0,
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    repeat: boxFalling ? 0 : Infinity,
                }}
            />
            {boxFalling ?
                ""
                : 
                < >
                    <h2>Loading...</h2>
                </>}
        </>
    );
}

