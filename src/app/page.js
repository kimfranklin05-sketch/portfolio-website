"use client";

import { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  EnvelopeSimple, 
  LinkedinLogo, 
  ArrowDown, 
  Briefcase, 
  GraduationCap, 
  Certificate, 
  ChartLine, 
  Database, 
  Users,
  CaretRight
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  // Theme state
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    const initialTheme = savedTheme || (systemPrefersLight ? "light" : "dark");
    setTheme(initialTheme);
    
    if (initialTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  // Handle theme toggling
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  // Prevent hydration flash
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 font-sans">
      
      {/* 1. Header & Navigation */}
      <header className="sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-md border-b border-border-custom transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-heading text-xl font-bold tracking-tight bg-gradient-to-r from-text-primary via-accent to-accent bg-clip-text text-transparent active:scale-95 transition-transform duration-200">
            Kim Franklin
          </a>
          
          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
              <li>
                <a href="#about" className="hover:text-accent transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors duration-200">Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors duration-200">Skills</a>
              </li>
              <li>
                <a href="#featured-work" className="hover:text-accent transition-colors duration-200">Featured Work</a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent transition-colors duration-200">Education</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors duration-200">Contact</a>
              </li>
            </ul>

            {/* Dark/Light mode toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-border-custom hover:border-accent/40 bg-bg-secondary/40 text-text-secondary hover:text-accent active:scale-95 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center pt-16 md:pt-20 pb-16 overflow-hidden bg-[radial-gradient(circle_at_80%_20%,var(--accent-light),transparent_40%)]">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 flex flex-col items-start text-left">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-wider text-accent mb-4"
            >
              Healthcare Data Analyst
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-text-primary mb-6"
            >
              Turning complex data <br />
              into actionable insights.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-[60ch] mb-8"
            >
              I specialize in SAS, SQL, and Power BI to optimize provider networks and improve healthcare operations.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#experience" 
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-accent/20 active:scale-[0.98] transition-all duration-200"
              >
                View Experience
                <ArrowDown size={16} weight="bold" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 border border-border-custom hover:border-accent hover:bg-accent-light text-text-primary font-medium px-6 py-3 rounded-lg active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section id="about" className="py-24 border-t border-border-custom">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary relative inline-block">
              About Me
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-6 text-text-secondary text-base leading-relaxed">
            <p>
              I'm a Senior Healthcare Analyst with over a decade of experience turning complex data into clear, actionable insights that drive smarter decisions in healthcare operations, network optimization, and population health.
            </p>
            <p>
              Throughout my career, I've helped large healthcare organizations and federal programs (like TRICARE) improve provider network efficiency, track utilization trends, and reduce reporting bottlenecks through automation and scalable analytics solutions.
            </p>
            <p>
              I specialize in translating messy datasets into meaningful stories, leading high-impact analytics projects that influence strategic planning, and supporting cross-functional teams with data-informed recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Experience Section */}
      <section id="experience" className="py-24 bg-bg-secondary/40 border-t border-b border-border-custom transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary relative inline-block">
              Work Experience
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>

          <div className="relative border-l border-timeline-line ml-4 md:ml-6 space-y-12">
            
            {/* Experience Item 1 */}
            <div className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-accent bg-timeline-dot-bg transition-colors duration-300"></span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Sept 2014 – Jan 2025</span>
                <h3 className="font-heading text-xl font-bold text-text-primary">Senior Healthcare Analyst</h3>
                <span className="text-sm font-semibold text-text-secondary">Health Net Federal Services (10 yrs 5 mos)</span>
                <ul className="mt-4 space-y-3 text-text-secondary text-sm leading-relaxed max-w-[75ch]">
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Developed and delivered ad hoc reports for both internal and external clients, meeting tight deadlines with high accuracy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Utilized SAS, SQL, Business Objects, and other data tools to analyze large datasets, identify trends, and provide data-driven solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Led intricate research projects on the Autism Care Demonstration program, enabling evidence-based strategies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Built and maintained forecasting models to support network sizing and optimization of the TRICARE West Region provider network.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-accent/40 bg-timeline-dot-bg transition-colors duration-300"></span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent/70 uppercase tracking-wider">Aug 2010 – Sept 2014</span>
                <h3 className="font-heading text-xl font-bold text-text-primary">Healthcare Analyst</h3>
                <span className="text-sm font-semibold text-text-secondary">Health Net Federal Services (4 yrs 2 mos)</span>
                <ul className="mt-4 space-y-3 text-text-secondary text-sm leading-relaxed max-w-[75ch]">
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Developed dynamic data visualizations to deliver actionable insights to clients and leadership.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Developed and maintained models, HEDIS reports, and ad hoc reports to track utilization metrics across claims, referrals, and enrollment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Managed TRICARE National Capital Market as the primary point contact for tailored data solutions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-accent/40 bg-timeline-dot-bg transition-colors duration-300"></span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent/70 uppercase tracking-wider">Oct 2005 – Aug 2010</span>
                <h3 className="font-heading text-xl font-bold text-text-primary">Administrative Assistant III</h3>
                <span className="text-sm font-semibold text-text-secondary">Health Net Federal Services (4 yrs 11 mos)</span>
                <ul className="mt-4 space-y-3 text-text-secondary text-sm leading-relaxed max-w-[75ch]">
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Delivered confidential administrative management for multi-range behavioral health (non-clinical) services offered to military members and their families.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience Item 4 */}
            <div className="relative pl-8 md:pl-10">
              <span className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-accent/40 bg-timeline-dot-bg transition-colors duration-300"></span>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent/70 uppercase tracking-wider">Apr 2000 – May 2005</span>
                <h3 className="font-heading text-xl font-bold text-text-primary">Marketing Account Specialist</h3>
                <span className="text-sm font-semibold text-text-secondary">18th Services Marketing, Kadena Air Force Base (5 yrs 2 mos) | Okinawa, Japan</span>
                <ul className="mt-4 space-y-3 text-text-secondary text-sm leading-relaxed max-w-[75ch]">
                  <li className="flex items-start gap-2">
                    <CaretRight size={14} className="text-accent mt-1 shrink-0" />
                    <span>Managed marketing account tasks serving the base community.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section id="skills" className="py-24 border-b border-border-custom">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary relative inline-block">
              Skills & Expertise
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm hover:border-accent hover:shadow-lg hover:shadow-accent-light/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Database size={24} className="text-accent" />
                <h3 className="font-heading text-lg font-bold text-text-primary">Tools & Software</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["SAS (Software)", "SQL", "Python", "Power BI", "Business Objects"].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 text-sm font-medium rounded-lg border border-border-custom bg-bg-secondary/30 text-text-primary hover:border-accent hover:text-accent transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm hover:border-accent hover:shadow-lg hover:shadow-accent-light/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <ChartLine size={24} className="text-accent" />
                <h3 className="font-heading text-lg font-bold text-text-primary">Core Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Healthcare Analytics", "Claims & Utilization Reporting", "Data Governance", "Forecasting Models", "Network Optimization", "TRICARE Programs"].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 text-sm font-medium rounded-lg border border-border-custom bg-bg-secondary/30 text-text-primary hover:border-accent hover:text-accent transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Work Section */}
      <section id="featured-work" className="py-24 bg-bg-secondary/20 border-b border-border-custom transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary relative inline-block">
              Featured Work
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/50 flex flex-col justify-between shadow-sm hover:border-accent hover:shadow-lg hover:shadow-accent-light/5 transition-all duration-300">
              <div>
                <ChartLine size={32} className="text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">Autism Care Demonstration Analysis</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Led complex research projects on the Autism Care Demonstration program and claims data, mapping core trends to enable evidence-based healthcare strategies.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">Research</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">SAS & SQL</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/50 flex flex-col justify-between shadow-sm hover:border-accent hover:shadow-lg hover:shadow-accent-light/5 transition-all duration-300">
              <div>
                <Database size={32} className="text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">TRICARE West Network Forecasting</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Designed and maintained forecasting models to support network sizing and optimization of the TRICARE West Region provider network, ensuring consistent access to care.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">Modeling</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">Forecasting</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/50 flex flex-col justify-between shadow-sm hover:border-accent hover:shadow-lg hover:shadow-accent-light/5 transition-all duration-300">
              <div>
                <Users size={32} className="text-accent mb-4" />
                <h3 className="font-heading text-lg font-bold text-text-primary mb-2">TRICARE National Capital Market Solutions</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Served as primary contact for the National Capital Market, delivering high-end technical support and tailored data visualizations to support military clients.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">Client Support</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-border-custom text-text-secondary">Power BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Education & Certifications Section */}
      <section id="education" className="py-24 border-b border-border-custom">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap size={28} className="text-accent" />
                <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary">Education</h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-text-primary">Bachelor of Science in Business Administration</h3>
                  <p className="text-sm text-accent font-semibold mt-1">University of Maryland Global Campus</p>
                </div>
                <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-text-primary">Diploma of Education, Computer Information Systems</h3>
                  <p className="text-sm text-accent font-semibold mt-1">Strayer University</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Certificate size={28} className="text-accent" />
                <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary">Certifications</h2>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-text-primary">Python Data Structures</h3>
                  <p className="text-sm text-accent font-semibold mt-1">University of Michigan (Coursera)</p>
                </div>
                <div className="p-6 rounded-2xl border border-border-custom bg-bg-card/45 shadow-sm">
                  <h3 className="font-heading text-base font-bold text-text-primary">Programming for Everybody (Getting Started with Python)</h3>
                  <p className="text-sm text-accent font-semibold mt-1">University of Michigan (Coursera)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Contact Section */}
      <section id="contact" className="py-24 bg-bg-secondary/40 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary relative inline-block mb-6">
            Let's Connect
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full"></span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed max-w-[55ch] mx-auto mb-10">
            If you are working on solving healthcare challenges with data, or looking for someone who can bridge the gap between technical analysis and business strategy, I'd love to connect.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="mailto:kimfranklin05@gmail.com" 
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-accent/20 active:scale-[0.98] transition-all duration-200"
            >
              <EnvelopeSimple size={18} weight="bold" />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/kim-l-franklin/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 border border-border-custom hover:border-accent hover:bg-accent-light text-text-primary font-medium px-6 py-3 rounded-lg active:scale-[0.98] transition-all duration-200"
            >
              <LinkedinLogo size={18} weight="bold" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="py-8 border-t border-border-custom bg-bg-primary text-center transition-colors duration-300">
        <p className="text-xs text-text-secondary">
          &copy; 2026 Kim Franklin. Built with care using Next.js & Tailwind CSS.
        </p>
      </footer>

    </div>
  );
}
