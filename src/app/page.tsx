"use client";
import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import ScrollProgress from "@/components/ui/scroll-progress";

const RetroGrid = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div
        className="absolute h-full w-full
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#00C80515,transparent)]" />
      </div>
    </div>
  );
};

const TechStack = () => {
  const [isClient, setIsClient] = useState(false);

  const slugs = [
    "python",
    "javascript",
    "react",
    "nodedotjs",
    "nextdotjs",
    "amazonwebservices",
    "docker",
    "kubernetes",
    "mysql",
    "postgresql",
    "mongodb",
    "jest",
    "selenium",
    "postman",
    "git",
    "jira",
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <div className="text-white/50">Loading technologies...</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
      {slugs.map((slug) => (
        <div
          key={slug}
          className="flex items-center justify-center p-3 md:p-4 bg-[#222222] rounded-lg hover:bg-[#2a2a2a] transition-colors"
        >
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt={slug}
            className="h-6 w-6 md:h-8 md:w-8 opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-white overflow-x-hidden">
      {/* Background wrapper */}
      <div className="fixed inset-0 bg-[#111111] -z-10" />

      <nav className="fixed w-full z-50 bg-[#111111] border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-[#00C805]">RR</span>
            <div className="flex items-center gap-4 sm:gap-8">
              <button
                onClick={() => scrollToSection("experience")}
                className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white/70 hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#00C805] text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:opacity-90 text-sm sm:text-base"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <ScrollProgress
          className="h-[2px]"
          color="#00C805"
          backgroundColor="rgba(255, 255, 255, 0.05)"
        />
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <RetroGrid />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="text-[#00C805] text-sm mb-6">
              FULL STACK DEVELOPER
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm Ruchitha. I specialize in creating robust full-stack
              applications that solve real-world problems.
            </h1>
            <div className="text-white/70 text-lg sm:text-xl mb-12">
              Over 2 years of experience in full-stack development, system
              optimization, and scalable application design.
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-[#00C805] text-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:opacity-90 text-sm sm:text-base"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#00C805] text-sm mb-12 sm:mb-16">
              TECHNOLOGIES
            </div>
            <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-[#1A1A1A] px-4 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20 pt-8">
              {isClient && <TechStack />}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 sm:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#00C805] text-sm mb-12 sm:mb-16">
              EXPERIENCE
            </div>
            <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Software Developer
                  </h3>
                  <p className="text-white/70">DXC Technology</p>
                </div>
                <span className="text-white/50">2021 - 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#00C805] text-sm mb-12 sm:mb-16">
              PROJECTS
            </div>
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold">
                  AI News App
                </h3>
                <ExternalLink className="h-5 w-5 text-white/50" />
              </div>
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Recipe AI App
                </h3>
                <ExternalLink className="h-5 w-5 text-white/50" />
              </div>
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold">
                  Social Media App
                </h3>
                <ExternalLink className="h-5 w-5 text-white/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#00C805] text-sm mb-12 sm:mb-16">
              EDUCATION
            </div>
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Master of Science, Computer Science
                    </h3>
                    <p className="text-white/70">Pace University</p>
                  </div>
                  <span className="text-white/50 whitespace-nowrap">
                    Expected May 2025
                  </span>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      Bachelor of Technology, ECE
                    </h3>
                    <p className="text-white/70">
                      Sridevi Women's Engineering College
                    </p>
                  </div>
                  <span className="text-white/50">2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer
        id="contact"
        className="py-6 sm:py-8 border-t border-white/5 scroll-mt-20"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <span className="text-white/50 text-sm sm:text-base">
              © 2025 Ruchitha Reddy Kuthuru
            </span>
            <div className="flex items-center gap-6">
              <a
                href="mailto:ruchithareddyk2@gmail.com"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/ruchitha-reddy-k-b192b31a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/ruchitha0512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
