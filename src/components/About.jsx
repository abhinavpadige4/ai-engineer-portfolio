import { motion } from 'framer-motion'

const highlights = [
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Models Deployed' },
  { value: '12', label: 'LLM Applications' },
  { value: '99.2%', label: 'Model Accuracy' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          About Me
        </motion.h2>
        <div className="h-1 w-16 bg-brand-500 rounded mb-8" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-slate-300 leading-relaxed"
          >
            <p>
              I'm an AI Engineer passionate about turning cutting-edge research into
              practical, scalable products. My work spans natural language processing,
              computer vision, and generative AI.
            </p>
            <p>
              I've built recommendation systems serving millions of users, fine-tuned
              large language models for domain-specific tasks, and designed MLOps
              pipelines that take models from notebook to production in days, not months.
            </p>
            <p>
              I believe the best AI systems are those that are explainable, reliable,
              and built with the end user in mind. I love collaborating across teams
              to ship impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-brand-400 mb-1">{h.value}</div>
                <div className="text-sm text-slate-400">{h.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}