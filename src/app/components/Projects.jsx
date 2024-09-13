// src/app/components/Projects.js
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background text-center">
      <h2 className="text-4xl font-bold text-accent1">Projects</h2>
      <p className="mt-4 text-lg text-textSecondary max-w-3xl mx-auto">
        Explore some of the projects I've worked on:
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-textPrimary">
              {project.title}
            </h3>
            <p className="mt-2 text-textSecondary">{project.description}</p>
            <a
              href={project.link}
              className="text-accent1 mt-4 inline-block hover:text-accent2"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
