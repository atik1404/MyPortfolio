"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-shadow hover:shadow-xl hover:shadow-primary/10",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
