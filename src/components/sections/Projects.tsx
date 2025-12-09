"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Project One",
        description:
            "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track.",
        tags: ["Next.js", "TypeScript", "Spotify API"],
        links: { demo: "#", git: "#" },
    },
    {
        title: "Project Two",
        description:
            "A nice simple chat app for you and your friends. Built with Socket.io and React, it features real-time messaging, user authentication, and group chats.",
        tags: ["React", "Socket.io", "Express"],
        links: { demo: "#", git: "#" },
    },
    {
        title: "Project Three",
        description:
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
        tags: ["VS Code", "Theme", "Design"],
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
                                {/* Image Placeholder */}
                                <div className="flex h-full w-full items-center justify-center text-muted-foreground/50">
                                    Project Screenshot
                                </div>
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
