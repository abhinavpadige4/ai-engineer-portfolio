import { motion } from 'framer-motion'
import {
  FiServer,
  FiBox,
  FiGitBranch,
  FiActivity,
  FiCloud,
  FiCode,
} from 'react-icons/fi'

const layers = [
  {
    icon: FiCode,
    title: 'Application Layer',
    items: ['Web & API Interfaces', 'Chatbots & Assistants', 'Feature Stores', 'Model Registry'],
  },
  {
    icon: FiServer,
    title: 'Inference Layer',
    items: ['Model Serving (vLLM)', 'GPU Orchestration', 'Load Balancing', 'Auto-scaling'],
  },
  {
    icon: FiBox,
    title: 'Data Layer',
    items: ['Vector Databases', 'Data Lakes', 'Streaming (Kafka)', 'ETL Pipelines'],
  },
  {
    icon: FiGitBranch,
    title: 'Training Layer',
    items: ['Distributed Training', 'Fine-tuning', 'Experiment Tracking', 'Hyperparameter Tuning'],
  },
  {
    icon: FiActivity,
    title: 'Observability',
    items: ['Model Monitoring', 'Drift Detection', 'Logging & Tracing', 'Alerting'],
  },
  {
    icon: FiCloud,
    title: 'Infrastructure',
    items: ['Kubernetes', 'Docker', 'CI/CD', 'Cloud (AWS/GCP)'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <div className="h-1 w-16 bg-brand-500 rounded mb-6 mx-auto" />
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A layered, production-grade architecture for building and scaling
            AI systems end-to-end.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-7 hover:border-brand-600/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-600/15 border border-brand-600/30 flex items-center justify-center">
                  <layer.icon className="text-xl text-brand-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{layer.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}