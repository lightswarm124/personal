// src/app/layout.js
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const metadata = {
  title: "My Personal Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-textPrimary">
        <Header />
        <main className="mt-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        {children}
      </body>
    </html>
  );
}
