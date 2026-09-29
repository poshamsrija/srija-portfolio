import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail, Send } from 'lucide-react'

const contactMethods = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com', icon: Mail },
  { label: 'GitHub', value: 'Profile link coming soon', href: 'https://example.com', icon: CodeXml },
  { label: 'LinkedIn', value: 'Profile link coming soon', href: 'https://example.com', icon: BriefcaseBusiness },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <div className="contact-heading">
          <p className="section-kicker">05 / GET IN TOUCH</p>
          <h2 id="contact-title">Let&apos;s Build Something<br /><span>Together</span><b>.</b></h2>
          <p>I&apos;m open to opportunities, collaborations, and good conversations about building for the web.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <p className="contact-label">REACH OUT DIRECTLY</p>
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <a className="contact-method" href={href} key={label} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'}>
                <span className="contact-method-icon"><Icon size={18} /></span>
                <span><small>{label}</small><strong>{value}</strong></span>
                <ArrowUpRight size={15} />
              </a>
            ))}
            <div className="contact-status"><span /><p>Open to opportunities</p></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="form-row">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </div>
            <div className="form-row">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell me a little about what you have in mind..." rows="4" required />
            </div>
            <button className="button button-primary form-submit" type="submit">Send Message <Send size={15} /></button>
            <p className="form-note" role="status">{submitted ? 'Thanks for reaching out. This preview form is not connected yet; please email directly.' : 'This form is a front-end preview and does not send messages yet.'}</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact