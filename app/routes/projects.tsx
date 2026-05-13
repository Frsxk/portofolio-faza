import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "~/components/Layout";
import AnimatedHeading from "~/components/AnimatedHeading";
import Reveal from "~/components/Reveal";
import MagneticButton from "~/components/MagneticButton";

export function meta() {
  return [
    { title: "Projects | Faza Al-Banna" },
    { name: "description", content: "Selected projects by Muhammad Faza Al-Banna" },
  ];
}

const PROJECTS = [
  {
    id: 1,
    title: "NimeNime Hub",
    description: "A blog-type website focusing on Anime and Manga updates. Built using pure HTML/CSS/JavaScript as a Final Project from Timedoor Academy Web Developer Program.",
    image: "https://i.ibb.co.com/PszbgmD1/image-2025-08-12-171025313.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Frsxk/weeb-site",
    live: "https://nimenime.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "Knight of The Night",
    description: "A web-based Adventure RPG game made with Phaser3 framework. Final Project from Timedoor Academy Game Development Program.",
    image: "https://i.ibb.co.com/DHkZwLXX/image-2025-08-12-171329030.png",
    technologies: ["Phaser3", "Node.js"],
    github: "https://github.com/Frsxk/knight-of-the-night",
    live: "https://knight-of-the-night.netlify.app/",
    featured: true,
  },
  {
    id: 3,
    title: "Smol Maiden",
    description: "A multipurpose Discord application for channel organization. Built with Discord.js v13, self-taught and independently developed.",
    image: "https://i.ibb.co.com/5WBcfZHP/image-2025-08-12-171515683.png",
    technologies: ["Discord.js", "Node.js"],
    github: "",
    live: "",
    featured: true,
  },
  {
    id: 4,
    title: "Epic Selfbot",
    description: "A Discord.js automation tool for competitive gaming. An easy-to-configure bot designed for Epic RPG Discord bot.",
    image: "https://i.ibb.co.com/7JCfXJVz/image-2025-08-12-171451444.png",
    technologies: ["Discord.js", "Node.js"],
    github: "https://github.com/Frsxk/Epic-selfbot",
    live: "",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "This very website — a showcase of my work built with React Router, TypeScript, TailwindCSS, and GSAP animations.",
    image: "https://i.ibb.co.com/Qj6stJPf/image-2025-08-12-171543687.png",
    technologies: ["React", "TypeScript", "TailwindCSS", "GSAP"],
    github: "https://github.com/Frsxk/portofolio-faza",
    live: "https://faza-al-banna.netlify.app",
    featured: false,
  },
];

export default function Projects() {
  const horizontalRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Horizontal scroll for featured projects
      const section = horizontalRef.current;
      const wrap = wrapRef.current;
      if (!section || !wrap) return;

      const totalScroll = wrap.scrollWidth - window.innerWidth;

      gsap.to(wrap, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const featured = PROJECTS.filter((p) => p.featured);
  const other = PROJECTS.filter((p) => !p.featured);

  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="min-h-[50vh] flex items-center px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">My Work</p>
          </Reveal>
          <AnimatedHeading as="h1" className="display-hero mb-6">
            Projects
          </AnimatedHeading>
          <Reveal delay={0.3}>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              A collection of things I've built — from websites and games to Discord bots and automation tools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════ HORIZONTAL SCROLL — FEATURED ═══════ */}
      <section ref={horizontalRef} className="relative overflow-hidden border-t border-line">
        <div className="absolute top-8 left-6 md:left-10 z-10">
          <p className="eyebrow">Featured — Scroll horizontally</p>
        </div>
        <div ref={wrapRef} className="horizontal-scroll-wrap min-h-screen items-center pl-6 md:pl-10 pt-20">
          {featured.map((project, i) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] mr-8 md:mr-12"
            >
              <div className="card-surface rounded-2xl overflow-hidden h-full group">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-ink-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[0.6rem] text-muted tracking-wider uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-primary hover:text-primary-light transition-colors"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted hover:text-paper transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* End spacer for scroll */}
          <div className="flex-shrink-0 w-[10vw]" />
        </div>
      </section>

      {/* ═══════ OTHER PROJECTS ═══════ */}
      <section className="py-32 px-6 md:px-10 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <AnimatedHeading as="h2" className="display-lg mb-12">
            Other Projects
          </AnimatedHeading>

          <div className="grid md:grid-cols-2 gap-6">
            {other.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.15} y={30}>
                <div className="card-surface rounded-xl overflow-hidden group">
                  <div className="relative aspect-video overflow-hidden bg-ink-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full bg-white/5 font-mono text-[0.6rem] text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-4">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:text-primary-light transition-colors">
                          Live Demo &rarr;
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted hover:text-paper transition-colors">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
