"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Laptop, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PixelShaderBackground } from "@/components/pixel-shader-background";
import { useScrollTo } from "@/hooks/useScrollTo";
import { GeistPixelLine } from "geist/font/pixel";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  const scrollTo = useScrollTo();

  return (
    <main className="min-h-screen site-cool-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "OBLECH",
            "url": "https://oblech.dev",
            "jobTitle": "Web Developer",
            "knowsAbout": ["React", "Next.js", "Tailwind", "Web Development", "Framer"],
            "offers": {
              "@type": "Offer",
              "serviceType": "Web Development Services"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <PixelShaderBackground className="hero-pixel-layer absolute inset-0 z-0" />
        <div className="mx-auto relative flex min-h-screen w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 md:justify-start">
          <div className="relative z-10 inline-block py-1 pr-[clamp(2.8rem,8vw,4.8rem)] md:pr-[clamp(3.5rem,8vw,6rem)]">
            <div className="relative inline-block">
              <h1
                aria-hidden="true"
                className={`${GeistPixelLine.className} pointer-events-none absolute left-0 top-0 -z-0 select-none whitespace-nowrap text-[clamp(3rem,8vw,6.5rem)] text-primary/40 blur-[0.6px] [text-shadow:0_0_20px_hsl(var(--primary)/0.4)] translate-x-[0.06em] translate-y-[0.08em]`}
              >
                <span className="block leading-[0.8]">OBLECH</span>
                <span className="absolute -bottom-[0.06em] left-full ml-1 text-[clamp(1.5rem,3.8vw,2.25rem)] leading-[0.8]">
                  dev
                </span>
              </h1>
              <h1
                className={`${GeistPixelLine.className} relative z-10 inline-block select-none whitespace-nowrap text-[clamp(3rem,8vw,6.5rem)]`}
              >
                <span className="block leading-[0.8]">OBLECH</span>
                <span className="absolute -bottom-[0.06em] left-full ml-1 text-[clamp(1.5rem,3.8vw,2.25rem)] leading-[0.8]">
                  dev
                </span>
              </h1>
            </div>
            <div className="absolute left-1/2 top-[calc(100%+clamp(1rem,2.2vw,1.75rem))] flex -translate-x-1/2 flex-col gap-3 md:left-0 md:translate-x-0 md:flex-row md:gap-4">
              <Button
                size="lg"
                className="w-[min(13.5rem,64vw)] justify-center border border-primary/50 shadow-[0_0_0_1px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_22px_hsl(var(--primary)/0.32)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 md:w-auto"
                onClick={() => scrollTo("work")}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-[min(13.5rem,64vw)] justify-center border-primary/55 bg-background/50 hover:bg-primary/12 hover:border-primary/80 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 md:w-auto"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="open-section py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 open-section-head"
          >
            <p className="retro-kicker mb-3">Toolkit</p>
            <h2 className={`${GeistPixelLine.className} text-3xl md:text-4xl mb-4 tracking-[0.02em]`}>
              My Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern web development technologies to create seamless, responsive sites
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="expertise-matrix relative overflow-hidden"
          >
            <div className="expertise-grid-bg absolute inset-0" aria-hidden="true" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-4 sm:p-6 md:p-7 items-stretch">
              <ExpertiseTile
                className="h-full"
                icon={<Code2 className="h-7 w-7" />}
                title="Frontend Development"
                description="React, Next.js, and Tailwind for fast, responsive UI with clean architecture."
              />
              <ExpertiseTile
                className="h-full"
                icon={<Laptop className="h-7 w-7" />}
                title="Modern Stack"
                description="Current tooling, performance-first patterns, and maintainable component systems."
              />
              <ExpertiseTile
                className="h-full"
                icon={<Globe className="h-7 w-7" />}
                title="SEO + Visibility"
                description="Technical SEO, metadata, and indexing practices to improve discoverability."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="open-section py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 open-section-head"
          >
            <p className="retro-kicker mb-3">Windowed Builds</p>
            <h2 className={`${GeistPixelLine.className} text-3xl md:text-4xl mb-4 tracking-[0.02em]`}>
              Recent Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A few recent projects, each built with care for a smooth user experience and thoughtful design
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-[95%] mx-auto md:max-w-full"
          >
            <a
              className="block"
              href="https://showmanpainting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="Showman Painting"
                description="Professional painting business website with project showcase, services, and much more."
                image="/portfolio-images/showman.png"
              />
            </a>
            <a
              className="block"
              href="https://thevelvetdraw.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="The Velvet Draw"
                description="Sleek and cinematic e-commerce site for The Velvet Draw, a luxury cigar & whiskey channel."
                image="/portfolio-images/velvet.png"
              />
            </a>
            <a
              className="block"
              href="https://luminiq.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectCard
                title="Luminiq"
                description="High-end e-commerce experience for Luminiq, a modern luxury sunglasses brand."
                image="/portfolio-images/luminiq.png"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="open-section pt-20 md:pt-24 pb-2 md:pb-3">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 open-section-head"
          >
            <p className="retro-kicker mb-3">Open Channel</p>
            <h2 className={`${GeistPixelLine.className} text-3xl md:text-4xl mb-4 tracking-[0.02em]`}>
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Let&apos;s discuss your next project
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="contact-open-shell overflow-hidden p-0 rounded-sm">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className={`${GeistMono.className} contact-open-form space-y-5 p-5 sm:p-7`}
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-primary/80">$ mail</p>
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="40c8eb3c-fea8-42cb-98ce-9c19573cce1c"
                />
                
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary/85">name</p>
                  <div className="field-shell mt-1 flex items-center rounded-sm px-2">
                    <span className="text-primary/80 text-sm">&gt;</span>
                    <Input
                      name="name"
                      placeholder="your name"
                      className="!border-0 !bg-transparent !px-2 placeholder:text-primary/45 focus-visible:!ring-0 focus-visible:!ring-offset-0"
                      required
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary/85">email</p>
                  <div className="field-shell mt-1 flex items-center rounded-sm px-2">
                    <span className="text-primary/80 text-sm">&gt;</span>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className="!border-0 !bg-transparent !px-2 placeholder:text-primary/45 focus-visible:!ring-0 focus-visible:!ring-offset-0"
                      required
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary/85">message</p>
                  <div className="field-shell mt-1 flex items-start rounded-sm px-2 pt-2">
                    <span className="text-primary/80 text-sm mt-1">&gt;</span>
                    <Textarea
                      name="message"
                      placeholder="tell me about your project..."
                      className="min-h-[150px] !border-0 !bg-transparent !px-2 !py-1 placeholder:text-primary/45 focus-visible:!ring-0 focus-visible:!ring-offset-0"
                      required
                    />
                  </div>
                </div>
                <Button
                  className={`${GeistMono.className} w-full border border-primary/50 bg-black/45 text-primary hover:bg-primary/20 hover:text-primary`}
                  size="lg"
                  type="submit"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about your inquiry. Your data will only be used to respond to your message.
                </p>
              </form>
            </Card>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Or reach out directly at{" "}
                <a href="mailto:contact@oblech.dev" className="text-primary hover:underline">
                  contact@oblech.dev
                </a>
              </p>
            </div>
          </motion.div>
          <div className="mt-3 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} OBLECH. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExpertiseTile({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`expertise-tile ${className}`}>
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{description}</p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group h-[320px] sm:h-[340px] w-full cursor-pointer select-none rounded-sm retro-card open-project-card overflow-hidden flex flex-col"
    >
      <div className="retro-window-bar open-project-bar !min-h-0 py-2 px-3">
        <span className="retro-dot" />
        <span className="retro-dot opacity-70" />
        <span className="ml-2 truncate">{title}</span>
        <span className="ml-auto text-primary/70">live</span>
      </div>
      <div className="relative flex-1 min-h-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center pointer-events-none"
          draggable="false"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.12em] text-primary/90">View Project</p>
        </div>
      </div>
    </motion.div>
  );
}
