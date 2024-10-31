"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Code2, ExternalLink, Github, Laptop, MessageCircle, Phone, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1400&h=800&q=80",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "Financial Dashboard",
    description: "Real-time financial analytics dashboard with predictive modeling",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&h=800&q=80",
    tech: ["React", "D3.js", "Node.js"],
    link: "#"
  },
  {
    title: "Social Media App",
    description: "Feature-rich social platform with real-time messaging and content sharing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&h=800&q=80",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#"
  },
  {
    title: "AI Content Generator",
    description: "Advanced content generation platform powered by machine learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&h=800&q=80",
    tech: ["Python", "TensorFlow", "FastAPI"],
    link: "#"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Code2 className="h-20 w-20 mx-auto" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              We Build Digital
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/80">
              Transforming ideas into exceptional digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                Get Started <ChevronRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/80"
          >
            <ChevronRight className="h-8 w-8 rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We're a team of passionate developers and designers who believe in
                creating digital solutions that make a difference. Our approach
                combines creativity with technical excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <Users className="h-8 w-8 mb-2 text-blue-600" />
                  <h3 className="font-semibold">Client Focus</h3>
                </Card>
                <Card className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  <Rocket className="h-8 w-8 mb-2 text-purple-600" />
                  <h3 className="font-semibold">Innovation</h3>
                </Card>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&h=900&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="text-blue-600" />, name: "Web Development", desc: "React, Next.js, Node.js" },
              { icon: <Phone className="text-purple-600" />, name: "Mobile Development", desc: "React Native, Flutter" },
              { icon: <Laptop className="text-pink-600" />, name: "Desktop Apps", desc: "Electron, Tauri" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-md">
                  <div className="inline-block p-3 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{tech.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Discover our latest work where innovation meets functionality
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <div className="aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-white/20 text-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button variant="secondary" size="sm" className="bg-white/10 text-white hover:bg-white/20">
                          <Github className="w-4 h-4 mr-2" /> View Code
                        </Button>
                        <Button variant="secondary" size="sm" className="bg-white/10 text-white hover:bg-white/20">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How can we help?</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p className="text-muted-foreground mb-4">
              Leave us a message and we'll get back to you shortly.
            </p>
            {/* Chat interface would go here */}
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}