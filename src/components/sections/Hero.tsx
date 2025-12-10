"use client";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <Section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center pt-24 md:pt-32">
            <div className="container relative z-10 flex flex-col items-start gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                        Available for freelance
                    </span>
                </motion.div>

                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="block text-muted-foreground"
                    >
                        I build
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="block text-foreground"
                    >
                        mobile applications.
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-2xl text-xl text-muted-foreground md:text-2xl"
                >
                    I'm a Mobile Application Developer specializing in building exceptional Android
                    and cross-platform apps. Currently, I'm focused on building accessible,
                    high-performance mobile products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Button size="lg" asChild>
                        <Link href="#projects">
                            Check out my work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline">
                        Download Resume <Download className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            {/* Background Gradient Blob */}
            <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] filter opacity-50" />
            <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[100px] filter opacity-30" />
        </Section>
    );
}
