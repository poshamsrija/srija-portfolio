import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, CodeXml } from 'lucide-react'
import profileImage from '../assets/passphotoformal.jpeg'

const resumeText = `Srija | Full Stack MERN Developer

EDUCATION
B.Tech, Computer Science and Engineering
G Narayanamma Institute of Technology and Sciences for Women, Hyderabad

PROFILE
Computer Science Engineering student interested in full-stack development, software engineering, problem solving, and building real-world applications.

TECHNICAL SKILLS
React, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Express.js, REST APIs, MongoDB, MySQL, SQL, Java, Python, C, Git, GitHub, VS Code

PROJECTS
TaskSphere - Full-stack MERN task management application with a Kanban-style interface.
SAGE - Smart assistive bed prototype with voice-command positioning control and embedded hardware.
Student Result Management System - Python application for managing and analyzing academic results.
`

function downloadResume() {
  const resume = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(resume)
  const link = document.createElement('a')
  link.href = url
  link.download = 'Srija-Resume.txt'
  link.click()
  URL.revokeObjectURL(url)
}

function Hero({ socialLinks }) {
  return (
    <section className="hero-section page-width" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="eyebrow-line" /> Hi, I&apos;m Srija <span aria-hidden="true">✦</span>
        </motion.p>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}>
          Full Stack <span>MERN</span><br />Developer
        </motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}>
          I build responsive and scalable web applications using modern technologies, with a focus on clean code, problem solving, and creating practical solutions.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.23 }}>
          <a className="button button-primary" href="#projects">View Projects <ArrowUpRight size={17} /></a>
          <button className="button button-secondary" type="button" onClick={downloadResume}>Download Resume <ArrowDownToLine size={16} /></button>
        </motion.div>
        <div className="hero-socials" aria-label="Social profiles">
          {socialLinks.map(({ label, href }) => {
            const Icon = label === 'GitHub' ? CodeXml : BriefcaseBusiness
            return <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (placeholder link)`}><Icon size={18} /><span>{label}</span></a>
          })}
        </div>
      </div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.97, x: 12 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
        <div className="portrait-frame">
          <img className="profile-image" src={profileImage} alt="Srija - Full Stack MERN Developer" />
          <div className="portrait-caption"><span>Srija</span><small>FULL STACK DEVELOPER</small></div>
        </div>
        <div className="portrait-accent" aria-hidden="true"><span>01</span><i /></div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}

export default Hero