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
    const spacing = 10;
    const modalWidth = 360; // matches ProjectModal maxWidth
    const modalHeight = 380; // matches ProjectModal max-height

    // Prefer to the right of the element, but if it would overflow, place to the left
    let x = rect.right + spacing;
    if (x + modalWidth > window.innerWidth - spacing) {
      x = rect.left - spacing - modalWidth;
      if (x < spacing) x = spacing;
    }

    // Keep modal vertically in viewport
    let y = rect.top;
    if (y + modalHeight > window.innerHeight - spacing) {
      y = Math.max(spacing, window.innerHeight - modalHeight - spacing);
    }

    setModalPosition({ x, y });
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
      title: "CleanPro",
      category: "Design / Product",
      description: "CleanPro guides users through a simple data preparation workflow",
      link: "https://clean-pro-coral.vercel.app/",
      fileUrl: "/project-details/CleanPro-User-Guide.pdf",
      featured: true,
    },
    {
      title: "NovaMart Dashboard",
      category: "Power BI Project",
      description:
        "Built a centralized Power BI dashboard for a retail client, replacing Excel-based reports. Integrated sales, customer, and order data to track profitability, retention, and forecast vs. budget.",
      link: "https://github.com/ybgero/Portfolio/tree/main/NovaMart",
      fileUrl: "/project-details/NovaMart  Dashboard.pdf",
      featured: true,
    },
    {
      title: "Campaign Performance Monitoring",
      category: "Power BI",
      description:
        "Comprehensive performance tracking system for marketing campaigns. Provides visibility into spend, reach, engagement, and revenue to optimize future campaigns across platforms.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Campaign_Analysis",
      fileUrl: "/project-details/CampaignPerformance Monitoring.gif",
    },
    {
      title: "HR Analytics Dashboard",
      category: "Power BI",
      description:
        "Interactive Power BI dashboard with actionable insights into hiring trends, employee performance, turnover, and diversity with dynamic KPIs and trend indicators.",
      link: "https://github.com/ybgero/Portfolio/tree/main/HR",
      fileUrl: "/project-details/📊 HR Analytics Dashboard.pdf",
    },
    {
      title: "Customer Insights Dashboard",
      category: "Power BI",
      description:
        "Tracking 33+ customer metrics from tenure to basket size. Pinpoints where to refine marketing efforts and maximize customer lifetime value.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Revenue_Report",
      fileUrl: "/project-details/Customer Insight Dasboard.docx",
    },
    {
      title: "PlantCo. Performance Dashboard",
      category: "Power BI",
      description:
        "Business intelligence project focused on tracking gross profit trends across products, geographies, and time periods for a plant-based company.",
      link: "https://github.com/ybgero/Portfolio/tree/main/Performance%20Report",
      fileUrl: "/project-details/PlantCo. Performance Dashboard.pdf",
    },
    {
      title: "Blockbuster Insights",
      category: "Python Data Exploration",
      description:
        "Analyzes the relationship between movie budgets and box office gross earnings using a dataset of 7,668 films (1980–2020).",
      link: "https://github.com/ybgero/Portfolio/tree/main/Python/Correlation(BudgetVsGross)",
      fileUrl: "/project-details/Correlation(BudgetVsGross).pdf",
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
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#education" className="transition hover:text-white">
              Education
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
            <a
              href="/Resume-YB-APR.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-blue-400/50 bg-blue-900/20 px-7 py-3 text-sm font-semibold text-blue-200 transition hover:border-blue-400 hover:bg-blue-800/30"
            >
              Download Resume (Updated: Apr 2026)
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
            className="mb-16 rounded-3xl border border-slate-200/10 bg-white/5 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10 cursor-pointer"
            onClick={() => window.open(projects[0].fileUrl, '_blank')}
          >
            <div className="p-8">
              <h3
                className="text-3xl font-semibold mb-3 text-white"
                onMouseEnter={(e) => handleProjectHover(projects[0].title, e)}
                onMouseLeave={handleProjectLeave}
              >
                {projects[0].title}
              </h3>
              <span className="inline-flex items-center rounded-full border border-slate-200/20 bg-slate-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                {projects[0].category}
              </span>
              <p className="text-slate-300 mb-6 mt-5 text-lg leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex gap-4">
                <a
                  href={projects[0].fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Related Files
                  <ExternalLink size={16} />
                </a>
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/20 bg-transparent px-6 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Git Library
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10 cursor-pointer flex flex-col"
                onMouseEnter={(e) => handleProjectHover(project.title, e)}
                onMouseLeave={handleProjectLeave}
                onClick={() => window.open(project.fileUrl, '_blank')}
              >
                <h3
              className="text-xl font-semibold mb-3"
              onMouseEnter={(e) => handleProjectHover(project.title, e)}
              onMouseLeave={handleProjectLeave}
            >
              {project.title}
            </h3>
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full border border-slate-200/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-300 mb-5 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={project.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Related Files
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Git
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="bg-[#05080d] py-20 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white">Experience</h2>
          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10">
              <h3 className="text-2xl font-semibold text-white">Power BI Consultant</h3>
              <p className="text-blue-400 mb-4">Graeme Hills Consultancy | United Kingdom | Aug–Nov 2024</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base">
                <li>Reduced client reporting turnaround time by 60% by optimising Power BI data models and automating reporting workflows.</li>
                <li>Delivered Power BI dashboards for law firm clients, enabling insights into billing, WIP, and matter profitability.</li>
                <li>Built a Power BI P&L and legal reporting suite with automated pipelines.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10">
              <h3 className="text-2xl font-semibold text-white">Senior Associate</h3>
              <p className="text-blue-400 mb-4">Annalect | India | 2019–2023</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base">
                <li>Reduced manual reporting time by 70% by developing Power BI dashboards and automated ETL pipelines using Alteryx and Python.</li>
                <li>Improved APAC campaign ROI by 22% through meta-analysis of 14M+ campaign records.</li>
                <li>Increased data accuracy by 40% and reduced QA time by 60% by designing automated URL taxonomy auditing workflows in Alteryx.</li>
                <li>Supported 50+ stakeholders by delivering 15+ Power BI dashboards enabling campaign performance monitoring.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10">
              <h3 className="text-2xl font-semibold text-white">Web Infrastructure Intern</h3>
              <p className="text-blue-400 mb-4">Media Is You | India | 2019</p>
              <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm md:text-base">
                <li>Standardised datasets and implemented validation rules to improve reporting accuracy, supporting A/B testing and optimising web content performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-20 animate-fade-up">
        <h2 className="text-4xl font-bold mb-12 text-white">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10">
            <h3 className="text-xl font-semibold text-white">MSc in Management (Sustainability Focus)</h3>
            <p className="text-blue-400 mb-2">University of York | UK | 2023–2025</p>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              <span className="font-semibold text-slate-200">Dissertation:</span> Leadership as a Tool for Innovation in the Technology Industry. Analysed how leadership styles influence innovation performance in technology firms.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10">
            <h3 className="text-xl font-semibold text-white">B.Tech in Computer Science</h3>
            <p className="text-blue-400 mb-2">MRIIS | India | 2015–2019</p>
            <p className="text-slate-300 text-sm leading-relaxed mt-4">
              Cloud Computing Specialisation.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-8 shadow-sm transition hover:bg-white/10 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Alteryx Core Certification (2024)</li>
              <li>Dbt (Data Build Tool) Badged</li>
            </ul>
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
