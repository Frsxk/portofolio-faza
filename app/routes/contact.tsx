import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "~/components/Layout";
import AnimatedHeading from "~/components/AnimatedHeading";
import Reveal from "~/components/Reveal";
import MagneticButton from "~/components/MagneticButton";

export function meta() {
  return [
    { title: "Contact | Faza Al-Banna" },
    { name: "description", content: "Get in touch with Muhammad Faza Al-Banna" },
  ];
}

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Frsxk", icon: "GH" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/faza-al-banna", icon: "LI" },
  { name: "Instagram", url: "https://instagram.com/faza_0810", icon: "IG" },
  { name: "Discord", url: "https://discord.com/users/543313602942337035", icon: "DC" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Stagger form fields
      if (formRef.current) {
        const fields = formRef.current.querySelectorAll<HTMLElement>(".form-field");
        gsap.fromTo(
          fields,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%", once: true },
          }
        );
      }

      // Stagger social cards
      if (socialRef.current) {
        const cards = socialRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.85, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: socialRef.current, start: "top 85%", once: true },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="min-h-[50vh] flex items-center px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-4">Get in Touch</p>
          </Reveal>
          <AnimatedHeading as="h1" className="display-hero mb-6">
            Contact
          </AnimatedHeading>
          <Reveal delay={0.3}>
            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              Have a project idea, a question, or just want to chat? I'd love to hear from you.
              Drop me a message or connect through my socials below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════ CONTACT FORM + SOCIALS ═══════ */}
      <section className="py-24 px-6 md:px-10 border-t border-line">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedHeading as="h2" className="display-lg mb-8">
              Send a Message
            </AnimatedHeading>
            <form ref={formRef} className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="form-field">
                <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="form-field">
                <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full bg-transparent border-b border-line py-3 text-paper placeholder:text-muted/40 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <div className="form-field pt-4">
                <MagneticButton className="px-10 py-3.5 rounded-full bg-primary text-ink font-mono text-sm tracking-wider uppercase hover:bg-primary-light transition-colors">
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <AnimatedHeading as="h2" className="display-lg mb-8">
              Connect
            </AnimatedHeading>
            <div ref={socialRef} className="grid grid-cols-2 gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-surface rounded-xl p-6 text-center group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 flex items-center justify-center font-mono text-sm text-muted group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
                    {social.icon}
                  </div>
                  <p className="font-mono text-xs text-paper group-hover:text-primary transition-colors">
                    {social.name}
                  </p>
                </a>
              ))}
            </div>

            {/* Email direct */}
            <Reveal delay={0.4} className="mt-10">
              <div className="card-surface rounded-xl p-6">
                <p className="font-mono text-xs text-muted tracking-wider uppercase mb-2">Or email directly</p>
                <a
                  href="mailto:faza.albanna@gmail.com"
                  className="font-display text-lg text-paper hover:text-primary transition-colors break-all"
                >
                  faza.albanna@gmail.com
                </a>
              </div>
            </Reveal>

            {/* Availability */}
            <Reveal delay={0.5} className="mt-6">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-lime"></span>
                </span>
                <span className="font-mono text-xs text-muted">Available for collaborations</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════ LARGE CTA ═══════ */}
      <section className="py-32 px-6 text-center border-t border-line">
        <AnimatedHeading as="h2" className="display-xl mb-4">
          Let's Create Something
        </AnimatedHeading>
        <AnimatedHeading as="p" className="display-xl text-gradient">
          Amazing Together
        </AnimatedHeading>
      </section>
    </Layout>
  );
}
