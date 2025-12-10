"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const skills = [
    "Kotlin", "Dart", "Jetpack Compose", "Flutter",
    "Coroutines & Flow", "StateFlow & SharedFlow",
    "Material Design 3", "Navigation",
    "Hilt & Dagger", "KSP", "Modular Architecture",
    "Retrofit / OkHttp", "Dio", "JSON Serialization",
    "Room / DataStore", "Firebase", "In-App Purchases",
    "BLoC / Riverpod", "Clean Architecture", "MVVM",
    "Performance Optimization", "Payment Gateways",
    "WorkManager", "CI/CD", "Git & GitHub",
    "Play Store Publishing", "UI/UX Implementation"
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
