import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Frontend",
      company: "Tech Solutions",
      date: "2022 - Présent",
      description: "Développement d'applications web avec React et TypeScript",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      title: "Stagiaire en Développement",
      company: "StartUp Innovante",
      date: "2021 - 2022",
      description: "Participation au développement d'une plateforme e-commerce",
      technologies: ["JavaScript", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
          Expérience Professionnelle
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-gray-50/30 dark:bg-gray-800/40 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-700/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</span>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;