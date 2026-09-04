import { motion } from 'framer-motion'
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai'

const projects = [
  {
    title: 'RAG-Powered Document Assistant',
    description:
      'A retrieval-augmented generation system that answers questions over enterprise documents with cited sources, built with LangChain and vector embeddings.',
    tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Real-Time Fraud Detection',
    description:
      'A streaming ML pipeline that flags fraudulent transactions in under 50ms using gradient-boosted trees and feature stores.',
    tags: ['XGBoost', 'Kafka', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Multimodal Image Captioning',
    description:
      'A vision-language model that generates accurate, context-aware captions for images, fine-tuned on domain-specific datasets.',
    tags: ['PyTorch', 'CLIP', 'Transformers', 'AWS'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'LLM Evaluation Framework',
    description:
      'An open-source toolkit for benchmarking LLM outputs on accuracy, safety, and latency with automated regression testing.',
    tags: ['Python', 'LangSmith', 'Pytest', 'CI/CD'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <div className="h-1 w-16 bg-brand-500 rounded mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col hover:border-brand-600/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                >
                  <AiOutlineGithub className="text-lg" /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-brand-400 transition-colors text-sm"
                >
                  <AiOutlineLink className="text-lg" /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}