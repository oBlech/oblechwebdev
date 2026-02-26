"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
                className="hero-work-btn !bg-transparent hover:!bg-transparent w-[min(13.5rem,64vw)] justify-center md:w-auto"
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

      {/* Skills / About Section - Modernized */}
      <section id="about" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-12 justify-between items-start mb-20"
          >
            <h2 className={`${GeistPixelLine.className} text-5xl md:text-7xl leading-[1.1] tracking-tight md:max-w-xl`}>
              Pushing <span className="text-primary/80">pixels</span> & boundaries.
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mt-2 md:mt-4">
              I specialize in building immersive digital experiences. Blending cutting-edge tech with meticulous design to create web products that stand out and perform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8 pt-12 border-t border-primary/20">
            {[
              { num: "01", title: "Frontend Architecture", desc: "Crafting scalable, fast, and responsive user interfaces with React, Next.js, and modern CSS frameworks." },
              { num: "02", title: "Creative Development", desc: "Bringing static designs to life with fluid animations, interactive layouts, and micro-interactions that engage users." },
              { num: "03", title: "Performance & SEO", desc: "Ensuring your site not only looks stunning but ranks high, loads instantly, and delivers across all devices." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col gap-5 group"
              >
                <span className={`${GeistMono.className} text-primary/50 text-sm tracking-[0.2em] uppercase`}>
                  {item.num} //
                </span>
                <h3 className={`${GeistPixelLine.className} text-3xl group-hover:text-primary transition-colors duration-300`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section - Modernized */}
      <section id="work" className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <p className={`${GeistMono.className} text-primary/80 text-sm tracking-[0.15em] uppercase mb-4`}>
                Selected Work
              </p>
              <h2 className={`${GeistPixelLine.className} text-5xl md:text-7xl tracking-tight`}>
                Recent Projects
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              A curated selection of my latest projects, blending aesthetics with performance.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-primary/20">
            {[
              { title: "Showman Painting", desc: "Professional painting business website.", link: "https://showmanpainting.com", img: "/portfolio-images/showman.png", role: "Design & Dev" },
              { title: "The Velvet Draw", desc: "Sleek and cinematic e-commerce site.", link: "https://thevelvetdraw.com/", img: "/portfolio-images/velvet.png", role: "Fullstack E-comm" },
              { title: "Luminiq", desc: "High-end luxury sunglasses brand experience.", link: "https://luminiq.ca", img: "/portfolio-images/luminiq.png", role: "Frontend & UI" }
            ].map((p, i) => (
              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-primary/20 py-10 md:py-16 gap-6 transition-colors hover:bg-primary/[0.03]"
              >
                <div className="flex flex-col z-0 md:w-1/2">
                  <span className={`${GeistMono.className} text-sm text-primary/60 mb-3 uppercase tracking-wider`}>
                    {p.role}
                  </span>
                  <h3 className={`${GeistPixelLine.className} text-4xl md:text-5xl lg:text-6xl text-foreground group-hover:text-primary transition-colors duration-300`}>
                    {p.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground md:hidden">{p.desc}</p>
                </div>
                
                {/* Image Reveal on Hover (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[28rem] h-[18rem] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1/2 transition-all duration-500 pointer-events-none z-20 overflow-hidden rounded-sm border border-primary/20 shadow-2xl">
                  <Image src={p.img} alt={p.title} fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="flex items-center justify-between md:w-1/4 z-0">
                  <p className="hidden md:block text-muted-foreground text-right w-full pr-8">
                    {p.desc}
                  </p>
                  <div className={`${GeistMono.className} inline-flex items-center justify-center rounded-sm border border-primary/30 px-6 py-2 text-sm font-medium shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all`}>
                    Visit Site
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modernized */}
      <section id="contact" className="py-24 md:py-32 relative border-t border-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className={`${GeistMono.className} text-primary/80 text-sm tracking-[0.2em] uppercase mb-6`}>
              Open Channel
            </p>
            <h2 className={`${GeistPixelLine.className} text-[clamp(3.5rem,8vw,8rem)] leading-none text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 mb-8`}>
              LET&apos;S TALK
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
              Ready to start a project? Have a question? My inbox is always open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full text-left"
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-10">
              <input type="hidden" name="access_key" value="40c8eb3c-fea8-42cb-98ce-9c19573cce1c" />
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required 
                    className={`${GeistMono.className} peer w-full bg-transparent border-0 border-b border-primary/30 py-4 px-0 text-lg md:text-xl focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder-transparent`} 
                    placeholder="Name" 
                  />
                  <label htmlFor="name" className={`${GeistMono.className} absolute left-0 top-4 text-muted-foreground text-lg md:text-xl cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:text-primary/70 uppercase tracking-widest`}>
                    What&apos;s your name?
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required 
                    className={`${GeistMono.className} peer w-full bg-transparent border-0 border-b border-primary/30 py-4 px-0 text-lg md:text-xl focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder-transparent`} 
                    placeholder="Email" 
                  />
                  <label htmlFor="email" className={`${GeistMono.className} absolute left-0 top-4 text-muted-foreground text-lg md:text-xl cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:text-primary/70 uppercase tracking-widest`}>
                    What&apos;s your email?
                  </label>
                </div>
              </div>

              <div className="relative group mt-4">
                <textarea 
                  name="message" 
                  id="message"
                  required 
                  className={`${GeistMono.className} peer w-full bg-transparent border-0 border-b border-primary/30 py-4 px-0 text-lg md:text-xl focus:ring-0 focus:border-primary focus:outline-none transition-colors placeholder-transparent min-h-[120px] resize-none`} 
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className={`${GeistMono.className} absolute left-0 top-4 text-muted-foreground text-lg md:text-xl cursor-text transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-6 peer-valid:text-xs peer-valid:text-primary/70 uppercase tracking-widest`}>
                  Tell me about your project...
                </label>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
                <p className="text-xs text-muted-foreground text-center md:text-left max-w-sm">
                  By submitting this form, you agree to be contacted about your inquiry. Your data will only be used to respond to your message.
                </p>
                
                <button 
                  type="submit" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 font-mono text-sm uppercase tracking-[0.2em] overflow-hidden border border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full md:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>

          <div className="mt-24 pt-8 border-t border-primary/10 w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`${GeistMono.className} text-sm text-muted-foreground`}>
              &copy; {new Date().getFullYear()} OBLECH. All rights reserved.
            </p>
            <a href="mailto:contact@oblech.dev" className={`${GeistMono.className} text-sm text-primary hover:underline uppercase tracking-widest`}>
              contact@oblech.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
