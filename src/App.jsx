import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Code2, GitBranch, Mail, Menu, MoveUpRight, X } from 'lucide-react'
import mlCertificate from '../certificates/ml_using_python.png'
import frontendCertificate from '../certificates/frontend.png'
import deepLearningCertificate from '../certificates/deep_learning.png'
import dataScienceCertificate from '../certificates/data_science_maths.png'
import pythonCertificate from '../certificates/creash_course_python.png'
import './App.css'

const projects = [
  { number: '01', type: 'AI skill assessment platform', name: 'AI SkillFit', description: 'A multilingual voice interview platform for Karnataka’s blue-collar workforce, with AI-led assessments and fitment scores.', stack: ['React Native', 'FastAPI', 'LiveKit', 'Supabase'], result: 'Combines real-time voice interviews, Sarvam AI speech, Groq LLMs, and trade-focused evaluation.', color: 'coral', link: 'https://github.com/Adityasharma0810/real-ai-for-bharat' },
  { number: '02', type: 'Offline machine learning app', name: 'Voice App Launcher', description: 'A system-tray utility that launches mapped applications from simple voice commands like “Open A”.', stack: ['Python', 'GRU', 'PyQt5', 'Librosa'], result: 'Runs speech recognition locally with a custom-trained model for privacy and fast response.', color: 'sage', link: 'https://github.com/Adityasharma0810/GRU_MODEL_ASSISTANT' },
  { number: '03', type: 'Deep research automation', name: 'Research Agent', description: 'A LangGraph workflow that researches competitors, trends, and product ideas through live web search.', stack: ['LangGraph', 'Groq', 'Tavily', 'FastAPI'], result: 'Routes research through specialized graph paths and produces reports with generated charts.', color: 'blue', link: 'https://github.com/Adityasharma0810/r-d_automation' },
  { number: '04', type: 'Currently building', name: 'Agentic Graph', description: 'An in-progress project exploring structured agent workflows, routing, and tool-using intelligence.', stack: ['Agents', 'Graphs', 'LLMs'], result: 'A work in progress. More details will be shared as the project takes shape.', color: 'coral', link: 'https://github.com/Adityasharma0810?tab=repositories' },
]

const experiences = [
  { role: 'Software Developer Intern', company: 'GetCollab', period: 'Jul 2025 - Present', location: 'Bangalore, India', points: ['Built onboarding and portfolio screens for a React Native app, helping influencers showcase marketing work to companies.', 'Implemented in-app connect features, letting companies directly contact influencers on the platform.'] },
  { role: 'Junior Frontend Developer Intern', company: 'Augmented AI, BMSCE', period: 'Jan 2025 - Present', location: 'Bangalore, India', points: ['Built 15+ reusable React.js components adopted across projects, cutting development time by 30% and improving UI consistency.', 'Shipped responsive web and event platforms using React.js and JavaScript, following Agile and code-review workflows.'] },
  { role: 'Frontend Developer Intern', company: 'Codeunia', period: 'May 2025 - Jun 2025', location: 'Remote', points: ['Optimized React component rendering and reduced page load times through profiling and refactoring.', 'Collaborated with senior engineers across design, testing, and validation workflows.'] },
]

