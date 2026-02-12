"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Laptop, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollTo } from "@/hooks/useScrollTo";
import { TesseractCanvas } from "@/components/tesseract-canvas";
import { GeistPixelCircle, GeistPixelGrid, GeistPixelLine } from "geist/font/pixel";
import { GeistMono } from "geist/font/mono";

export default function Home() {
  const scrollTo = useScrollTo();

  return (
    <main className="min-h-screen">
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
      <section className="min-h-screen pt-24 sm:pt-24 md:pt-24 pb-10 sm:pb-14 vaporwave-grid">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100svh-5.5rem)] md:min-h-[calc(100vh-5rem)] items-start md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-6 md:space-y-7 pt-2 md:pt-0"
          >
            <p className="retro-kicker">Available For Client Work</p>
            <h1 className={`${GeistPixelLine.className} text-4xl sm:text-6xl md:text-7xl leading-tight`}>
              <span className="pixel-cast-shadow">Crafting Digital</span>{" "}
              <span className="text-gradient pixel-cast-shadow">Experiences</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Web Developer specializing in React, Next.js, and modern web technologies.
              Creating fast, responsive, and beautiful web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="group w-full sm:w-auto border border-primary/50 shadow-[0_0_0_1px_hsl(var(--primary)/0.2)] hover:shadow-[0_0_22px_hsl(var(--primary)/0.32)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                onClick={() => scrollTo("work")}
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary/55 bg-background/50 hover:bg-primary/12 hover:border-primary/80 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                onClick={() => scrollTo("contact")}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] sm:h-[360px] md:h-[560px] mt-1 md:mt-0"
          >
            <div className="retro-window h-full overflow-hidden flex flex-col">
              <div className="retro-window-bar">
                <span className="retro-dot" />
                <span className="retro-dot opacity-70" />
                <span className="retro-dot opacity-45" />
                <span className="ml-2">4D Visualizer</span>
                <span className="ml-auto text-primary/80">tesseract.tsx</span>
              </div>
              <div className="relative flex-1 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-5">
                  <div className="h-full max-w-full aspect-square">
                    <TesseractCanvas />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="retro-kicker mb-3">Toolkit</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern web development technologies to create seamless, responsive sites
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            <SkillCard
              icon={<Code2 className="h-8 w-8" />}
              title="Frontend Development"
              description="Expert in React, Next.js, and Tailwind. Building responsive and performant web applications."
            />
            <SkillCard
              icon={<Laptop className="h-8 w-8" />}
              title="Modern Technologies"
              description="Utilizing the latest web technologies and best practices for optimal results."
            />
            <SkillCard
              icon={<Globe className="h-8 w-8" />}
              title="SEO Optimization"
              description="Implementing SEO best practices to improve visibility and ranking."
            />
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 md:py-24 bg-muted/65">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="retro-kicker mb-3">Windowed Builds</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
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
      <section id="contact" className="pt-20 md:pt-24 pb-2 md:pb-3 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="retro-kicker mb-3">Open Channel</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
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
            <Card className="overflow-hidden p-0 rounded-sm border border-primary/35 bg-black/45 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className={`${GeistMono.className} space-y-5 p-5 sm:p-7 bg-black/30`}
              >
                <p className="text-[11px] uppercase tracking-[0.12em] text-primary/80">$ mail</p>
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="40c8eb3c-fea8-42cb-98ce-9c19573cce1c"
                />
                
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-primary/85">name</p>
                  <div className="mt-1 flex items-center rounded-sm border border-primary/35 bg-black/40 px-2">
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
                  <div className="mt-1 flex items-center rounded-sm border border-primary/35 bg-black/40 px-2">
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
                  <div className="mt-1 flex items-start rounded-sm border border-primary/35 bg-black/40 px-2 pt-2">
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

function SkillCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-sm retro-card"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
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
      className="group h-[320px] sm:h-[340px] w-full cursor-pointer select-none rounded-sm retro-card overflow-hidden flex flex-col"
    >
      <div className="retro-window-bar !min-h-0 py-2 px-3">
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
