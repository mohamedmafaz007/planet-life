import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

export const ScrollReveal = ({
    children,
    width = "fit-content",
    delay = 0,
    direction = "up",
    distance = 50
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const getInitialProps = () => {
        switch (direction) {
            case "up": return { y: distance, x: 0 };
            case "down": return { y: -distance, x: 0 };
            case "left": return { x: distance, y: 0 };
            case "right": return { x: -distance, y: 0 };
            default: return { y: distance, x: 0 };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, ...getInitialProps() },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
