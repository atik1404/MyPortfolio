import Image from "next/image";
import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section id="about">
            <div className="container">
                <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
                    About Me
                </h2>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            I’m a mobile application developer who loves turning complex problems
                            into smooth, fast and user-friendly apps. Over the past few years,
                            I’ve worked end-to-end on real-world products like intercity ticket
                            booking, vehicle rental, ERP, payment, and social/dating apps — from
                            planning and architecture to shipping to the Play Store and iterating
                            based on real user feedback.
                        </p>
                        <p>
                            My main focus is on modern Android and cross-platform development. I
                            work with <strong>Kotlin, Jetpack Compose, Clean Architecture,
                                multi-module setups, Kotlin Flow/Coroutines, Hilt DI</strong>, and{" "}
                            <strong>Flutter</strong> for cross-platform apps. I enjoy designing
                            solid architecture, writing clean and maintainable code, and
                            integrating robust backend APIs to keep apps scalable and reliable. I
                            also care a lot about <strong>performance, analytics, crash-free
                                stability, build optimization, and release workflows</strong>.
                        </p>
                        <p>
                            On the UI/UX side, I like building reusable <strong>design systems</strong>
                            , components, and theming so that apps not only work well but also
                            feel consistent and enjoyable to use. Recently, I’ve also started
                            exploring <strong>iOS</strong> and <strong>backend with Node.js</strong>
                            , along with AI-powered features, to become more full-stack in my
                            thinking.
                        </p>
                        <p>
                            I’m always interested in collaborating on products that solve real
                            problems and impact people’s daily lives. If you’re looking for
                            someone who can own a feature from idea to production—and cares about
                            both code quality and user experience—I’d be happy to connect.
                        </p>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                        <Image
                            src="/images/profile-v2.jpg"
                            alt="Profile Photo"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
