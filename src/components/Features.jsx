import { motion } from 'framer-motion'
import {
  FiCpu,
  FiDatabase,
  FiZap,
  FiShield,
  FiLayers,
  FiTrendingUp,
} from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'LLM Engineering',
    description:
      'Fine-tuning and deploying large language models with RAG pipelines, prompt optimization, and evaluation frameworks for production reliability.',
  },
  {
    icon: FiDatabase,
    title: 'Vector Search & RAG',
    description:
      'Building retrieval-augmented generation systems with vector databases, semantic search, and hybrid retrieval for grounded, cited answers.',
  },
  {
    icon: FiZap,
    title: 'Real-Time Inference',
    description:
      'Low-latency model serving with GPU optimization, batching, and caching to deliver predictions in milliseconds at scale.',
  },
  {
    icon: FiShield,
    title: 'Responsible AI',
    description:
      'Implementing guardrails, bias detection, and safety evaluation to ensure AI systems are fair, transparent, and trustworthy.',
  },
  {
    icon: FiLayers,
    title: 'MLOps & Automation',
    description:
      'End-to-end pipelines for training, versioning, monitoring, and continuous deployment of models from notebook to production.',
  },
  {
    icon: FiTrendingUp,
    title: 'Scalable Architecture',
    description:
      'Designing distributed, cloud-native systems that handle millions of requests with high availability and cost efficiency.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I <span className="gradient-text">Build</span>
          </h2>
          <div className="h-1 w-16 bg-brand-500 rounded mb-6 mx-auto" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            From research prototypes to production systems, I deliver AI solutions
            that are fast, reliable, and built to scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-slate-900/60 border border-slate-800 rounded-xl p-7 hover:border-brand-600/50 hover:bg-slate-900 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-600/15 border border-brand-600/30 flex items-center justify-center mb-5 group-hover:bg-brand-600/25 transition-colors">
                <feature.icon className="text-2xl text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}