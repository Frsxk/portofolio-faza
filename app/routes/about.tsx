import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "~/components/Layout";
import AnimatedHeading from "~/components/AnimatedHeading";
import Reveal from "~/components/Reveal";
import Marquee from "~/components/Marquee";

export function meta() {
  return [
    { title: "About | Faza Al-Banna" },
    { name: "description", content: "Learn more about Muhammad Faza Al-Banna" },
  ];
}

const SKILLS = [
  { name: "Python", level: 100 },
  { name: "Java", level: 95 },
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "Discord.js", level: 70 },
  { name: "Phaser3", level: 70 },
];

const EXPERIENCES = [
  {
    period: "2024 — Present",
    title: "Computer Science Student",
    org: "Binus University",
    description: "Pursuing Bachelor's in Computer Science with a focus on software engineering and creative development.",
  },
  {
    period: "2023 — 2024",
    title: "Web Developer Program",
    org: "Timedoor Academy",
    description: "Completed comprehensive web development program. Built NimeNime Hub as final project.",
  },
  {
    period: "2023 — 2024",
    title: "Game Development Program",
    org: "Timedoor Academy",
    description: "Learned game development with Phaser3. Built Knight of The Night as final project.",
  },
];

export default function About() {
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate skill bars on scroll
      if (skillBarsRef.current) {
        const fills = skillBarsRef.current.querySelectorAll<HTMLElement>(".skill-bar-fill");
        fills.forEach((fill) => {
          const level = parseFloat(fill.dataset.level ?? "0") / 100;
          gsap.to(fill, {
            scaleX: level,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fill,
              start: "top 90%",
              once: true,
            },
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="min-h-[60vh] flex items-center px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">About Me</p>
          </Reveal>
          <AnimatedHeading as="h1" className="display-hero mb-8">
            Hello, I'm Faza
          </AnimatedHeading>
          <Reveal delay={0.3}>
            <p className="text-muted text-lg md:text-xl max-w-3xl leading-relaxed">
              A Computer Science student at Binus University who loves building things that live on the internet.
              I'm drawn to the intersection of design, code, and interactivity — whether it's a web application, a game, or a Discord bot.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <section className="py-10 border-t border-b border-line">
        <Marquee speed={40} direction="right">
          {["Creative", "Curious", "Self-taught", "Builder", "Gamer", "Problem Solver", "Open Source"].map((w) => (
            <span key={w} className="font-display text-3xl md:text-5xl text-stroke text-paper/10 whitespace-nowrap">
              {w}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════ BIO SECTION ═══════ */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Background</p>
            </Reveal>
            <AnimatedHeading as="h2" className="display-lg mb-6">
              My Journey
            </AnimatedHeading>
            <Reveal delay={0.15}>
              <p className="text-muted leading-relaxed mb-4">
                I started coding out of pure curiosity — tinkering with Discord bots, automating games, and building small websites.
                That curiosity evolved into a passion for crafting polished user experiences.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-muted leading-relaxed mb-4">
                Through Timedoor Academy's programs, I formalized my skills in web and game development.
                Now at Binus University, I'm deepening my understanding of computer science while continuing to build creative projects.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="text-muted leading-relaxed">
                When I'm not coding, you'll find me exploring anime, playing games, or diving into new tech stacks.
              </p>
            </Reveal>
          </div>

          {/* Experience timeline */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Experience</p>
            </Reveal>
            <div className="space-y-8 mt-2">
              {EXPERIENCES.map((exp, i) => (
                <Reveal key={exp.title} delay={i * 0.15} x={20} y={0}>
                  <div className="relative pl-6 border-l border-line hover:border-primary transition-colors duration-500">
                    <p className="font-mono text-[0.65rem] text-muted tracking-wider uppercase mb-1">{exp.period}</p>
                    <h3 className="font-display text-lg text-paper mb-0.5">{exp.title}</h3>
                    <p className="text-primary text-sm mb-2">{exp.org}</p>
                    <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SKILLS ═══════ */}
      <section className="py-32 px-6 md:px-10 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">Technical Skills</p>
          </Reveal>
          <AnimatedHeading as="h2" className="display-xl mb-16">
            What I Work With
          </AnimatedHeading>

          <div ref={skillBarsRef} className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 0.08} y={20}>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm text-paper">{skill.name}</span>
                    <span className="font-mono text-xs text-muted">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" data-level={skill.level} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ INTERESTS ═══════ */}
      <section className="py-32 px-6 md:px-10 border-t border-line">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedHeading as="h2" className="display-lg mb-10">
            Beyond Code
          </AnimatedHeading>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Anime & Manga", "Game Development", "Open Source", "UI/UX Design", "Creative Coding", "Music", "Competitive Programming"].map((interest, i) => (
              <Reveal key={interest} delay={i * 0.08} y={15}>
                <span className="px-5 py-2.5 rounded-full border border-line text-sm text-muted hover:border-primary hover:text-primary transition-colors duration-300 cursor-default">
                  {interest}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
