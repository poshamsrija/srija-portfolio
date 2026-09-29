import { motion } from 'framer-motion'
import { Award, BookOpenCheck, Lightbulb, Medal, Rocket, Trophy } from 'lucide-react'

const credentials = [
  { title: 'R&D Project Showcase', detail: 'Consolation Prize · 2026', icon: Trophy, year: '2026', accent: 'award-coral' },
  { title: 'Anveshana Innovation Program', detail: '2nd Appreciation Award', icon: Lightbulb, accent: 'award-gold' },
  { title: 'MERN Full Stack Development', detail: 'Workshop + Hackathon', icon: Rocket, accent: 'award-blue' },
  { title: 'Advanced SQL Training', detail: 'Training program', icon: BookOpenCheck, accent: 'award-mint' },
  { title: 'Smart Interviews', detail: 'Training program', icon: Medal, accent: 'award-purple' },
  { title: 'Microsoft Virtual Experience', detail: 'Virtual experience / internship programs', icon: Award, accent: 'award-green' },
]

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications" aria-labelledby="certifications-title">
      <div className="page-width">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">04 / MILESTONES</p><h2 id="certifications-title">Learning in <span>motion.</span></h2></div>
          <p className="section-intro">A few milestones from learning, building, and showing up to solve interesting problems.</p>
        </div>
        <div className="credentials-grid">
          {credentials.map(({ title, detail, icon: Icon, year, accent }, index) => (
            <motion.article className={`credential-card ${accent}`} key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
              <div className="credential-icon"><Icon size={19} /></div>
              <div><h3>{title}</h3><p>{detail}</p></div>
              <span className="credential-index">{year || `0${index + 1}`}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications