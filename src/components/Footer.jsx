import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa'

const socials = [
  { icon: AiOutlineGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: AiOutlineLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  { icon: AiOutlineMail, href: 'mailto:hello@example.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} AI Engineer Portfolio. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-brand-400 transition-colors text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}