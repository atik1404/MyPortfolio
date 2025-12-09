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
                            Hello! My name is [Your Name] and I enjoy creating things that live
                            on the internet. My interest in web development started back in 2018
                            when I decided to try editing custom Tumblr themes — turns out
                            hacking together HTML & CSS is a lot of fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've had the privilege of working at an
                            advertising agency, a start-up, a huge corporation, and a
                            student-led design studio. My main focus these days is building
                            accessible, inclusive products and digital experiences for a variety
                            of clients.
                        </p>
                        <p>
                            When I'm not at the computer, I'm usually hanging out with my cat,
                            reading, or running around searching for retro video games.
                        </p>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                        {/* Placeholder for user image */}
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                            Profile Image Placeholder
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
