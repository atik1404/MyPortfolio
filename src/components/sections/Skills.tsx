"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "GraphQL", "Docker",
    "AWS", "Figma", "Git", "Framer Motion"
];

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/30">
            <div className="container">
                <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
                    Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="flex items-center justify-center p-4 hover:border-primary/50">
                                <span className="font-semibold">{skill}</span>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
