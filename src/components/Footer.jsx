import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin, FiSend } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-dark-900/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto mb-8">
            Have a project in mind or want to discuss AI opportunities? I'd love
            to hear from you.
          </p>
          <a
            href="mailto:alex@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white font-semibold transition-all shadow-lg shadow-brand-600/30"
          >
            <FiSend /> alex@example.com
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-mono text-sm">
                AC
              </span>
              <span className="font-bold gradient-text">Alex Chen</span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              AI Engineer building intelligent, scalable systems that solve
              real-world problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-dark-200 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-dark-400 hover:text-brand-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-dark-400 hover:text-brand-400 transition-colors">Features</a></li>
              <li><a href="#architecture" className="text-dark-400 hover:text-brand-400 transition-colors">Architecture</a></li>
              <li><a href="#tech-stack" className="text-dark-400 hover:text-brand-400 transition-colors">Tech Stack</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-dark-200 mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="Email">
                <FiMail />
              </a>
            </div>
            <p className="flex items-center gap-2 text-dark-400 text-sm">
              <FiMapPin /> San Francisco, CA
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-dark-500 text-sm">
            © {new Date().getFullYear()} Alex Chen. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}