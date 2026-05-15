import Link from "next/link";

export default function Home() {
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
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl">
            YB
          </Link>
          <div className="flex gap-6 items-center">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </a>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/yog-batra-661798179/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ybgero"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Yog Batra</h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Data Analyst with a background in computer science. I use tools like Alteryx, SQL, and Power BI to solve real business problems.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/yog-batra-661798179/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ybgero"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          {/* Featured Project */}
          <div className="mb-16 bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-3">{projects[0].title}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                {projects[0].category}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {projects[0].description}
              </p>
              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition p-6"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
                  {project.category}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-lg text-center font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">📍</span>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Selhurst, Croydon<br />
                    London, SE25
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">📞</span>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+447407077005"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  >
                    +447407077005
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">✉️</span>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:yogbatra71@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600"
                  >
                    yogbatra71@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4 pt-4 text-2xl">
                <a
                  href="https://www.linkedin.com/in/yog-batra-661798179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  🔗
                </a>
                <a
                  href="https://github.com/ybgero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  🐙
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
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Yog Batra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
