import emailjs from "@emailjs/browser";
import { useMemo, useState } from "react";
import { ArrowRight, Award, BarChart3, ChevronDown, Code2, Database, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, ShieldCheck, X } from "lucide-react";
import stemkasaImg from "./assets/stemkasaImg.png";
import malwaretoolkitImg from "./assets/malwaretoolkitImg.png";
import passwordManagerImg from "./assets/passwordManagerImg.webp";
import cyberRiskImg from "./assets/blog-nist-updates-hero.png";
import crowdStrikeCertificate from "./assets/crowdstrike-agentic-soc-certificate.jpg";
import antisyphonCertificate from "./assets/antisyphon-infosec-age-of-ai-certificate.pdf";

const data = {
  name: "Daniel Lavdari",
  role: "Computer Science Student · Cybersecurity & Technology Risk",
  tagline: "Computer Science student at Hunter College combining software engineering experience with hands-on cybersecurity, technology-risk, and data-analysis work.",
  about: [
    "I'm a Computer Science student at Hunter College building experience across cybersecurity, technology risk, backend development, and data analysis. My software engineering internship gave me hands-on experience with Python, REST APIs, SQL databases, testing, and debugging, while my cybersecurity coursework and labs expanded my experience with threat intelligence, incident response, network analysis, and system hardening.",
    "I'm especially interested in how technical systems, security threats, and business risk intersect. Through quantitative coursework and AI-system evaluation, I've also developed experience interpreting data, identifying failure modes, and communicating technical findings to technical and non-technical audiences.",
  ],
  email: "daniel.lavdari@gmail.com", location: "New York, NY",
  links: [
    { label: "GitHub", href: "https://github.com/daniii0", icon: <Github size={18} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/daniel-lavdari-863ab426a/", icon: <Linkedin size={18} /> },
    { label: "Email", href: "mailto:daniel.lavdari@gmail.com", icon: <Mail size={18} /> },
  ],
  capabilities: [
    ["Cyber Risk Analysis", "Threat analysis, incident response, and technology-risk thinking.", <ShieldCheck key="risk" size={16} />],
    ["Backend Engineering", "Python, REST APIs, SQL, testing, and debugging.", <Database key="backend" size={16} />],
    ["Security Analysis", "Network traffic analysis, system hardening, and security labs.", <Code2 key="security" size={16} />],
    ["Data Interpretation", "Quantitative analysis and clear communication of findings.", <BarChart3 key="data" size={16} />],
  ],
  experience: [
    { title: "Web Development Engineer Intern", company: "IT Services LLC / STEM Kasa", period: "March – May 2026", type: "Remote · Internship", bullets: ["Built Python backend services for an AI-powered Zoom meeting assistant, improving lesson-workflow automation by 40%.", "Developed REST APIs using Zoom APIs for meeting creation, enrollment, and attendance tracking, with MySQL and PostgreSQL for session data.", "Tested, debugged, and validated workflows with real meeting recordings to improve reliability.", "Used Git and Agile practices while collaborating in a two-person team."], tags: ["Python", "REST APIs", "Flask", "MySQL", "PostgreSQL", "Testing", "Git"] },
    { title: "GenAI Externship Participant", company: "NYC Jobs Council", period: "January 2026", type: "On-site · Externship", bullets: ["Evaluated AI chatbot performance across resume and interview workflows for accuracy, clarity, and consistency.", "Designed QA test cases and identified edge cases and failure modes in AI-generated output.", "Communicated data-driven findings and usability feedback to stakeholders."], tags: ["AI-System Evaluation", "QA Testing", "Failure-Mode Analysis", "Communication"] },
    { title: "IT Office Volunteer", company: "European University of Tirana", period: "June – August 2023", type: "On-site · Volunteer", bullets: ["Provided technical support for 10+ classrooms, troubleshooting hardware, software, and networking issues.", "Configured computer systems and networking equipment and maintained IT inventory records."], tags: ["IT Support", "Networking", "Troubleshooting"] },
  ],
  skills: [
    ["Risk & Cybersecurity", ["NIST Incident Response", "Threat Intelligence", "Cyber-Attack Chain Analysis", "Network Traffic Analysis", "System Hardening"]],
    ["Data & Analytics", ["Microsoft Excel", "SQL", "MySQL", "PostgreSQL", "Quantitative Analysis", "Trend Identification", "Data Interpretation"]],
    ["Security & Development Tools", ["Splunk", "Wireshark", "Git", "Flask", "Ngrok", "VS Code"]],
    ["Programming & Systems", ["Python", "JavaScript", "C++", "REST APIs", "Backend Development", "Testing", "Debugging", "Agile Development"]],
  ],
  projects: [
    { title: "STEMKasaCoPilot", context: "Software Engineering Internship", desc: "Python backend services for an AI-powered Zoom meeting assistant, with REST APIs for meeting creation, enrollment, attendance tracking, and SQL-backed session data.", tags: ["Python", "Flask", "Zoom APIs", "REST APIs", "MySQL", "PostgreSQL"], image: stemkasaImg, href: "https://github.com/daniii0/daniel-portfolio" },
    { title: "Cyber Risk Analysis", context: "Intro to Cyber Risk · Hunter College · Summer 2026", desc: "Analyzed cyber-attack chains and threat-intelligence scenarios involving critical infrastructure and organizational risk. Developed a NIST-aligned incident-response playbook, participated in a tabletop exercise, and researched AI use cases in cybersecurity.", tags: ["NIST", "Threat Intelligence", "Incident Response", "Cyber Risk", "AI Security"], image: cyberRiskImg },
    { title: "Password Manager", desc: "Designed a password manager in Python with encrypted vault storage and credential-handling safeguards.", tags: ["Python", "Cryptography", "Authentication"], image: passwordManagerImg, href: "https://github.com/daniii0/Secure-Password-Manager" },
    { title: "Malware Analysis Toolkit", desc: "Python-based static malware analysis toolkit for hashing, entropy detection, and indicator extraction.", tags: ["Python", "File Hashing", "Entropy"], image: malwaretoolkitImg, href: "https://github.com/daniii0/malware-analysis-toolkit" },
    { title: "Quantitative Data Analysis", context: "Population Geography (GEOG 241) · Hunter College · Spring 2026", desc: "Used Microsoft Excel to compare and interpret demographic and geographic datasets, identify trends, organize structured analyses, and translate quantitative results into clear written findings.", tags: ["Excel", "Quantitative Analysis", "Data Interpretation"], compact: true },
  ],
  training: [
    { title: "Intermediate Cybersecurity", org: "CodePath", status: "Completed", date: "August 2025", icon: <ShieldCheck key="i" size={18} />, url: "https://github.com/daniii0/Certifications/blob/main/Intermediate%20Cybersecurity.pdf", areas: ["Wireshark network traffic analysis", "Splunk security analysis", "Simulated incident-response work", "NIST incident-response practices"] },
    { title: "Intro to Cybersecurity", org: "CodePath", status: "Completed", date: "April 2025", icon: <ShieldCheck key="b" size={18} />, url: "https://github.com/daniii0/Certifications/blob/main/Intro%20to%20Cybersecurity.pdf", areas: ["Linux system hardening", "Network protocol analysis with Wireshark", "Malware-detection exercises", "Security lab practice"] },
    { title: "Detect, Triage, and Respond Faster with Agentic Security Operations", org: "CrowdStrike", status: "Hands-on Workshop · 1 CPE", date: "2026", icon: <ShieldCheck key="c" size={18} />, url: crowdStrikeCertificate, linkedInUrl: "https://www.linkedin.com/posts/daniel-lavdari-863ab426a_cybersecurity-threathunting-soc-activity-7491565402469146624-NYLx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIDsssBb53yd4EMRUB-vwpLdsbXQ43m734", certificateLabel: "View CrowdStrike workshop certificate", linkedInLabel: "View CrowdStrike workshop LinkedIn post", areas: ["Falcon Onum", "Next-Gen SIEM", "Charlotte AI", "Detection & Response"] },
    { title: "Infosec Age of AI Summit", org: "Antisyphon Training", status: "Certificate of Completion · 6 Hours", date: "Aug 2026", icon: <Award key="a" size={18} />, url: antisyphonCertificate, linkedInUrl: "https://www.linkedin.com/posts/daniel-lavdari-863ab426a_cybersecurity-cyberrisk-technologyrisk-activity-7495250386493022208-JOGb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEIDsssBb53yd4EMRUB-vwpLdsbXQ43m734", certificateLabel: "View Antisyphon summit certificate", linkedInLabel: "View Antisyphon summit LinkedIn post", areas: ["AI Security", "Threat Hunting", "SOC Operations", "Technology Risk"] },
  ],
};

const cn = (...classes) => classes.filter(Boolean).join(" ");
const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const isContactFormConfigured = Object.values(emailJsConfig).every(Boolean);
function Container({ children, className = "" }) { return <div className={cn("mx-auto min-w-0 w-full max-w-6xl px-5 sm:px-6", className)}>{children}</div>; }
function Card({ children, className = "" }) { return <div className={cn("min-w-0 max-w-full rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,.25)] backdrop-blur-xl", className)}>{children}</div>; }
function Pill({ children }) { return <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200">{children}</span>; }
function Heading({ title, children }) { return <div className="text-center"><h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2><p className="mx-auto mt-3 max-w-2xl text-slate-300/80">{children}</p></div>; }
function CredentialActions({ item }) {
  const actionClass = "inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-xs font-bold text-cyan-300 hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";
  return <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
    {item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label={item.certificateLabel ?? `View ${item.title} certificate`}>View Certificate <ExternalLink size={14} aria-hidden="true" /></a>}
    {item.linkedInUrl && <a href={item.linkedInUrl} target="_blank" rel="noopener noreferrer" className={actionClass} aria-label={item.linkedInLabel ?? `View ${item.title} LinkedIn post`}>LinkedIn Post <Linkedin size={14} aria-hidden="true" /></a>}
  </div>;
}
function ContactStatus({ status }) {
  if (!status.type) return null;
  const isSuccess = status.type === "success";
  return <div role="status" aria-live="polite" className={cn("mt-4 rounded-xl border px-4 py-3 text-sm", isSuccess ? "border-emerald-400/30 text-emerald-200" : "border-red-400/30 text-red-200")}>
    {status.type === "unavailable" && <>The form is unavailable. Please email <a href={`mailto:${data.email}`} className="break-all underline decoration-current/60 underline-offset-2 hover:decoration-current focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">{data.email}</a></>}
    {status.type === "error" && <>Your message couldn&apos;t be sent. Please try again or email <a href={`mailto:${data.email}`} className="break-all underline decoration-current/60 underline-offset-2 hover:decoration-current focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">{data.email}</a></>}
    {status.type === "validation" && status.msg}
    {isSuccess && status.msg}
  </div>;
}

export default function App() {
  const sections = useMemo(() => [["home", "Home"], ["about", "About"], ["experience", "Experience"], ["skills", "Skills"], ["projects", "Projects"], ["certifications", "Training"], ["contact", "Contact"]], []);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [status, setStatus] = useState(isContactFormConfigured ? { type: "", msg: "" } : { type: "unavailable", msg: "" });
  const [loading, setLoading] = useState(false);
  const goTo = (id) => {
    setMobileOpen(false);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };
  const onChange = ({ target }) => setForm((current) => ({ ...current, [target.name]: target.value }));
  async function onSubmit(event) {
    event.preventDefault(); setStatus({ type: "", msg: "" });
    const clean = Object.fromEntries(Object.entries(form).map(([key, value]) => [key, value.trim()]));
    if (clean.website) return;
    if (!clean.name || !clean.email || !clean.subject || !clean.message) return setStatus({ type: "validation", msg: "Please complete every field." });
    if (clean.name.length > 100 || clean.email.length > 254 || clean.subject.length > 150 || clean.message.length > 3000) return setStatus({ type: "validation", msg: "Please shorten your message and try again." });
    if (!isContactFormConfigured) return setStatus({ type: "unavailable", msg: "" });
    setLoading(true);
    try {
      await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, { from_name: clean.name, from_email: clean.email, subject: clean.subject, message: clean.message }, emailJsConfig.publicKey);
      setStatus({ type: "success", msg: "Message sent successfully." }); setForm({ name: "", email: "", subject: "", message: "", website: "" });
    } catch { setStatus({ type: "error", msg: "" }); }
    finally { setLoading(false); }
  }

  return <div className="min-h-screen overflow-x-clip text-slate-100">
    <a href="#main-content" className="sr-only z-[60] rounded bg-white px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
    <div className="fixed inset-0 -z-10" aria-hidden="true"><div className="absolute inset-0 bg-[#070A14]" /><div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-blue-300/10" /><div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" /><div className="absolute inset-0 opacity-[.08] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" /></div>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A14]/90 backdrop-blur-xl"><Container className="py-4"><div className="flex items-center justify-between"><button onClick={() => goTo("home")} className="rounded text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Portfolio</button><nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm text-slate-300 md:flex">{sections.map(([id, label]) => <button key={id} onClick={() => goTo(id)} className="rounded hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">{label}</button>)}<button onClick={() => goTo("contact")} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 font-semibold text-white">Let's Talk <ArrowRight className="ml-1 inline" size={14} /></button></nav><button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X /> : <Menu />}</button></div>{mobileOpen && <nav id="mobile-nav" aria-label="Mobile navigation" className="mt-4 grid gap-1 rounded-2xl border border-white/10 bg-slate-950 p-3 md:hidden">{sections.map(([id, label]) => <button key={id} onClick={() => goTo(id)} className="flex min-h-11 items-center justify-between rounded-xl px-3 text-left text-sm hover:bg-white/5">{label}<ChevronDown size={14} className="-rotate-90" /></button>)}</nav>}</Container></header>
    <main id="main-content">
      <section id="home" className="flex min-h-[88vh] scroll-mt-24 items-center py-16"><Container><div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div className="text-center lg:text-left"><p className="text-sm font-semibold text-slate-300">Hi, I'm</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"><span className="bg-gradient-to-r from-[#2F6FCC] via-[#087EB5] to-[#08BED0] bg-clip-text text-transparent">{data.name}</span></h1><p className="mt-4 font-medium">{data.role}</p><p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-300 lg:mx-0">{data.tagline}</p><p className="mt-3 text-sm text-slate-400">Interested in Technical Risk Management, GRC, security engineering, and cybersecurity internships.</p><div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start"><button onClick={() => goTo("projects")} className="rounded-full bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-600 px-6 py-3 text-sm font-semibold">Explore My Work <ArrowRight className="ml-1 inline" size={16} /></button><button onClick={() => goTo("contact")} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold">Contact Me</button></div><div className="mt-7 flex justify-center gap-4 lg:justify-start">{data.links.map((link) => <a key={link.label} href={link.href} {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5" aria-label={link.label}>{link.icon}</a>)}</div></div><Card className="p-6 sm:p-8"><h2 className="text-sm font-semibold">Technical foundation</h2><p className="mt-1 text-xs text-slate-400">Capabilities grounded in coursework and projects</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{data.capabilities.map(([title, desc, icon]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="flex items-start gap-3"><span className="rounded-xl border border-white/10 p-2 text-cyan-200">{icon}</span><div><h3 className="text-sm font-bold">{title}</h3><p className="mt-1 text-xs text-slate-300">{desc}</p></div></div></div>)}</div></Card></div></Container></section>
      <section id="about" className="scroll-mt-24 border-t border-white/10 py-20"><Container><Heading title="About Me">Engineering experience supporting a growing cybersecurity and technology-risk focus.</Heading><div className="mt-10 grid gap-6 lg:grid-cols-2"><Card className="p-6 sm:p-8"><p className="leading-relaxed">{data.about[0]}</p><p className="mt-4 leading-relaxed text-slate-300">{data.about[1]}</p></Card><div className="grid gap-6"><Card className="p-6"><p className="text-xs uppercase tracking-widest text-slate-400">Education</p><p className="mt-4 font-bold">B.A. Computer Science · Minor in Mathematics</p><p className="mt-1 text-sm text-slate-300">Hunter College, City University of New York</p><p className="mt-1 text-sm text-slate-400">August 2024 – May 2028 (expected)</p></Card><Card className="p-6"><p className="font-bold">Career interests</p><p className="mt-2 text-sm leading-relaxed text-slate-300">Technical Risk Management, Governance, Risk & Compliance, security engineering, threat intelligence, application security, and technology internships.</p></Card></div></div></Container></section>
      <section id="experience" className="scroll-mt-24 border-t border-white/10 py-20"><Container><Heading title="Experience">Software engineering, AI-system evaluation, and technical support experience.</Heading><div className="mt-12 grid gap-6">{data.experience.map((item) => <Card key={item.title} className="p-6 sm:p-8"><div className="flex flex-col gap-2 sm:flex-row sm:justify-between"><div><h3 className="text-lg font-bold">{item.title}</h3><p className="text-sm font-semibold text-slate-300">{item.company}</p></div><div className="shrink-0 sm:text-right"><p className="text-xs text-slate-400">{item.period}</p><p className="mt-1 text-xs text-slate-400">{item.type}</p></div></div><ul className="mt-4 grid gap-2">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-sm text-slate-300"><span aria-hidden="true" className="text-fuchsia-300">•</span>{bullet}</li>)}</ul><div className="mt-4 flex flex-wrap gap-2">{item.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div></Card>)}</div></Container></section>
      <section id="skills" className="scroll-mt-24 border-t border-white/10 py-20"><Container><Heading title="Technical Skills">Categorized capabilities supported by experience, coursework, and hands-on labs.</Heading><div className="mt-12 grid gap-6 md:grid-cols-2">{data.skills.map(([category, items]) => <Card key={category} className="p-6"><h3 className="font-bold text-cyan-100">{category}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <Pill key={item}>{item}</Pill>)}</div></Card>)}</div></Container></section>
      <section id="projects" className="scroll-mt-24 border-t border-white/10 py-20"><Container><Heading title="Selected Work">Technical projects and academic work aligned with engineering, cybersecurity, and risk.</Heading><div className="mt-12 grid gap-6 md:grid-cols-2">{data.projects.map((project) => <Card key={project.title} className={cn("overflow-hidden", project.compact && "md:col-span-2")}>{project.image && <div className="aspect-[16/9] overflow-hidden border-b border-white/10"><img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" width="1200" height="675" className="h-full w-full object-cover" /></div>}<div className="p-6"><div className="flex items-start justify-between gap-3"><div><h3 className="text-lg font-bold">{project.title}</h3>{project.context && <p className="mt-1 text-xs font-medium text-cyan-200">{project.context}</p>}<p className="mt-2 text-sm leading-relaxed text-slate-300">{project.desc}</p></div>{project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5" aria-label={`Open ${project.title} project`}><ExternalLink size={16} /></a>}</div><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}</div></div></Card>)}</div></Container></section>
      <section id="certifications" className="scroll-mt-24 border-t border-white/10 py-20">
        <Container>
          <Heading title="Certifications & Training">Cybersecurity programs and recent industry training, presented by credential type.</Heading>
          <div className="mt-12 grid gap-6">
            {data.training.map((item) => <Card key={item.title} className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="min-w-0 md:w-2/5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 rounded-xl border border-white/10 p-2 text-cyan-200">{item.icon}</span>
                    <div className="min-w-0">
                      <h3 className="break-words font-bold leading-snug">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.org}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs">{item.status}</span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <CredentialActions item={item} />
                </div>
                <ul className="grid gap-2 md:w-3/5">
                  {item.areas.map((area) => <li key={area} className="flex gap-2 text-sm text-slate-300"><span aria-hidden="true" className="text-fuchsia-300">•</span>{area}</li>)}
                </ul>
              </div>
            </Card>)}
          </div>
        </Container>
      </section>
      <section id="contact" className="scroll-mt-24 border-t border-white/10 py-20"><Container><Heading title="Get In Touch">Open to cybersecurity, technology-risk, security engineering, and software-focused internship opportunities.</Heading><div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start"><Card className="p-6 sm:p-8"><h3 className="text-lg font-bold">Contact</h3><p className="mt-2 text-sm text-slate-300">The best way to reach me is by email or LinkedIn.</p><div className="mt-6 grid gap-4"><a href={`mailto:${data.email}`} className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><Mail size={18} className="shrink-0" /><span className="min-w-0 break-all text-sm">{data.email}</span></a><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><MapPin size={18} /><span className="text-sm">{data.location}</span></div></div></Card><Card className="p-6 sm:p-8"><h3 className="text-lg font-bold">Message</h3><p className="mt-2 text-sm text-slate-300">Send a message or use the email address provided.</p><ContactStatus status={status} />{isContactFormConfigured && <form onSubmit={onSubmit} className="mt-6 grid gap-4"><div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" value={form.website} onChange={onChange} tabIndex="-1" autoComplete="off" /></div><div className="grid gap-4 sm:grid-cols-2">{[["name", "Name", "text", 100], ["email", "Email", "email", 254]].map(([name, label, type, max]) => <label key={name} className="grid gap-2 text-sm" htmlFor={name}>{label}<input id={name} type={type} name={name} value={form[name]} onChange={onChange} required maxLength={max} autoComplete={name} className="min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300" /></label>)}</div><label className="grid gap-2 text-sm" htmlFor="subject">Subject<input id="subject" name="subject" value={form.subject} onChange={onChange} required maxLength="150" className="min-w-0 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300" /></label><label className="grid gap-2 text-sm" htmlFor="message">Message<textarea id="message" name="message" value={form.message} onChange={onChange} required maxLength="3000" rows="5" className="min-w-0 resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-300" /></label><button type="submit" disabled={loading} className="min-h-11 rounded-2xl bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-600 py-3 text-sm font-semibold disabled:opacity-60">{loading ? "Sending…" : "Send Message"}</button></form>}</Card></div></Container></section>
    </main><footer className="border-t border-white/10 py-10"><Container><div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {data.name}. New York, NY</p><p>Built with React and Tailwind CSS</p></div></Container></footer>
  </div>;
}
