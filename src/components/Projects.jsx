import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, CodeXml, ExternalLink, Layers3 } from 'lucide-react'

const projects = [
  {
    number: '01', title: 'TaskSphere', category: 'FULL STACK WEB APPLICATION',
    description: 'A full-stack task management application built using the MERN stack. It allows users to manage tasks through a Kanban-style interface.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: ['User authentication', 'Task creation & management', 'Priority management', 'Kanban board', 'Drag and drop', 'REST APIs'],
    visual: 'tasksphere',
  },
  {
    number: '02', title: 'SAGE', subtitle: 'Sustainable Assisted Geriatric Environment', category: 'EMBEDDED SYSTEMS · ASSISTIVE TECH',
    description: 'A smart assistive bed prototype designed to provide convenient positioning control using voice commands and embedded hardware.',
    technologies: ['Arduino', 'Bluetooth HC-05', 'Servo Motors', 'Embedded Systems'],
    features: ['Voice-command positioning control', 'Bluetooth communication', 'Servo-powered adjustment'],
    visual: 'sage',
  },
  {
    number: '03', title: 'Student Result Management System', category: 'DATA & APPLICATION DEVELOPMENT',
    description: 'A Python-based application for managing and analyzing student academic results.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    features: ['Student result management', 'Academic data analysis', 'Visual result insights'],
    visual: 'results',
  },
]

function ProjectVisual({ type, number }) {
  if (type === 'tasksphere') {
    return <div className="project-art task-art" aria-hidden="true"><div className="task-art-label">BOARD / THIS WEEK</div><div className="kanban-preview"><div><b>TO DO</b><i /><i /></div><div><b>IN PROGRESS</b><i /><i /><i /></div><div><b>DONE</b><i /></div></div><span className="art-stamp">01 — 03</span></div>
  }
  if (type === 'sage') {
    return <div className="project-art sage-art" aria-hidden="true"><div className="sage-sun" /><div className="sage-bed"><span /><i /><b /></div><div className="sage-label">VOICE CONTROL <span>● ACTIVE</span></div><span className="art-stamp">02 — 03</span></div>
  }
  return <div className="project-art results-art" aria-hidden="true"><div className="chart-axis"><span>100</span><span>50</span><span>0</span></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div><span className="art-stamp">{number} — 03</span></div>
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <div className="page-width">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">03 / SELECTED WORK</p><h2 id="projects-title">Projects with <span>purpose.</span></h2></div>
          <p className="section-intro">A mix of full-stack product thinking, embedded systems, and data-driven problem solving.</p>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article className={`project-card project-${project.visual}`} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, delay: index * 0.05 }}>
              <div className="project-image-wrap"><ProjectVisual type={project.visual} number={project.number} /></div>
              <div className="project-info">
                <div className="project-meta"><span>{project.category}</span><span>{project.number} / 03</span></div>
                <h3>{project.title}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <p className="project-description">{project.description}</p>
                <div className="feature-list">{project.features.map((feature) => <span key={feature}><i />{feature}</span>)}</div>
                <div className="project-bottom">
                  <ul className="technology-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                  <div className="project-actions">
                    <a href="https://example.com" target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title} (placeholder link)`}><CodeXml size={17} /> GitHub <ExternalLink size={12} /></a>
                    <a href="https://example.com" target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title} (placeholder link)`}>Live Demo <ArrowUpRight size={15} /></a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="projects-footnote"><Layers3 size={16} /><span>More projects and details coming soon.</span><ArrowDownRight size={15} /></div>
      </div>
    </section>
  )
}

export default Projects