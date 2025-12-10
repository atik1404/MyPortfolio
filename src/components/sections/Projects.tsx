"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Travel App",
        description:
            "A comprehensive travel booking application designed for seamless itinerary planning, flight and hotel reservations, and local experience discovery.",
        tags: ["Kotlin", "Jetpack Compose", "Google Maps API"],
        image: "/images/project-travel.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Driver App",
        description:
            "Dedicated application for drivers to manage trips, view earnings in real-time, navigate efficiently, and communicate with passengers.",
        tags: ["Flutter", "Dart", "Google Maps SDK"],
        image: "/images/project-driver.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Bus Ticket Booking",
        description:
            "Intercity bus ticketing system featuring visual seat selection, real-time bus tracking, and secure payment processing.",
        tags: ["Android", "Kotlin", "Payment Gateway"],
        image: "/images/project-bus.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Sales & Order Management",
        description:
            "Enterprise mobile tool for field sales representatives to manage customer orders, view inventory, and track sales performance offline.",
        tags: ["Android", "Room DB", "Sync Adapter"],
        image: "/images/project-sales.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Dating App",
        description:
            "Social discovery platform featuring advanced matching algorithms, real-time chat, and profile verification for a safe user experience.",
        tags: ["Flutter", "Firebase", "WebRTC"],
        image: "/images/project-dating.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Student Payment System",
        description:
            "Secure and intuitive payment gateway integration allowing students and parents to pay tuition and fees directly from their mobile devices.",
        tags: ["Kotlin", "SSLCommerz", "Retrofit"],
        image: "/images/project-payment.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Food Delivery Service",
        description:
            "Real-time food ordering application with live order tracking, restaurant discovery, and seamless in-app payments.",
        tags: ["Flutter", "Google Maps", "Stripe"],
        image: "/images/project-food.png",
        links: { demo: "#", git: "#" },
    },
    {
        title: "Fitness Tracker",
        description:
            "Activity tracking app offering personalized workout plans, progress analytics, and integration with wearable devices.",
        tags: ["Jetpack Compose", "Health Connect", "Room"],
        image: "/images/project-fitness.png",
        links: { demo: "#", git: "#" },
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
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.links.git} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" asChild>
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
