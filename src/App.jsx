import emailjs from "@emailjs/browser";
import malwaretoolkitImg from "./assets/malwaretoolkitImg.png";
import passwordManagerImg from "./assets/passwordManagerImg.webp";
import reactLogo from "./assets/react.png";
import tailwindLogo from "./assets/tailwind.png";
import htmlLogo from "./assets/html.png";
import linuxLogo from "./assets/linux.png";
import githubLogo from "./assets/github.png";
import gitLogo from "./assets/git.png";
import pandasLogo from "./assets/pandas.png";
import pythonLogo from "./assets/python.png";
import cppLogo from "./assets/cpp.png";
import sqlLogo from "./assets/sql.png";
import wiresharkLogo from "./assets/wireshark.png";
import splunkLogo from "./assets/splunk.png";
import React, { useEffect, useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Cpu,
  Zap,
  ShieldCheck,
  Award,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const data = {
  name: "Daniel Lavdari",
  role: "Computer Science student • Software + Cybersecurity",
  tagline:
    "Computer Science student at Hunter College (CUNY). Passionate about AI, Cybersecurity, and Software Development. Exploring data-driven solutions and threat detection.",
  about: [
    "I’m a Computer Science major with a Mathametics minor at Hunter College  focused on AI, cybersecurity, and software development. I like building practical projects and learning by doing.",
    "I’ve worked with Python, C++, SQL, and security tooling like Splunk and Wireshark through projects and labs, and I’m always improving through hands-on work.",
  ],
  location: "New York, NY",
  email: "daniel.lavdari@gmail.com",
  phone: "(646) 299-9118",
  links: [
    { label: "GitHub", href: "https://github.com/daniii0", icon: <Github size={18} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-lavdari-863ab426a/", icon: <Linkedin size={18} /> },
    { label: "Email", href: "mailto:daniel.lavdari@gmail.com", icon: <Mail size={18} /> },
  ],
  skillBars: [
    { label: "Python", value: 80 },
    { label: "C++ OOP", value: 75 },
    { label: "SQL & Database Systems", value: 65 },
    { label: "Data Analysis", value: 70 },
    { label: "Cybersecurity", value: 80 },
  ],
  tools: [
  { name: "React", img: reactLogo },
  { name: "Tailwind", img: tailwindLogo },
  { name: "HTML", img: htmlLogo },
  { name: "Linux", img: linuxLogo },
  { name: "GitHub", img: githubLogo },
  { name: "Git", img: gitLogo },
  { name: "Pandas", img: pandasLogo },
  { name: "Python", img: pythonLogo },
  { name: "C++", img: cppLogo },
  { name: "SQL", img: sqlLogo },
  { name: "Wireshark", img: wiresharkLogo },
  { name: "Splunk", img: splunkLogo },
],
  projects: [
    {
      title: "Password Manager",
      desc: "Designed a secure password manager in Python with encrypted vault storage and threat-aware credential handling.",
      tags: ["Python", "Cryptography", "Authentication"],
      image: passwordManagerImg,
      href: "https://github.com/daniii0/Secure-Password-Manager",
    },
    {
      title: "Malware Analysis Toolkit",
      desc: "Python-based static malware analysis toolkit for hashing, entropy detection, and IOC extraction.",
      tags: ["Python", "File Hashing", "Entropy"],
      image: malwaretoolkitImg,
      href: "https://github.com/daniii0/malware-analysis-toolkit",
    },
  ],
  certs: [
    {
      title: "Intermediate Cybersecurity",
      org: "CodePath",
      status: "Completed",
      date: "August 2025",
      accent: "from-orange-500/20 to-orange-500/5",
      icon: <ShieldCheck className="text-orange-400" size={18} />,
      url: "https://github.com/daniii0/Certifications/blob/main/Intermediate%20Cybersecurity.pdf",
      areas: [
        "Analyzed PCAP and tcpdump files using Wireshark for forensics",
        "Simulated DDoS attacks and mitigation strategies",
        "Built SIEM dashboards using Splunk for threat monitoring",
        "Applied NIST Incident Response Framework",
      ],
    },
    {
      title: "Intro to Cybersecurity",
      org: "CodePath",
      status: "Completed",
      date: "April 2025",
      accent: "from-emerald-500/20 to-emerald-500/5",
      icon: <ShieldCheck className="text-emerald-400" size={18} />,
      url: "https://github.com/daniii0/Certifications/blob/main/Intro%20to%20Cybersecurity.pdf",
      areas: [
        "Linux system administration and security",
        "Network protocol analysis with Wireshark",
        "Malware detection and steganography analysis",
        "Penetration testing with Metasploit",
      ],
    },
  ],
};

// ---------- Small UI helpers ----------
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children, className = "" }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6", className)}>{children}</div>;
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200",
        className
      )}
    >
      {children}
    </span>
  );
}

