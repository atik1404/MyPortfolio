"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Travel Android App",
        description:
            "A comprehensive travel booking application designed for seamless itinerary planning, flight and hotel reservations, and local experience discovery.",
        tags: ["Flutter", "Dart", "Bloc", "Google Maps"],
        image: "/images/project-travel.png",
        links: { demo: "https://tinyurl.com/37t3katx" },
    },
    {
        title: "Travel iOS App",
        description:
            "A comprehensive travel booking application designed for seamless itinerary planning, flight and hotel reservations, and local experience discovery.",
        tags: ["Flutter", "Dart", "Bloc", "Google Maps"],
        image: "/images/project-travel.png",
        links: { demo: "https://tinyurl.com/37t3katx" },
    },
    {
        title: "Driver App",
        description:
            "Dedicated application for drivers to manage trips, view earnings in real-time, navigate efficiently, and communicate with passengers.",
        tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Google Maps"],
        image: "/images/project-driver.png",
        links: { demo: "https://tinyurl.com/ycay7bx7" },
    },
    {
        title: "Bus Ticket Booking",
        description:
            "Intercity bus ticketing system featuring visual seat selection, real-time bus tracking, and secure payment processing.",
        tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Payment Gateway"],
        image: "/images/project-bus.png",
        links: { demo: "https://tinyurl.com/4v29r4wj" },
    },
    {
        title: "Sales & Order Management",
        description:
            "Enterprise mobile tool for field sales representatives to manage customer orders, view inventory, and track sales performance offline.",
        tags: ["Kotlin", "Android SDK", "Room DB", "Coroutines"],
        image: "/images/project-sales.png",
        links: { demo: "https://tinyurl.com/vshpstmk" },
    },
    {
        title: "Dating App",
        description:
            "Social discovery platform featuring advanced matching algorithms, real-time chat, and profile verification for a safe user experience.",
        tags: ["Kotlin", "Android SDK", "Firebase", "WebRTC"],
        image: "/images/project-dating.png",
        links: { demo: "https://tinyurl.com/2kw3rdpv" },
    },
    {
        title: "Student Payment System",
        description:
            "Secure and intuitive payment gateway integration allowing students and parents to pay tuition and fees directly from their mobile devices.",
        tags: ["Kotlin", "Android SDK", "Firebase", "Push Notification"],
        image: "/images/project-payment-illustration.png",
        links: { demo: "https://tinyurl.com/bdz3pf4c" },
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="container">
                <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
                    Featured Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col gap-4 overflow-hidden p-0">
                            <div className="relative aspect-video w-full bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                                    <p className="mb-4 text-sm text-muted-foreground">
                                        {project.description}
                                    </p>
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Button size="sm" asChild className="w-full">
                                        <Link href={project.links.demo} target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
