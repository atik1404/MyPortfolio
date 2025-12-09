export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-8">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    © {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-foreground">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
