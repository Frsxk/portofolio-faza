import type { Route } from "./+types/about";
import Layout from "../components/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Muhammad Faza Al-Banna" },
    { name: "description", content: "Learn more about Muhammad Faza Al-Banna, Information Systems student at University of Indonesia with passion for technology and programming." },
    { name: "keywords", content: "About Faza, Information Systems, University of Indonesia, Student, Developer, Programming" },
  ];
}

export default function About() {
  const experiences = [
    {
      title: "Information Systems Student",
      company: "University of Indonesia",
      period: "2022 - Present",
      description: "Currently pursuing a Bachelor's degree in Information Systems, focusing on software development, database management, and system analysis."
    },
    {
      title: "Experience Placeholder 1",
      company: "Company Name",
      period: "Year - Year",
      description: "Add your work experience, internships, or significant projects here. This is a placeholder for you to customize."
    },
    {
      title: "Experience Placeholder 2",
      company: "Organization Name",
      period: "Year - Year",
      description: "Another experience placeholder. You can add volunteer work, leadership roles, or other relevant experiences."
    }
  ];

  const interests = [
    "Web Development",
    "Mobile Applications",
    "Database Design",
    "System Architecture",
    "Machine Learning",
    "Open Source",
    "Technology Innovation",
    "Problem Solving"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Get to know more about my journey, experiences, and what drives my passion for technology
          </p>
        </div>
      </section>

      {/* Detailed About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square bg-gradient-to-br from-primary-light to-primary rounded-2xl flex items-center justify-center">
                  <span className="text-8xl font-bold text-white">FA</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm Muhammad Faza Al-Banna, a passionate undergraduate student at the University of Indonesia, 
                  majoring in Information Systems. My journey in technology began with curiosity about how 
                  digital systems work and has evolved into a deep passion for creating meaningful solutions.
                </p>
                <p>
                  With a keen interest in programming and computer science, I'm constantly exploring new 
                  technologies and methodologies. I believe that technology has the power to solve real-world 
                  problems and improve people's lives, which drives my commitment to continuous learning.
                </p>
                <p>
                  I'm always seeking new opportunities to learn and grow, both academically and professionally. 
                  My goal is to leverage my technical skills to contribute meaningfully to the digital world 
                  and make a positive impact through innovative solutions.
                </p>
                <p>
                  When I'm not coding or studying, I enjoy exploring new technologies, contributing to open-source 
                  projects, and connecting with fellow developers in the tech community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-primary-dark font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interests & Passions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Areas that fascinate me and drive my continuous learning journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="bg-gradient-to-br from-primary to-primary-dark text-white p-6 rounded-xl text-center font-semibold animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Always seeking creative solutions and pushing the boundaries of what's possible with technology.</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Learning</h3>
              <p className="text-gray-600">Committed to staying updated with the latest technologies and best practices in the field.</p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">Believing in the power of teamwork and knowledge sharing to achieve greater results.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}