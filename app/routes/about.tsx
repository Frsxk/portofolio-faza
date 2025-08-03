import type { Route } from "./+types/about";
import Layout from "../components/Layout";
import professionalImage from "~/assets/images/profile_professional.jpg";

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
      period: "2024 - Present",
      description: "Currently pursuing a Bachelor's degree in Information Systems, focusing on software development, database management, and system analysis."
    },
    {
      title: "Front-End Web Development Intern",
      company: "BEM Fasilkom UI",
      period: "Sep 2024 - Nov 2024",
      description: "Joined SBF (Sekolah BEM Fasilkom) PTI as a Front-End Web Development, creating a fully responsive movie-themed website using React."
    },
    {
      title: "ElevAIte with Dicoding",
      company: "Dicoding, hosted by Microsoft",
      period: "Jan 2025 - June 2025",
      description: "Participated in learning plans from Microsoft Learn with the syllabus provided by Dicoding, diving throughly in the field of Artificial Intelligence and Data Engineering."
    },
    {
      title: "Google Cloud Arcade Fasilitator",
      company: "Dicoding, hosted by Google Cloud",
      period: "Jul 2025 - Present",
      description: "Joined a coding scholarship from Google Cloud with gamification concept, improving digital talents in Cloud Computing, Machine Learning, and Artificial Intelligence."
    }
  ];

  const interests = [
    "Web Development",
    "Software Engineering",
    "Game Development",
    "Cloud Computing",
    "Artificial Intelligence",
    "Machine Learning",
    "Open Source",
    "Problem Solving"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 gradient-bg -mt-16 pt-36">
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
                  <img src={professionalImage} alt="profile" className="w-full h-full object-cover object-top rounded-2xl" />
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
    </Layout>
  );
}