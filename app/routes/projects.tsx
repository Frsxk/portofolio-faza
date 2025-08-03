import type { Route } from "./+types/projects";
import Layout from "../components/Layout";
import { useMemo } from "react";
import { PROJECTS } from "~/utils/projectData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Muhammad Faza Al-Banna" },
    { name: "description", content: "Explore my portfolio of projects showcasing skills in Python, Java, JavaScript, React, and more." },
    { name: "keywords", content: "Projects, Portfolio, Python, Java, JavaScript, React, Web Development" },
  ];
}

export default function Projects() {
  const projects = PROJECTS;

  const featuredProjects = useMemo(() => 
    projects.filter(project => project.featured).slice(0, 2),
    []
  );

  const technologies = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-bg -mt-16 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            A showcase of my work, demonstrating skills in various technologies and problem-solving approaches
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Highlighting some of my most significant and impactful projects
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/15 text-primary-dark rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className={`flex gap-4 ${project.live === '#' ? 'justify-center' : ''}`}>
                    {project.github === 'Project is close-sourced' ? (
                      <div className="flex-1 relative group">
                        <button className="w-full bg-gray-400 text-white px-6 py-3 rounded-lg text-center font-semibold cursor-not-allowed">
                          View Code
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          Project is close-sourced
                        </div>
                      </div>
                    ) : (
                      <a href={project.github} className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition-colors">
                        View Code
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} className="flex-1 bg-primary text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-primary-dark transition-colors">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/15 text-primary-dark rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className={`flex gap-3 ${project.live === '#' ? 'justify-center' : ''}`}>
                    {project.github === 'Project is close-sourced' ? (
                      <div className="flex-1 relative group">
                        <button className="w-full bg-gray-400 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold cursor-not-allowed">
                          GitHub
                        </button>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          Project is close-sourced
                        </div>
                      </div>
                    ) : (
                      <a href={project.github} className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-gray-800 transition-colors">
                        GitHub
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-primary-dark transition-colors">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technologies I Use</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The tools and technologies that power my projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="bg-white p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in flex flex-col items-center justify-center relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-dark text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}