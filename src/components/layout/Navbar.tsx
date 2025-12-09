"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    <span className="text-primary">Dev</span>Portfolio
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden gap-6 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden gap-2 sm:flex">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="https://github.com" target="_blank">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="https://linkedin.com" target="_blank">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="https://twitter.com" target="_blank">
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </Button>
                    </div>
                    <Button>Contact Me</Button>
                </div>
            </div>
        </header>
    );
}
