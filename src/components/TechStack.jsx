import { motion } from 'framer-motion'
import {
  SiPython, SiPytorch, SiTensorflow, SiLangchain, SiOpenai,
  SiDocker, SiKubernetes, SiPostgresql, SiRedis, SiFastapi,
  SiReact, SiTypescript, SiHuggingface, SiApachespark, SiGrafana, SiPrometheus,
} from 'react-icons/si'

const categories = [
  {
    name: 'Languages & Frameworks',
    items: [
      { icon: SiPython, name: 'Python', color: '#3776AB' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
      { icon: SiReact, name: 'React', color: '#61DAFB' },
    ],
  },
  {
    name: 'AI & ML',
    items: [
      { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
      { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
      { icon: SiLangchain, name: 'LangChain', color: '#1C3C3C' },
      { icon: SiHuggingface, name: 'Hugging Face', color: '#FFD21E' },
      { icon: SiOpenai, name: 'OpenAI', color: '#412991' },
    ],
  },
  {
    name: 'Data & Infrastructure',
    items: [
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiApachespark, name: 'Spark', color: '#E25A1C' },
      { icon: SiDocker, name: 'Docker', color: '#2496ED' },
      { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
    ],
  },
  {
    name: 'Observability',
    items: [
      { icon: SiPrometheus, name: 'Prometheus', color: '#E6522C' },
      { icon: SiGrafana, name: 'Grafana', color: '#F46800' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            The tools and technologies I use to build production AI systems.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-dark-300 mb-6 text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col items-center gap-3 glass rounded-2xl px-6 py-5 hover:bg-white/10 hover:border-brand-500/40 transition-all duration-300 min-w-[120px]"
                  >
                    <item.icon
                      className="text-4xl transition-transform group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                    <span className="text-sm text-dark-300 group-hover:text-dark-100 transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}