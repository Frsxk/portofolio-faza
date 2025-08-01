import type { Route } from "./+types/projects";
import Layout from "../components/Layout";
import { useState, useMemo } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Muhammad Faza Al-Banna" },
    { name: "description", content: "Explore my portfolio of projects showcasing skills in Python, Java, JavaScript, React, and more." },
    { name: "keywords", content: "Projects, Portfolio, Python, Java, JavaScript, React, Web Development" },
  ];
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A comprehensive web application built with modern technologies.",
      image: "https://via.placeholder.com/600x400/e91e63/ffffff?text=Project+1",
      technologies: ["React", "Node.js", "JavaScript"],
      category: "Web Development",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "An innovative mobile-first application.",
      image: "https://via.placeholder.com/600x400/c2185b/ffffff?text=Project+2",
      technologies: ["Python", "Java", "HTML/CSS"],
      category: "Mobile App",
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A data-driven application.",
      image: "https://via.placeholder.com/600x400/673ab7/ffffff?text=Project+3",
      technologies: ["Python", "JavaScript", "React"],
      category: "Data Science",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "Data Science"];

  const filteredProjects = useMemo(() => 
    filter === "All" ? projects : projects.filter(project => project.category === filter),
    [filter]
  );

  const featuredProjects = useMemo(() => 
    projects.filter(project => project.featured),
    []
  );


  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
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
                  <div className="flex gap-4">
                    <a href={project.github} className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition-colors">
                      View Code
                    </a>
                    <a href={project.live} className="flex-1 bg-primary text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-primary-dark transition-colors">
                      Live Demo
                    </a>
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  filter === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-800 hover:bg-primary/10 hover:text-primary-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
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
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description.substring(0, 120)}...
                  </p>
                  <div className="flex gap-3">
                    <a href={project.github} className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <a href={project.live} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-center text-sm font-semibold hover:bg-primary-dark transition-colors">
                      Demo
                    </a>
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
            {["Python", "Java", "JavaScript", "HTML/CSS", "React", "Node.js"].map((tech, index) => (
              <div key={tech} className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center font-semibold animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}