const certifications = [
  { number: '01', name: 'Machine Learning Using Python', issuer: 'Simplilearn SkillUp', date: 'Sep 2026', detail: 'Certificate of Completion focused on practical machine learning workflows using Python.', image: mlCertificate },
  { number: '02', name: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI · Coursera', date: 'Aug 2026', detail: 'Course covering neural network fundamentals and deep learning concepts.', image: deepLearningCertificate },
  { number: '03', name: 'Crash Course on Python', issuer: 'Google · Coursera', date: 'Aug 2024', detail: 'Foundational Python programming course covering core syntax, automation, and problem solving.', image: pythonCertificate },
  { number: '04', name: 'Data Science Math Skills', issuer: 'Duke University · Coursera', date: 'Nov 2024', detail: 'Mathematical foundations for data science, including algebra, probability, and statistics.', image: dataScienceCertificate },
  { number: '05', name: 'Introduction to Front-End Development', issuer: 'Meta · Coursera', date: 'Dec 2024', detail: 'Introduction to front-end development, web structure, and the fundamentals of building for the browser.', image: frontendCertificate },
]

function Reveal({ children, className = '' }) {
  const [visible, setVisible] = useState(false)
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting)
    }, { threshold: 0.14 })

    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  return <div ref={revealRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false)
  return <article className={`project-card ${project.color} ${flipped ? 'flipped' : ''}`}>
    <div className="card-inner">
      <div className="card-face card-front">
        <div className="flex items-start justify-between"><span className="project-number">{project.number}</span></div>
        <div className="mt-auto"><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p className="card-description">{project.description}</p><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
        <div className="card-actions"><button className="flip-button" type="button" onClick={() => setFlipped(true)}>View details <ArrowUpRight size={16} /></button><a className="repo-link" href={project.link} target="_blank" rel="noreferrer">Repo <MoveUpRight size={14} /></a></div>
      </div>
      <div className="card-face card-back"><div><p className="eyebrow">The outcome</p><h3>A useful thing, made well.</h3><p className="card-description">{project.result}</p></div><button className="flip-button" type="button" onClick={() => setFlipped(false)}>Back to project <X size={16} /></button></div>
    </div>
  </article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedCertification, setSelectedCertification] = useState(null)

  return (
    <main>
      <nav className={`site-nav ${menuOpen ? 'menu-open' : ''}`}><a className="logo-mark" href="#top" onClick={() => setMenuOpen(false)}>AS</a><button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button><div className="nav-links"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div><a className="nav-cta" href="mailto:adityas08102006@gmail.com">Let's talk <MoveUpRight size={15} /></a></nav>
      <section id="top" className="hero-section page-shell"><div className="hero-copy"><Reveal className="hero-reveal"><h1>Hello, I am <em>Aditya.</em></h1></Reveal><Reveal><p className="hero-subtitle">I enjoy solving real-world problems with user-friendly software, smart automation, and thoughtful AI integration.</p></Reveal><Reveal><a className="text-link" href="#work">See selected work <ArrowUpRight size={17} /></a></Reveal></div><div className="hero-aside" aria-hidden="true"><span>Scroll to explore</span><div className="scroll-line" /></div></section>
      <section id="about" className="about-section page-shell"><Reveal className="section-intro"><p className="section-label">01 / About</p><h2>Curious by nature.<br /><span>Intentional by craft.</span></h2></Reveal><Reveal className="about-content"><p>I’m a Computer Science undergraduate at BMS College of Engineering with a strong interest in AI/ML, LLMs, and building real-world intelligent systems.</p><p>I enjoy turning ideas into practical products, from real-time AI interview platforms to on-device speech models. I’m experienced with Python, PyTorch, LangChain, LangGraph, FastAPI, and modern AI technologies, and I’m always looking to learn, experiment, and build impactful solutions.</p><div className="about-meta"><span><Code2 size={17} /> AI + ML builder</span><span>Always learning</span></div></Reveal></section>
      <section id="experience" className="experience-section page-shell"><Reveal className="section-heading"><div><p className="section-label">02 / Experience</p><h2>Places I’ve<br /><span>learned by doing.</span></h2></div></Reveal><div className="experience-list">{experiences.map((experience, index) => <Reveal key={experience.company} className="experience-item"><div className="experience-index">0{index + 1}</div><div className="experience-main"><div className="experience-top"><div><h3>{experience.role}</h3><p className="experience-company">{experience.company}</p></div><div className="experience-date"><span>{experience.period}</span><span>{experience.location}</span></div></div><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div></Reveal>)}</div></section>
      <section id="work" className="work-section page-shell"><Reveal className="section-heading"><div><p className="section-label">03 / Selected work</p><h2>A few things I’ve<br /><span>helped bring to life.</span></h2></div><p className="flip-hint">Tap a card to turn it over <MoveUpRight size={16} /></p></Reveal><div className="project-grid">{projects.map((project) => <Reveal key={project.number}><ProjectCard project={project} /></Reveal>)}</div></section>
      <section id="certifications" className="certifications-section page-shell"><Reveal className="section-heading"><div><p className="section-label">04 / Certifications</p><h2>Learning that<br /><span>keeps moving.</span></h2></div><p className="flip-hint">Hover a card for details</p></Reveal><div className="certification-grid">{certifications.map((certification) => <Reveal key={certification.number}><article className="certification-card" tabIndex="0"><img className="certification-image" src={certification.image} alt={`${certification.name} certificate`} /><div className="certification-card-content"><div className="certification-top"><span className="project-number">{certification.number}</span><span className="certification-date">{certification.date}</span></div><h3>{certification.name}</h3><p className="certification-issuer">{certification.issuer}</p><div className="certification-detail"><p>{certification.detail}</p><span>Verified learning milestone</span><button className="certificate-button" type="button" onClick={() => setSelectedCertification(certification)}>View certificate <ArrowUpRight size={14} /></button></div></div></article></Reveal>)}</div></section>
      {selectedCertification && <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={() => setSelectedCertification(null)}><div className="certificate-modal-content" onClick={(event) => event.stopPropagation()}><button className="certificate-close" type="button" aria-label="Close certificate" onClick={() => setSelectedCertification(null)}><X size={20} /></button><img className="certificate-modal-image" src={selectedCertification.image} alt={`${selectedCertification.name} certificate`} /><p className="section-label">Certificate of completion</p><h2 id="certificate-title">{selectedCertification.name}</h2><p className="certificate-modal-issuer">{selectedCertification.issuer}</p><div className="certificate-modal-meta"><span>Completed</span><strong>{selectedCertification.date}</strong></div><p>{selectedCertification.detail}</p></div></div>}
      <section id="contact" className="contact-section page-shell"><Reveal><p className="section-label">05 / Contact</p><h2>Wanna say <em>hi to me?</em></h2><a className="contact-link" href="mailto:adityas08102006@gmail.com">adityas08102006@gmail.com <ArrowUpRight size={22} /></a></Reveal></section>
      <footer className="page-shell footer"><div><a href="https://github.com/Adityasharma0810?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={16} /><span>GitHub</span></a><a href="https://www.linkedin.com/in/adityasharma08102006/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={16} /><span>LinkedIn</span></a><a href="mailto:adityas08102006@gmail.com" aria-label="Email"><Mail size={16} /><span>Email</span></a></div><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
