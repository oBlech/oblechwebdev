"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Laptop, Mail, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useState } from "react";

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
            "knowsAbout": ["React", "Next.js", "TailwindCSS", "Web Development", "Framer"],
            "offers": {
              "@type": "Offer",
              "serviceType": "Web Development Services"
            }
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-16 vaporwave-grid">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Crafting Digital <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Web Developer specializing in React, Next.js, and modern web technologies.
              Creating fast, responsive, and beautiful web applications.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => scrollTo("work")}>
                <span className="text-white">View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl overflow-hidden">
              <Code2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 text-primary/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-muted-foreground">
            Specializing in modern web development technologies to create seamless, responsive sites
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <SkillCard
              icon={<Code2 className="h-8 w-8" />}
              title="Frontend Development"
              description="Expert in React, Next.js, and TailwindCSS. Building responsive and performant web applications."
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
      <section id="work" className="py-20 bg-muted/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground">
            A few recent projects, each built with care for a smooth user experience and thoughtful design
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-16 max-w-[90%] mx-auto md:max-w-full"
          >
            <ProjectCard
              title="Liquor Store"
              description="Clean, modern website showcasing a local liquor store's business, location, and hours of operation."
              image="/portfolio-images/smallbusiness.png"
            />
            <ProjectCard
              title="Social Hub"
              description="Platform for purchasing social media plans and scheduling expert social media consultations."
              image="/portfolio-images/smedia.png"
            />
            <ProjectCard
              title="Restaurant Portal"
              description="Interactive restaurant website with online ordering, menu management, and reservation system."
              image="/portfolio-images/restaurant.png"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Let's discuss your next project
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <form 
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="40c8eb3c-fea8-42cb-98ce-9c19573cce1c"
                />
                
                <div className="space-y-2">
                  <Input name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Input name="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="space-y-2">
                  <Textarea name="message" placeholder="Your Message" className="min-h-[150px]" required />
                </div>
                <Button className="w-full" size="lg" type="submit">
                  <span className="text-white">Send Message</span>
                  <Send className="ml-2 h-4 w-4 text-white" />
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
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center py-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} OBLECH. All rights reserved.</p>
      </div>
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
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl bg-card border"
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
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
  const [isHovered, setIsHovered] = useState(false);
  const altImage = image.replace('.png', 'alt.png');

  return (
    <motion.div
      className="relative h-[300px] w-full cursor-pointer select-none"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
        setIsHovered(true);
      }}
      onTouchEnd={(e) => {
        if (e.target === e.currentTarget) {
          e.preventDefault();
        }
        setIsHovered(false);
      }}
    >
      {/* Back Card */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden shadow-lg select-none"
        animate={{
          x: isHovered ? -20 : -10,
          y: isHovered ? -20 : -10,
          zIndex: isHovered ? 20 : 10,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={altImage}
          alt={`${title} Alternative View`}
          fill
          className="object-cover pointer-events-none"
          draggable="false"
        />
        <motion.div 
          className="absolute inset-0 bg-black/60 select-none"
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 h-full flex flex-col justify-end select-none">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Front Card */}
      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden shadow-lg select-none"
        animate={{
          x: isHovered ? 20 : 10,
          y: isHovered ? 20 : 10,
          zIndex: isHovered ? 10 : 20,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover pointer-events-none ${
            image.includes('smedia') ? 'object-[25%_center]' : 'object-center'
          }`}
          draggable="false"
        />
      </motion.div>
    </motion.div>
  );
}