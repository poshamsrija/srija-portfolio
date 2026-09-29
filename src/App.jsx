import { BriefcaseBusiness, CodeXml, Mail, MoveUpRight } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

const socialLinks = [
  { label: 'GitHub', href: 'https://example.com', icon: CodeXml },
  { label: 'LinkedIn', href: 'https://example.com', icon: BriefcaseBusiness },
]

function App() {
  return (
    <>
      <Navbar socialLinks={socialLinks} />
      <main>
        <Hero socialLinks={socialLinks} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#home">Srija<span>.</span></a>
        <p>Srija — Full Stack MERN Developer</p>
        <div className="footer-links" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} aria-label={`${label} (placeholder link)`} target="_blank" rel="noreferrer">
              <Icon size={17} aria-hidden="true" />
            </a>
          ))}
          <a href="mailto:your.email@example.com" aria-label="Email Srija">
            <Mail size={17} aria-hidden="true" />
          </a>
        </div>
        <small>© {new Date().getFullYear()} Srija. All rights reserved.</small>
        <a className="back-to-top" href="#home" aria-label="Back to top"><MoveUpRight size={16} /></a>
      </footer>
    </>
  )
}

export default App