function ProgressBar({ label, value }) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-slate-200">{label}</span>
        <span className="text-slate-400">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-900 via-blue-450 to-cyan-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ---------- Main ----------
export default function App() {
  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "certifications", label: "Certifications" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [mobileOpen, setMobileOpen] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [status, setStatus] = useState({ type: "", msg: "" });
const [loading, setLoading] = useState(false);

function onChange(e) {
  setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}

async function onSubmit(e) {
  e.preventDefault();
  setStatus({ type: "", msg: "" });

  if (!form.name || !form.email || !form.subject || !form.message) {
    setStatus({ type: "error", msg: "Please fill out all fields." });
    return;
  }

  setLoading(true);
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus({ type: "success", msg: "Message sent! ✅" });
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    setStatus({ type: "error", msg: "Failed to send. Try again later." });
  } finally {
    setLoading(false);
  }
}

  // Optional: close mobile nav when scrolling / clicking a link
  function goTo(id) {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Nice: add smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-100">
      {/* Background (Hostinger-ish) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#070A14]" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-blue-750/20 to-blue-300/10" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute top-[30%] -left-48 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A14]/70 backdrop-blur-xl">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => goTo("home")}
              className="text-left font-semibold tracking-tight"
              aria-label="Go to Home"
            >
              <span className="text-xl text-slate-300">Portfolio</span>
              <div className="text-base sm:text-lg font-bold bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
                
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goTo(s.id)}
                  className="hover:text-white transition-colors"
                >
                  {s.label}
                </button>
              ))}
              <button
                onClick={() => goTo("contact")}
                className="ml-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 border border-white/10"
              >
                Let’s Talk <ArrowRight className="inline ml-1" size={14} />
              </button>
            </nav>

            {/* Mobile button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="mt-4 md:hidden">
              <GlassCard className="p-3">
                <div className="grid gap-1">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => goTo(s.id)}
                      className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5"
                    >
                      {s.label} <ChevronDown size={14} className="-rotate-90 opacity-70" />
                    </button>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}
        </Container>
      </header>

      {/* HERO (full page) */}
      <section id="home" className="min-h-[92vh] flex items-center">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold text-slate-300/90">Hi, I’m</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-blue-900 via-blue-450 to-cyan-500 bg-clip-text text-transparent">
                  {data.name}
                </span>
              </h1>
              <p className="mt-4 text-slate-200/90 font-medium">{data.role}</p>
              <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-slate-300 leading-relaxed">
                {data.tagline}
              </p>

              <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
                <button
                  onClick={() => goTo("projects")}
                  className="rounded-full bg-gradient-to-r from-blue-900 via-blue-450 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 hover:opacity-95"
                >
                  Explore My Work <ArrowRight className="inline ml-1" size={16} />
                </button>
                <button
                  onClick={() => goTo("contact")}
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Contact Me
                </button>
              </div>

              <div className="mt-7 flex justify-center lg:justify-start gap-4 text-slate-300">
                {data.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                    aria-label={link.label}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Hero card */}
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 p-3 border border-white/10">
                  <Code2 size={18} className="text-indigo-200" />
                </div>
                <div>
                  <p className="text-sm font-semibold">What I do</p>
                  <p className="text-xs text-slate-300/80">Building projects + improving every week</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  { title: "Clean Code", desc: "Maintainable structure, readable naming, reusable components.", icon: <Code2 size={16} className="text-indigo-300" /> },
                  { title: "Problem Solving", desc: "Break big tasks into steps. Test, iterate, ship.", icon: <Cpu size={16} className="text-fuchsia-300" /> },
                  { title: "Performance", desc: "Think about efficiency and real-world constraints.", icon: <Zap size={16} className="text-cyan-200" /> },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-white/5 border border-white/10 p-2">{item.icon}</div>
                      <div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="text-xs text-slate-300/80 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill className="text-indigo-200 bg-indigo-500/10 border-indigo-500/20">CS Student</Pill>
                <Pill className="text-emerald-200 bg-emerald-500/10 border-emerald-500/20">Software Dev</Pill>
                <Pill className="text-orange-200 bg-orange-500/10 border-orange-500/20">Cybersecurity</Pill>
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              About <span className="text-indigo-300">Me</span>
            </h2>
            <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
              A quick intro + what I’m focused on right now.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-slate-200 leading-relaxed">{data.about[0]}</p>
              <p className="mt-4 text-slate-300/90 leading-relaxed">{data.about[1]}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>Cybersecurity</Pill>        
                <Pill>Python</Pill>
                <Pill>C++</Pill>
                <Pill>AI</Pill>
                <Pill>React</Pill>
              </div>
            </GlassCard>

            <div className="grid gap-6">
              <GlassCard className="p-6">
                <p className="text-xs uppercase tracking-widest text-slate-400">Snapshot</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {[
                    { label: "Projects", value: "10+" },
                    { label: "Tools", value: "Splunk/Wireshark" },
                    { label: "Focus", value: "Security Analysis" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm font-bold">{s.value}</p>
                      <p className="text-[11px] text-slate-300/80 mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <p className="text-sm font-bold">Open to</p>
                <p className="text-sm text-slate-300/80 mt-2">
                  Internships, IT roles, Cybersecurity Analyst Roles, software engineering projects. Always happy to collaborate and connect with others who are passionate about technology.
                </p>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 border-t border-white/10">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Technical Skills</h2>
            <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
              Tools and technologies I use to build real projects.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-slate-400">Proficiency Level</p>
              <div className="mt-6">
                {data.skillBars.map((skill) => (
                  <ProgressBar key={skill.label} label={skill.label} value={skill.value} />
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
  <p className="text-xs uppercase tracking-widest text-slate-400">
    Technologies & Tools
  </p>

  <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
    {data.tools.map((tool) => (
      <div
        key={tool.name}
        className="flex flex-col items-center justify-center text-center rounded-xl border border-white/10 bg-white/5 p-4 transition-transform hover:-translate-y-1"
      >
        <div className="flex items-center justify-center h-12 w-12 mb-2">
          <img
            src={tool.img}
            alt={tool.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <span className="text-[10px] font-medium uppercase text-slate-500">
          {tool.name}
        </span>
      </div>
    ))}
  </div>
</GlassCard>

          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Featured Projects</h2>
            <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
              A few projects I’m proud of — more on my GitHub.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {data.projects.map((p) => (
              <GlassCard key={p.title} className="overflow-hidden">
                <div className="h-44 sm:h-56 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-48 w-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-bold">{p.title}</p>
                      <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{p.desc}</p>
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                      aria-label="Open project link"
                      title="Open link"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t} className="text-slate-200/90">
                        {t}
                      </Pill>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="py-20 border-t border-white/10">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Certifications</h2>
            <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
              Training and hands-on work that strengthened my security + development skills.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {data.certs.map((cert) => (
              <GlassCard key={cert.title} className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3">
                      <div className={cn("rounded-xl border border-white/10 bg-gradient-to-br p-2", cert.accent)}>
                        {cert.icon}
                      </div>
                      <div>
                        <p className="text-lg font-bold">{cert.title}</p>
                        <p className="text-sm text-slate-300/80">{cert.org}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1">
                        ✅ {cert.status}
                      </span>
                      <span className="text-xs text-slate-300/70">{cert.date}</span>
                    </div>

                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:underline"
>
                      View Certificate <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="md:w-2/3">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400">
                      <Award size={14} /> Key Learning Areas & Projects
                    </div>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {cert.areas.map((a) => (
                        <li key={a} className="text-sm text-slate-200/90 flex gap-2">
                          <span className="text-fuchsia-300">•</span>
                          <span className="text-slate-300/90">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Get In <span className="text-indigo-300">Touch</span>
            </h2>
            <p className="mt-3 text-slate-300/80 max-w-2xl mx-auto">
              Want to collaborate or chat? Send a message.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            <GlassCard className="p-6 sm:p-8">
              <p className="text-lg font-bold">Let’s Talk</p>
              <p className="mt-2 text-sm text-slate-300/80">
                I’m always interested in hearing about new opportunities and projects.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300/70">Email</p>
                    <p className="text-sm">{data.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300/70">Location</p>
                    <p className="text-sm">{data.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300/70">Phone</p>
                    <p className="text-sm">{data.phone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {data.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
  <p className="text-lg font-bold">Message</p>
  <p className="mt-2 text-sm text-slate-300/80">
    Send me a message and I’ll get back to you.
  </p>

  {/* Status message */}
  {status.msg && (
    <div
      className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
        status.type === "success"
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
          : "border-red-400/30 bg-red-400/10 text-red-200"
      }`}
    >
      {status.msg}
    </div>
  )}

  <form onSubmit={onSubmit} className="mt-6 grid gap-4">
    <div className="grid gap-4 sm:grid-cols-2">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Full Name"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-fuchsia-300/50"
      />
      <input
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="Email Address"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-fuchsia-300/50"
      />
    </div>

    <input
      name="subject"
      value={form.subject}
      onChange={onChange}
      placeholder="Subject"
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-fuchsia-300/50"
    />

    <textarea
      name="message"
      value={form.message}
      onChange={onChange}
      placeholder="Message"
      rows={5}
      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-fuchsia-300/50"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-2xl bg-gradient-to-r from-blue-900 via-blue-450 to-cyan-500 py-3 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  </form>
</GlassCard>

          </div>
        </Container>
      </section>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-300/70">
              © {new Date().getFullYear()} {data.name}. Made with ❤️ in NY
            </p>
            <div className="text-xs text-slate-300/60">
              Built with React + Tailwind
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
