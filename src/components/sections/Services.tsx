"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Smartphone, Layers, Code2 } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Android App Development",
            description:
                "Building robust, high-performance native Android applications using Kotlin and Jetpack Compose. I focus on creating intuitive user interfaces and seamless user experiences tailored to the Android ecosystem.",
            icon: Smartphone,
        },
        {
            title: "Flutter App Development",
            description:
                "Developing cross-platform mobile applications for both iOS and Android using Flutter. Write once, run anywhere efficiency without compromising on native performance and look-and-feel.",
            icon: Layers,
        },
        {
            title: "API Integration & Backend",
            description:
                "Seamlessly connecting mobile apps with properly architected backend services. Expertise in RESTful APIs, Firebase integration, and real-time data synchronization.",
            icon: Code2,
        },
    ];

    return (
        <Section id="services">
            <div className="container">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
                    Services I Offer
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-primary/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
