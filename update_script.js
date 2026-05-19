const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf-8');

// 1. Add Download button in Hero Section
const heroButtonStr = `            <a
              href="https://github.com/ybgero"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-400/40 hover:bg-white/10"
            >
              Explore GitHub
            </a>`;
const downloadButtonStr = `
            <a
              href="/Resume-YB-APR.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-blue-400/50 bg-blue-900/20 px-7 py-3 text-sm font-semibold text-blue-200 transition hover:border-blue-400 hover:bg-blue-800/30"
            >
              Download Resume (Updated: Apr 2026)
            </a>`;
content = content.replace(heroButtonStr, heroButtonStr + downloadButtonStr);

// 2. Add fileUrl to projects
content = content.replace(
  `link: "https://clean-pro-coral.vercel.app/",\n      featured: true,`,
  `link: "https://clean-pro-coral.vercel.app/",\n      fileUrl: "/project-details/CleanPro-User-Guide.pdf",\n      featured: true,`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/NovaMart",\n      featured: true,`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/NovaMart",\n      fileUrl: "/project-details/NovaMart  Dashboard.pdf",\n      featured: true,`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/Campaign_Analysis",`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/Campaign_Analysis",\n      fileUrl: "/project-details/CampaignPerformance Monitoring.gif",`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/HR",`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/HR",\n      fileUrl: "/project-details/📊 HR Analytics Dashboard.pdf",`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/Revenue_Report",`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/Revenue_Report",\n      fileUrl: "/project-details/Customer Insight Dasboard.docx",`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/Performance%20Report",`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/Performance%20Report",\n      fileUrl: "/project-details/PlantCo. Performance Dashboard.pdf",`
);
content = content.replace(
  `link: "https://github.com/ybgero/Portfolio/tree/main/Python/Correlation(BudgetVsGross)",`,
  `link: "https://github.com/ybgero/Portfolio/tree/main/Python/Correlation(BudgetVsGross)",\n      fileUrl: "/project-details/Correlation(BudgetVsGross).pdf",`
);

// 3. Make Project cards clickable and update buttons
// Featured project:
const featuredProjectOld = `<div 
            className="mb-16 rounded-3xl border border-slate-200/10 bg-white/5 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10"
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
          </div>`;

const featuredProjectNew = `<div 
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
          </div>`;
content = content.replace(featuredProjectOld, featuredProjectNew);

const otherProjectOld = `              <div
                key={index}
                className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 shadow-sm transition hover:shadow-[0_18px_60px_-44px_rgba(59,130,246,0.65)] hover:bg-white/10"
                onMouseEnter={(e) => handleProjectHover(project.title, e)}
                onMouseLeave={handleProjectLeave}
              >
                <h3
              className="text-xl font-semibold mb-3"
              onMouseEnter={(e) => handleProjectHover(project.title, e)}
              onMouseLeave={handleProjectLeave}
            >
              {project.title}
            </h3>
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
              </div>`;

const otherProjectNew = `              <div
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
              </div>`;
content = content.replace(otherProjectOld, otherProjectNew);

// 4. Add Experience and Education sections before Skills
const skillsSectionOld = `      {/* Skills Section */}`;
const expEdSections = `
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

      {/* Skills Section */}`;
content = content.replace(skillsSectionOld, expEdSections);

fs.writeFileSync('src/app/page.tsx', content);
