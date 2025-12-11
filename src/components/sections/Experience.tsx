"use client";

import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
    // Helper to calculate duration
    const calculateDuration = (startDate: string, endDate: string | "Present") => {
        const start = new Date(startDate);
        const end = endDate === "Present" ? new Date() : new Date(endDate);

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        // Add 1 month to include the starting month (inclusive duration)
        months++;
        if (months === 12) {
            years++;
            months = 0;
        }

        const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
        const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

        return [yearStr, monthStr].filter(Boolean).join(" ");
    };

    const experiences = [
        {
            company: "Jatri Service Ltd.",
            role: "Sr. Software Engineer II",
            location: "Dhaka, Bangladesh",
            startDate: "2022-01-01",
            endDate: "Present",
            description: "Leading the mobile development team, architecting scalable solutions, and driving feature innovation for the core logistics and ticketing platform.",
            current: true,
        },
        {
            company: "JMI Pharma",
            role: "Software Engineer",
            location: "Dhaka, Bangladesh",
            startDate: "2020-08-01",
            endDate: "2022-01-01",
            description: "Developed and maintained internal enterprise applications, focusing on sales automation and inventory management systems.",
            current: false,
        },
    ];

    return (
        <Section id="experience" className="bg-muted/30">
            <div className="container">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        Work Experience
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        My professional journey and career milestones.
                    </p>
                </div>

                <div className="mx-auto grid max-w-4xl gap-8">
                    {experiences.map((exp, index) => {
                        const duration = calculateDuration(exp.startDate, exp.endDate);
                        const startLabel = new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "short" });
                        const endLabel = exp.endDate === "Present" ? "Present" : new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "short" });

                        return (
                            <div key={index} className="group relative">
                                {/* Connector Line (Desktop) */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute left-8 top-16 -bottom-10 hidden w-0.5 bg-border md:block" />
                                )}

                                <Card className={`relative overflow-hidden border p-0 transition-all hover:shadow-lg ${exp.current ? 'border-primary/50 bg-background' : 'border-border bg-card/50'}`}>
                                    <div className="flex flex-col md:flex-row">
                                        {/* Left Status Bar */}
                                        <div className={`hidden w-1.5 md:block ${exp.current ? 'bg-primary' : 'bg-muted'}`} />

                                        <div className="flex-1 p-6 md:p-8">
                                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-bold text-foreground">
                                                            {exp.role}
                                                        </h3>
                                                        {exp.current && (
                                                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                                                                Current
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-lg font-medium text-primary">
                                                        {exp.company}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <MapPin className="h-3.5 w-3.5" />
                                                        {exp.location}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start gap-1 md:items-end">
                                                    <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-1 text-sm font-medium">
                                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                                        <span>{startLabel} - {endLabel}</span>
                                                    </div>
                                                    <span className="text-sm font-medium text-muted-foreground">
                                                        {duration}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <p className="border-t border-border pt-4 text-muted-foreground">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
