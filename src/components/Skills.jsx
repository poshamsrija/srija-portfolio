import { motion } from 'framer-motion'
import { Braces, Code2, Database, GitBranch, Server, Terminal } from 'lucide-react'

const skillGroups = [
  { title: 'Frontend', icon: Code2, skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'], accent: 'mint' },
  { title: 'Backend', icon: Server, skills: ['Node.js', 'Express.js', 'REST APIs'], accent: 'blue' },
  { title: 'Database', icon: Database, skills: ['MongoDB', 'MySQL', 'SQL'], accent: 'lime' },
  { title: 'Programming', icon: Braces, skills: ['Java', 'Python', 'C'], accent: 'coral' },
  { title: 'Tools', icon: GitBranch, skills: ['Git', 'GitHub', 'VS Code'], accent: 'gold' },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title">
      <div className="page-width">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">02 / THE TOOLKIT</p><h2 id="skills-title">A stack for <span>building well.</span></h2></div>
          <p className="section-intro">The technologies I use to take a product from a blank page to something people can use.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills, accent }, index) => (
            <motion.article className={`skill-card accent-${accent}`} key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.06 }}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{index + 1}</span></div>
              <h3>{title}</h3>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              <div className="skill-card-line" />
            </motion.article>
          ))}
        </div>
        <div className="skills-note"><Terminal size={16} /><span>Currently growing my toolkit, one project at a time.</span></div>
      </div>
    </section>
  )
}

export default Skills