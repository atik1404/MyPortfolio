# My Personal Portfolio

A modern, high-performance portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## Features

- ⚡️ **High Performance:** Built on Next.js for optimal speed and SEO.
- 🎨 **Modern Design:** Dark mode first, glassmorphism effects, and smooth transitions.
- 📱 **Responsive:** Fully responsive layout for all devices.
- ♿️ **Accessible:** Semantic HTML and accessible components.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components (Button, Card)
├── lib/                  # Utilities (Tailwind merge, etc.)
└── ...
```

## Customization

- **Colors:** Updated in `src/app/globals.css`.
- **Content:** Modify sections in `src/components/sections/`.
- **Metadata:** Update in `src/app/layout.tsx`.

## License

This project is licensed under the MIT License.
