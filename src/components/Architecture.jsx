const layers = [
  {
    name: 'Client Layer',
    color: 'from-accent-400 to-accent-600',
    items: ['Web App', 'Mobile App', 'API Gateway', 'Chat Interface'],
  },
  {
    name: 'Application Layer',
    color: 'from-accent-500 to-accent-700',
    items: ['Orchestration', 'RAG Pipeline', 'Prompt Engine', 'Business Logic'],
  },
  {
    name: 'Model Layer',
    color: 'from-accent-600 to-accent-800',
    items: ['LLM Inference', 'Fine-tuned Models', 'Embeddings', 'Vector Search'],
  },
  {
    name: 'Data Layer',
    color: 'from-accent-700 to-accent-900',
    items: ['Vector DB', 'Data Lake', 'Feature Store', 'Model Registry'],
  },
]

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            System <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A layered, production-ready architecture designed for scalability, observability,
            and rapid iteration.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, idx) => (
            <div key={layer.name} className="relative">
              <div
                className={`rounded-2xl border border-white/5 bg-gradient-to-r ${layer.color} p-[1px]`}
              >
                <div className="rounded-2xl bg-dark-900/95 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-56 shrink-0">
                      <div className="text-xs font-mono text-accent-400 mb-1">
                        Layer {idx + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {idx < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}