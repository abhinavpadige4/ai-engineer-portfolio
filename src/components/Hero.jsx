import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-800/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Building{' '}
            <span className="gradient-text">Intelligent</span>
            <br />
            Systems with AI
          </h1>

          <p className="text-dark-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            I'm Alex Chen, an AI Engineer specializing in large language models,
            machine learning, and production-grade AI systems. I turn complex
            problems into elegant, scalable solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white font-semibold transition-all shadow-lg shadow-brand-600/30"
            >
              Get in Touch <FiArrowRight />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg glass hover:bg-white/10 text-dark-100 font-semibold transition-all"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="GitHub">
              <FiGithub className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="LinkedIn">
              <FiLinkedin className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-dark-300 hover:text-brand-400 hover:bg-white/10 transition-all" aria-label="Email">
              <FiMail className="text-lg" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-brand-800/30 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-dark-400 text-xs">ai_engineer.py</span>
              </div>
              <pre className="text-dark-200 leading-relaxed">
                <code>
                  <span className="text-brand-400">class</span> <span className="text-yellow-300">AIEngineer</span>:{'\n'}
                  {'  '}<span className="text-brand-400">def</span> <span className="text-blue-300">__init__</span>(self):{'\n'}
                  {'    '}self.skills = [<span className="text-green-300">'LLMs'</span>,{'\n'}
                  {'      '}<span className="text-green-300">'ML'</span>, <span className="text-green-300">'NLP'</span>,{'\n'}
                  {'      '}<span className="text-green-300">'MLOps'</span>]{'\n'}
                  {'  '}<span className="text-brand-400">def</span> <span className="text-blue-300">build</span>(self):{'\n'}
                  {'    '}<span className="text-brand-400">return</span> <span className="text-green-300">'scalable AI'</span>{'\n'}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}