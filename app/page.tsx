"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Laptop, Mail, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Home() {
  const scrollTo = useScrollTo();

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "OBLECH",
      "url": "https://oblech-eo0.pages.dev",
      "jobTitle": "Web Developer",
      "knowsAbout": ["React", "Next.js", "TailwindCSS", "Web Development", "Framer"],
      "offers": {
        "@type": "Offer",
        "serviceType": "Web Development Services"
      }
    })
  }}
  />

  return (
    <main className="min-h-screen">
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
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
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
              Specialized in modern web development technologies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground">
              Some of my recent projects
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectCard
              title="Social Hub"
              description="Platform for purchasing social media plans and scheduling expert social media consultations."
              image="/portfolio-images/smedia.png"
            />
            <ProjectCard
              title="Liquor Store"
              description="Clean, modern website showcasing a local liquor store's business, location, and hours of operation."
              image="/portfolio-images/smallbusiness.png"
            />
            <ProjectCard
              title="Restaurant Portal"
              description="Interactive restaurant website with online ordering, menu management, and reservation system."
              image="/portfolio-images/restaurant.png"
            />
          </div>
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
          <Card className="p-6">
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                  }),
                });
                
                if (response.ok) {
                  alert('Message sent successfully!');
                  e.currentTarget.reset();
                } else {
                  alert('Failed to send message. Please try again.');
                }
              } catch (error) {
                alert('Failed to send message. Please try again.');
              }
            }}>
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
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Or reach out directly at{" "}
              <a href="mailto:contact@oblech.dev" className="text-primary hover:underline">
                oblechdev@gmail.com
              </a>
            </p>
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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-xl"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className={`transition-transform duration-300 group-hover:scale-110 object-cover ${
            image.includes('smedia') ? 'object-[25%_center]' : 'object-center'
          }`}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-6 h-full flex flex-col justify-end">
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}