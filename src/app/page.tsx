'use client';

import Link from "next/link";
import { ExternalLink, Link as LinkIcon, MapPin, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | undefined>();
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHoverTimer = () => {
    if (hoverCloseTimer.current) {
      clearTimeout(hoverCloseTimer.current);
      hoverCloseTimer.current = null;
    }
  };

  const handleProjectHover = (projectTitle: string, event: React.MouseEvent) => {
    clearHoverTimer();
    setHoveredProject(projectTitle);
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setModalPosition({
      x: rect.right + 10,
      y: rect.top,
    });
  };

  const closeHoverModal = () => {
    setHoveredProject(null);
    setModalPosition(undefined);
  };

  const handleProjectLeave = () => {
    hoverCloseTimer.current = setTimeout(closeHoverModal, 120);
  };

  const handleModalEnter = () => {
    clearHoverTimer();
  };

  const handleModalLeave = () => {
    hoverCloseTimer.current = setTimeout(closeHoverModal, 120);
  };
  const projects = [
    {
      title: "NovaMart Dashboard",
      category: "Power BI Project",
      description:
        "Built a centralized Power BI dashboard for a retail client, replacing Excel-based reports. Integrated sales, customer, and order data to track profitability, retention, and forecast vs. budget.",
      link: "https://github.com/ybgero/Portfolio/tree/main/NovaMart",
      featured: true,
    },
    {
      title: "Campaign Performance Monitoring",
      category: "Power BI",
      description:
        "Comprehensive performance tracking system for marketing campaigns. Provides visibility into spend, reach, engagement, and revenue to optimize future campaigns across platforms.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Campaign_Analysis",
    },
    {
      title: "HR Analytics Dashboard",
      category: "Power BI",
      description:
        "Interactive Power BI dashboard with actionable insights into hiring trends, employee performance, turnover, and diversity with dynamic KPIs and trend indicators.",
      link: "https://github.com/ybgero/Portfolio/tree/main/HR",
    },
    {
      title: "Customer Insights Dashboard",
      category: "Power BI",
      description:
        "Tracking 33+ customer metrics from tenure to basket size. Pinpoints where to refine marketing efforts and maximize customer lifetime value.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Revenue_Report",
    },
    {
      title: "PlantCo. Performance Dashboard",
      category: "Power BI",
      description:
        "Business intelligence project focused on tracking gross profit trends across products, geographies, and time periods for a plant-based company.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Performance%20Report",
    },
    {
      title: "Blockbuster Insights",
      category: "Python Data Exploration",
      description:
        "Analyzes the relationship between movie budgets and box office gross earnings using a dataset of 7,668 films (1980–2020).",
      link: "https://github.com/ybgero/Portfolio/tree/main/Python/Correlation(BudgetVsGross)",
    },
  ];

  const skills = [
    "Power BI",
    "Alteryx",
    "SQL",
    "Python",
    "Data Analysis",
    "Business Intelligence",
    "Excel",
    "Data Visualization",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-nav border-b border-slate-200/40 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            YB
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-slate-300">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yog-batra-661798179/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-400/30 hover:text-white"
              >
                <LinkIcon size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/ybgero"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-400/30 hover:text-white"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-pattern max-w-6xl mx-auto px-6 py-24 md:py-32 animate-fade-up">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight hero-gradient">
            Yog Batra
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
            Data Analyst with a computer science foundation, building decision-grade dashboards and analytics systems using Power BI, SQL, Alteryx, and Python.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/yog-batra-661798179/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              View LinkedIn
            </a>
            <a
              href="https://github.com/ybgero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400/40 hover:bg-white/10"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#05080d] py-20 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>

          {/* Featured Project */}
          <div 
            className="mb-16 rounded-3xl border border-slate-200/10 bg-white/5 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10"
            onMouseEnter={(e) => handleProjectHover(projects[0].title, e)}
            onMouseLeave={handleProjectLeave}
          >
            <div className="p-8">
              <h3 className="text-3xl font-semibold mb-3 text-white">{projects[0].title}</h3>
              <span className="inline-flex items-center rounded-full border border-slate-200/20 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                {projects[0].category}
              </span>
              <p className="text-slate-300 mb-6 mt-5 text-lg leading-relaxed">
                {projects[0].description}
              </p>
              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10"
                onMouseEnter={(e) => handleProjectHover(project.title, e)}
                onMouseLeave={handleProjectLeave}
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <span className="inline-flex items-center rounded-full border border-slate-200/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                  {project.category}
                </span>
                <p className="text-slate-300 mb-5 mt-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-200"
                >
                  View Project
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 animate-fade-up">
        <h2 className="text-4xl font-bold mb-8">Skills & Tools</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border border-slate-200/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-20 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-slate-100">Address</h3>
                  <p className="text-slate-400">
                    Selhurst, Croydon<br />
                    London, SE25
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-slate-100">Phone</h3>
                  <a
                    href="tel:+447407077005"
                    className="text-slate-400 hover:text-white transition"
                  >
                    +447407077005
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-slate-100">Email</h3>
                  <a
                    href="mailto:yogbatra71@gmail.com"
                    className="text-slate-400 hover:text-white transition"
                  >
                    yogbatra71@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <a
                  href="https://www.linkedin.com/in/yog-batra-661798179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href="https://github.com/ybgero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
                >
                  <LinkIcon size={18} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-800"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Yog Batra. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {hoveredProject && (
        <ProjectModal
          projectName={hoveredProject}
          description={
            projects.find((p) => p.title === hoveredProject)?.description || ""
          }
          isVisible={!!hoveredProject}
          onClose={() => setHoveredProject(null)}
          onEnter={handleModalEnter}
          onLeave={handleModalLeave}
          position={modalPosition}
        />
      )}
    </div>
  );
}
