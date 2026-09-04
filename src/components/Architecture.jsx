import { motion } from 'framer-motion'

const layers = [
  {
    name: 'Client Layer',
    color: 'from-brand-400 to-brand-500',
    items: ['Web App', 'Mobile App', 'API Gateway', 'Chat Interface'],
  },
  {
    name: 'Application Layer',
    color: 'from-brand-500 to-brand-600',
    items: ['Orchestration', 'Prompt Engine', 'Agent Framework', 'Business Logic'],
  },
  {
    name: 'AI / Model Layer',
    color: 'from-brand-600 to-brand-700',
    items: ['LLM Inference', 'Fine-tuned Models', 'Embeddings', 'RAG Pipeline'],
  },
  {
    name: 'Data Layer',
    color: 'from-brand-700 to-brand-800',
    items: ['Vector DB', 'Feature Store', 'Data Lake', 'Model Registry'],
  },
  {
    name: 'Infrastructure',
    color: 'from-brand-800 to-brand-900',
    items: ['Kubernetes', 'GPU Clusters', 'CI/CD', 'Monitoring'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="section-padding relative bg-dark-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            A layered, production-ready architecture for building and scaling
            AI applications.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className={`rounded-2xl p-6 bg-gradient-to-r ${layer.color} bg-opacity-10 border border-white/10 hover:border-brand-400/50 transition-all`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                  <span className="text-xs font-mono text-white/60">Layer {i + 1}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-brand-500 to-brand-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}