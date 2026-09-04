import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiZap, FiShield, FiLayers, FiTrendingUp } from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'LLM Engineering',
    description: 'Fine-tuning and deploying large language models with RAG pipelines, prompt engineering, and efficient inference optimization.',
  },
  {
    icon: FiDatabase,
    title: 'Data Pipelines',
    description: 'Building robust ETL pipelines and vector databases to power retrieval-augmented generation at scale.',
  },
  {
    icon: FiZap,
    title: 'MLOps & Deployment',
    description: 'End-to-end model lifecycle management with CI/CD, monitoring, and reproducible training workflows.',
  },
  {
    icon: FiShield,
    title: 'AI Safety & Alignment',
    description: 'Implementing guardrails, evaluation frameworks, and responsible AI practices for production systems.',
  },
  {
    icon: FiLayers,
    title: 'Neural Architecture',
    description: 'Designing transformer-based architectures and custom deep learning models for specialized tasks.',
  },
  {
    icon: FiTrendingUp,
    title: 'Performance Tuning',
    description: 'Optimizing latency, throughput, and cost through quantization, distillation, and hardware acceleration.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            From research to production, I deliver AI solutions that are fast,
            reliable, and built to scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-8 hover:bg-white/10 hover:border-brand-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark-100">{feature.title}</h3>
              <p className="text-dark-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}