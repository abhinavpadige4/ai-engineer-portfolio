import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Hugging Face'],
  },
  {
    title: 'LLMs & Generative AI',
    skills: ['GPT-4', 'LangChain', 'RAG', 'Fine-tuning', 'Prompt Engineering'],
  },
  {
    title: 'MLOps & Deployment',
    skills: ['Docker', 'Kubernetes', 'MLflow', 'AWS SageMaker', 'CI/CD'],
  },
  {
    title: 'Data Engineering',
    skills: ['Python', 'SQL', 'Spark', 'Airflow', 'Pandas'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Skills &amp; Expertise
        </motion.h2>
        <div className="h-1 w-16 bg-brand-500 rounded mb-12" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full bg-brand-600/15 text-brand-300 text-sm border border-brand-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}