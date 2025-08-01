import type { Route } from "./+types/home";
import Layout from "../components/Layout";
import { Link } from "react-router";
import { SKILLS } from "~/utils/constants";
import { PROJECTS } from "~/utils/projectData";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Muhammad Faza Al-Banna - Information Systems Student & Developer" },
    { name: "description", content: "Passionate undergraduate student at University of Indonesia majoring in Information Systems. Exploring endless possibilities of technology with skills in Python, Java, JavaScript, React, and more." },
    { name: "keywords", content: "Muhammad Faza Al-Banna, Information Systems, University of Indonesia, Developer, Python, Java, JavaScript, React, Portfolio" },
    { property: "og:title", content: "Muhammad Faza Al-Banna - Portfolio" },
    { property: "og:description", content: "Passionate undergraduate student exploring technology and programming" },
    { property: "og:type", content: "website" },
  ];
}

export default function Home() {
  const skills = SKILLS;

  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center gradient-bg -mt-16 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center animate-float">
              <span className="text-4xl font-bold text-white">F</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Muhammad Faza Al-Banna
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Passionate Information Systems Student at University of Indonesia
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Exploring endless possibilities of technology with a keen interest in programming and computer science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-white">FA</span>
              </div>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Hello! I'm Faza</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate undergraduate student at University of Indonesia majoring in Information Systems. 
                With a keen interest in programming and computer science, I'm eager to explore endless possibilities of technology.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always seeking new opportunities to learn and grow, both academically and professionally. 
                My goal is to leverage my technical skills to contribute meaningfully to the digital world.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More About Me
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-gray-700">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <a href={project.github} className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition-colors">
                      GitHub
                    </a>
                    <a href={project.live} className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary-dark transition-colors">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
