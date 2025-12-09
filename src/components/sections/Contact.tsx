"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Mail, MessageSquare, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact" className="pb-32">
            <div className="container max-w-4xl">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
                    Get In Touch
                </h2>
                <Card className="grid overflow-hidden p-0 md:grid-cols-2">
                    <div className="flex flex-col justify-between bg-primary p-8 text-primary-foreground">
                        <div>
                            <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
                            <p className="mb-8 text-primary-foreground/80">
                                Fill out the form or send me an email directly.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:hello@example.com"
                                    className="flex items-center gap-3 text-sm hover:underline"
                                >
                                    <Mail className="h-5 w-5" />
                                    hello@example.com
                                </a>
                                <div className="flex items-center gap-3 text-sm">
                                    <MessageSquare className="h-5 w-5" />
                                    Available for freelance
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-xs text-primary-foreground/60">
                                © {new Date().getFullYear()} PlayGround.
                            </p>
                        </div>
                    </div>

                    <div className="p-8">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </Card>
            </div>
        </Section>
    );
}
