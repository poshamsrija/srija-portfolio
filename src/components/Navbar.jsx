import { useState } from 'react'
import { BriefcaseBusiness, CodeXml, Menu, X } from 'lucide-react'

const navigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]

function Navbar({ socialLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar page-width" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Srija, home">
          srija<span>.</span>
        </a>
        <button
          className="menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-content${menuOpen ? ' is-open' : ''}`} id="primary-navigation">
          <ul className="nav-links">
            {navigation.map(([label, href]) => (
              <li key={label}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-socials">
            {socialLinks.map(({ label, href }) => {
              const Icon = label === 'GitHub' ? CodeXml : BriefcaseBusiness
              return (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (placeholder link)`}>
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar