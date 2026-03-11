import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Code2,
  Braces,
  Cpu,
  Globe,
  GraduationCap,
  Award,
  Send,
  ArrowRight,
  Terminal,
  Instagram,
  Twitter,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold gradient-text tracking-tighter"
        >
          JAY THUMMAR
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link font-medium">
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-primary text-white rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 border-b border-white/10 p-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-medium text-slate-300 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-12 relative overflow-hidden px-4 md:px-0">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-3/5 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-slate-400">Available for Freelance & Internships</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight font-extrabold tracking-tight">
              Crafting <span className="gradient-text">Intelligent</span> <br className="hidden md:block" />
              Digital Experiences
            </h1>

            <p className="text-xl text-slate-400 mb-8 max-w-2xl">
              Hi, I'm <span className="text-white font-semibold">Jay Thummar</span>, a 3rd-year IT student at DDU.
              Specializing in Full-Stack Development and Generative AI.
              Passionate about building scalable solutions that bridge the gap between human and machine.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                href="https://docs.google.com/document/d/1h8BTHUTnmaPixOztgZx2jKVsw24w_gqS/edit?usp=drive_link&ouid=109062164817437709696&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white rounded-xl font-bold flex items-center gap-2 group shadow-xl transition-all"
              >
                My Resume <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold flex items-center gap-2 transition-all"
              >
                View Projects
              </motion.a>

              <div className="flex items-center gap-6 ml-0 md:ml-4 mt-4 md:mt-0">
                <a href="https://github.com/Jay-thummar" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/jay-thummar-3b9b84321/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://leetcode.com/u/Jay-T/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  <Terminal size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-2/5 relative flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Animated Background Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl animate-[subtle-zoom_10s_infinite_alternate]"></div>

              {/* Unique Shape Photo Container */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative z-10 w-full h-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-primary/20
                rounded-[30%_70%_70%_30%/30%_30%_70%_70%] transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10 border-white/10 ring-1 ring-white/20 rounded-inherit"></div>
                <img
                  src="/jay.png"
                  alt="Jay Thummar"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-primary/20 backdrop-blur-md rounded-full border border-white/20 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-accent/20 backdrop-blur-md rounded-full border border-white/20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card group flex flex-col h-full"
  >
    <div className="h-48 rounded-t-2xl overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 transition-transform duration-500 group-hover:scale-110`}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {project.icon}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl group-hover:text-primary transition-colors">{project.title}</h3>
        <div className="flex gap-2">
          {project.github && <a href={project.github} target="_blank" className="text-slate-400 hover:text-white"><Github size={20} /></a>}
          {project.demo && <a href={project.demo} target="_blank" className="text-slate-400 hover:text-white"><ExternalLink size={20} /></a>}
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 rounded-md border border-white/10 text-slate-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  const projects = [
    {
      title: "TeamBond",
      description: "AI-Powered Hackathon Team Member Finder that analyzes GitHub profiles and technical skills to find compatible teammates.",
      tech: ["React", "Spring Boot", "GenAI", "MongoDB", "WebSocket"],
      github: "https://github.com/Jay-thummar/TeamBond",
      demo: "https://youtu.be/7q-ghLzRnGA",
      icon: <Cpu size={48} className="text-primary" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "RHYThymix",
      description: "AI music recognition engine using audio fingerprinting and K-Means clustering for intelligent recommendations.",
      tech: ["Python", "React", "FastAPI", "ML", "Scikit-Learn"],
      github: "https://github.com/Jay-thummar/RHYThymix",
      demo: "https://youtu.be/lXjOv9pvaBc",
      icon: <Globe size={48} className="text-purple-500" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Money-Monitor",
      description: "Comprehensive personal finance tracker with real-time updates, cloud sync, and insightful spending charts.",
      tech: ["Android SDK", "Kotlin/Java", "Firebase", "Crashlytics"],
      github: "https://github.com/Jay-thummar/Money-Monitor---Expense-Tracker",
      icon: <Terminal size={48} className="text-emerald-500" />,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">My Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured <span className="gradient-text">Projects</span></h2>
          </div>
          <a href="https://github.com/Jay-thummar" target="_blank" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-all font-semibold">
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Skills = () => {
  const skillGroups = [
    {
      name: "Programming",
      icon: <Code2 className="text-primary" />,
      skills: ["C++", "Java", "JavaScript", "Python", "C"]
    },
    {
      name: "Development",
      icon: <Braces className="text-secondary" />,
      skills: ["React", "HTMl", "Tailwind CSS", "Spring Boot", "Android"]
    },
    {
      name: "Specialized",
      icon: <Cpu className="text-accent" />,
      skills: ["GenAI", "Machine Learning", "FastAPI", "Node.js"]
    },
    {
      name: "Data & Others",
      icon: <Terminal className="text-emerald-500" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Git/GitHub"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Technical <span className="gradient-text">Stack</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Technologies and tools I have mastered throughout my academic and personal journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group border-transparent hover:border-white/10"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl mb-4">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm font-medium border border-white/5">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Education = () => {
  const timeline = [
    {
      role: "B.Tech in Information Technology",
      place: "Dharmsinh Desai University",
      period: "2023 – 2027",
      details: "Current CPI: 8.57/10.0. Specializing in Software Engineering and AI.",
      icon: <GraduationCap size={24} />
    },
    {
      role: "Higher Secondary (12th Science)",
      place: "Shree Swaminarayan Gurukul Vidhyalaya",
      period: "2022 – 2023",
      details: "Result: 99.58 PR (87.23%). Focus on Physics, Chemistry, and Mathematics.",
      icon: <Award size={24} />
    },
    {
      role: "Secondary School Ceremony (10th)",
      place: "Shree Swaminarayan Gurukul Vidhyalaya",
      period: "2020 – 2021",
      details: "Result: 99.78 PR (96.50%). Excellence in standard academics.",
      icon: <Award size={24} />
    }
  ]

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Educational <span className="gradient-text">Journey</span></h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 md:gap-12 relative"
            >
              {/* Line */}
              {i !== timeline.length - 1 && (
                <div className="absolute top-12 bottom-0 left-6 md:left-8 w-0.5 bg-white/10"></div>
              )}
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 glass-card flex items-center justify-center text-primary relative z-10">
                {item.icon}
              </div>
              <div className="flex-1 pb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl">{item.role}</h3>
                  <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="text-slate-100 font-medium mb-2">{item.place}</div>
                <p className="text-slate-400">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://portfolio-backend-4p1q.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000) // Reset status after 5s
      } else {
        console.error('Submission Error:', data)
        setStatus('error')
      }
    } catch (error) {
      console.error('Fetch Error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-6 md:p-12 relative z-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">Let's <span className="gradient-text">Build</span> <br />Something Great</h2>
              <p className="text-slate-400 text-lg mb-8">
                Always open to collaborating on innovative projects, internships, or just sharing thoughts on GenAI and development.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email Me</div>
                    <div className="text-lg font-medium">jaythummar999@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">LinkedIn</div>
                    <div className="text-lg font-medium">Jay Thummar</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
              {status === 'success' && <p className="text-green-500 text-center font-medium">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-center font-medium">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="py-12 border-t border-white/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold gradient-text">JAY THUMMAR</div>
      <div className="text-slate-400 text-sm">© {new Date().getFullYear()} Jay Thummar. Built with React & Node.js.</div>
      <div className="flex gap-6">
        <a href="https://github.com/Jay-thummar" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/jay-thummar-3b9b84321/" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
        <a href="https://leetcode.com/u/Jay-T/" className="text-slate-400 hover:text-white transition-colors"><Terminal size={20} /></a>
      </div>
    </div>
  </footer>
)

function App() {
  return (
    <div className="relative text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
