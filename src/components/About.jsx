import { motion } from 'framer-motion'
import { ArrowUpRight, GraduationCap, Layers3 } from 'lucide-react'

function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-width about-grid">
        <div className="section-heading">
          <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">Curious by nature.<br /><span>Builder by choice.</span></h2>
        </div>
        <motion.div className="about-content" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
          <p className="about-lead">I&apos;m a Computer Science Engineering student who loves turning ideas into thoughtful, working software.</p>
          <p>I&apos;m especially interested in full-stack development, software engineering, and problem solving. From shaping an interface to connecting APIs and data, I enjoy the whole process of building real-world applications that feel useful and intuitive.</p>
          <div className="about-details">
            <div className="about-detail-icon"><GraduationCap size={19} /></div>
            <div><span>EDUCATION</span><strong>B.Tech, Computer Science &amp; Engineering</strong><small>G Narayanamma Institute of Technology and Sciences for Women, Hyderabad</small></div>
          </div>
          <a className="text-link" href="#contact">More about my journey <ArrowUpRight size={15} /></a>
        </motion.div>
        <div className="about-aside">
          <div className="aside-number">01<span>.</span></div>
          <Layers3 size={20} aria-hidden="true" />
          <p>From first sketch<br />to full stack.</p>
          <div className="aside-rule" />
          <small>DESIGN · BUILD · REFINE</small>
        </div>
      </div>
    </section>
  )
}

export default About