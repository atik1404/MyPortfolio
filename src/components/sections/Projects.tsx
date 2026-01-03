"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectLinks {
    demo?: string;
    android?: string;
    ios?: string;
}

interface Project {
    title: string;
    description: string;
    tags: string[];
    image: string;
    links: ProjectLinks;
}

const projects: Project[] = [
    {
        title: "Transport Booking",
        description:
            "A comprehensive multimodal transport booking application covering bus ticketing, ride-sharing, and rental services with real-time tracking.",
        tags: [
            "Flutter",
            "Dart",
            "BLoC",
            "GoRouter",
            "Firebase",
            "Push notification",
        ],
        image: "/images/project-travel-cover.png",
        links: {
            android: "https://tinyurl.com/37t3katx",
            ios: "https://apps.apple.com/us/app/jatri-multimode-travel-app/id6745209359",
        },
    },
    {
        title: "Driver App",
        description:
            "Dedicated application for drivers to manage trips, view earnings in real-time, navigate efficiently, and communicate with passengers.",
        tags: [
            "Android",
            "Kotlin",
            "Material3",
            "Firebase",
            "Clean-architecture",
            "MVVM",
            "Dependency-injection",
        ],
        image: "/images/project-driver-cover.png",
        links: { demo: "https://tinyurl.com/ycay7bx7" },
    },
    {
        title: "Bus Ticket Booking",
        description:
            "Intercity bus ticketing system featuring visual seat selection, real-time bus tracking, and secure payment processing.",
        tags: [
            "Android",
            "Kotlin",
            "Material3",
            "Firebase",
            "Clean-architecture",
            "MVVM",
            "Dependency-injection",
            "POS Printer",
            "Socket",
        ],
        image: "/images/project-bus-cover.png",
        links: { demo: "https://tinyurl.com/4v29r4wj" },
    },
    {
        title: "Sales & Order Management",
        description:
            "Enterprise mobile tool for field sales representatives to manage customer orders, view inventory, and track sales performance offline.",
        tags: [
            "Android",
            "Kotlin",
            "Material3",
            "Firebase",
            "Clean-architecture",
            "MVVM",
            "Dependency-injection",
        ],
        image: "/images/project-sales-cover.png",
        links: { demo: "https://tinyurl.com/vshpstmk" },
    },
    {
        title: "Ispahani Agro Ltd",
        description:
            "A comprehensive mobile application for Ispahani Agro Ltd sales officers to manage indents, bills, and dealer interactions efficiently.",
        tags: ["Android", "Sales Automation", "Offline Support", "Billing System"],
        image: "/images/project-ispahani-agro-cover.png",
        links: {
            android:
                "https://play.google.com/store/apps/details?id=com.stitbd.ispahani_agro_ltd",
        },
    },
    {
        title: "Student Payment System",
        description:
            "Secure and intuitive payment gateway integration allowing students and parents to pay tuition and fees directly from their mobile devices.",
        tags: [
            "Android",
            "Kotlin",
            "Material3",
            "Firebase",
            "Clean-architecture",
            "MVVM",
            "Dependency-injection",
        ],
        image: "/images/project-payment-illustration.png",
        links: { demo: "https://tinyurl.com/bdz3pf4c" },
    },
    {
        title: "FriendFin",
        description:
            "Social discovery platform featuring advanced matching algorithms, real-time chat, and profile verification for a safe user experience.",
        tags: [
            "Jetpack Compose",
            "Android",
            "Kotlin",
            "Material3",
            "Firebase",
            "Clean-architecture",
            "MVVM",
            "Dependency-injection",
        ],
        image: "/images/project-dating-cover.png",
        links: { demo: "https://tinyurl.com/2kw3rdpv" },
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
                                <div className="flex gap-2">
                                    {project.links.android && (
                                        <Button size="sm" asChild className="w-full">
                                            <Link href={project.links.android} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Play Store
                                            </Link>
                                        </Button>
                                    )}
                                    {project.links.ios && (
                                        <Button size="sm" asChild className="w-full">
                                            <Link href={project.links.ios} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> App Store
                                            </Link>
                                        </Button>
                                    )}
                                    {project.links.demo && (
                                        <Button size="sm" asChild className="w-full">
                                            <Link href={project.links.demo} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
