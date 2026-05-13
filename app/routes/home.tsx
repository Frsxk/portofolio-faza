import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "~/components/Layout";
import AnimatedHeading from "~/components/AnimatedHeading";
import Reveal from "~/components/Reveal";
import Marquee from "~/components/Marquee";
import MagneticButton from "~/components/MagneticButton";

export function meta() {
  return [
    { title: "Faza Al-Banna | Creative Developer" },
    { name: "description", content: "Portfolio of Muhammad Faza Al-Banna — Creative Developer & CS Student" },
  ];
}

const MARQUEE_WORDS = [
  "React", "TypeScript", "Python", "Java", "Node.js", "GSAP",
  "Phaser3", "Discord.js", "TailwindCSS", "Vite", "Creative Dev",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Subtitle fade in after heading
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, delay: 1.8, ease: "power3.out" }
        );
      }

      // CTA buttons stagger
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 2.2, ease: "power3.out" }
        );
      }

      // Scroll indicator bounce
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, delay: 3, duration: 0.6 }
        );
        gsap.to(scrollIndicatorRef.current, {
          y: 12,
          duration: 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 3.2,
        });
      }

      // Parallax hero on scroll
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: 30,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroRef} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Eyebrow */}
          <Reveal delay={0.8} y={20}>
            <p className="eyebrow mb-6">Creative Developer &amp; CS Student</p>
          </Reveal>

          {/* Main heading */}
          <AnimatedHeading as="h1" className="display-hero text-paper mb-6" immediate delay={1.2}>
            Faza Al-Banna
          </AnimatedHeading>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-muted text-lg md:text-xl max-w-2xl mx-auto opacity-0 mb-10">
            I build beautiful, interactive digital experiences — from web apps and games to bots and beyond.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton as="a" href="/projects" className="px-8 py-3 rounded-full bg-primary text-ink font-mono text-sm tracking-wider uppercase hover:bg-primary-light transition-colors">
              View Projects
            </MagneticButton>
            <MagneticButton as="a" href="/contact" className="px-8 py-3 rounded-full border border-line text-paper font-mono text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-colors">
              Get in Touch
            </MagneticButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0">
          <div className="w-5 h-9 rounded-full border-2 border-muted flex items-start justify-center pt-1.5">
            <div className="w-1 h-2.5 rounded-full bg-primary" />
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE SECTION ═══════ */}
      <section className="py-16 border-t border-b border-line overflow-hidden">
        <Marquee speed={50} direction="left" className="text-paper/10">
          {MARQUEE_WORDS.map((word) => (
            <span key={word} className="display-lg text-stroke whitespace-nowrap">
              {word}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════ INTRO / ABOUT TEASER ═══════ */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Who am I?</p>
            </Reveal>
            <AnimatedHeading as="h2" className="display-xl mb-6">
              A Passionate Builder
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <p className="text-muted leading-relaxed mb-4">
                I'm a Computer Science student at Binus University with a passion for crafting polished digital products. 
                From anime blog sites to adventure RPG games, Discord bots to full-stack web apps — I love turning ideas into reality.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="text-muted leading-relaxed mb-8">
                My toolkit spans Python, Java, TypeScript, React, Node.js, and creative frameworks like Phaser3 and GSAP.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary-light transition-colors group"
              >
                Learn more about me
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </Reveal>
          </div>

          {/* Decorative stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "5+", label: "Projects Built" },
              { number: "8+", label: "Technologies" },
              { number: "3+", label: "Years Coding" },
              { number: "∞", label: "Curiosity" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.12} y={30}>
                <div className="card-surface p-6 text-center rounded-xl">
                  <p className="display-lg text-gradient mb-1">{stat.number}</p>
                  <p className="font-mono text-[0.65rem] text-muted tracking-wider uppercase">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PROJECTS TEASER ═══════ */}
      <section className="py-32 px-6 md:px-10 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <Reveal>
                <p className="eyebrow mb-3">Selected Work</p>
              </Reveal>
              <AnimatedHeading as="h2" className="display-xl">
                Featured Projects
              </AnimatedHeading>
            </div>
            <Reveal x={20} y={0}>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary-light transition-colors group"
              >
                View all
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NimeNime Hub",
                desc: "Anime & Manga blog built with pure HTML/CSS/JS",
                techs: ["HTML", "CSS", "JavaScript"],
                url: "https://nimenime.netlify.app",
              },
              {
                title: "Knight of The Night",
                desc: "Web-based Adventure RPG game with Phaser3",
                techs: ["Phaser3", "Node.js"],
                url: "https://knight-of-the-night.netlify.app/",
              },
              {
                title: "Smol Maiden",
                desc: "Multi-purpose Discord bot for channel organization",
                techs: ["Discord.js", "Node.js"],
                url: "#",
              },
            ].map((project, i) => (
              <Reveal key={project.title} delay={i * 0.15} y={40}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-surface p-6 rounded-xl group h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {project.techs.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 font-mono text-[0.6rem] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{project.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <span>&rarr;</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary"
            >
              View all projects &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="py-32 px-6 text-center border-t border-line">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeading as="h2" className="display-xl mb-6">
            Let's Work Together
          </AnimatedHeading>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
              Have a project in mind or just want to say hello? I'm always open to new conversations and collaborations.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <MagneticButton
              as="a"
              href="/contact"
              className="px-10 py-4 rounded-full bg-primary text-ink font-mono text-sm tracking-wider uppercase hover:bg-primary-light transition-colors"
            >
              Say Hello
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
