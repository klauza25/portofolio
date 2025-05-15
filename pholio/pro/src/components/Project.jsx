import { motion } from 'framer-motion';
import md from "../assets/img/md.png";
import yeko from "../assets/img/yekolab.png";
import forkid from "../assets/img/forkids.png";
import bright from "../assets/img/brightline.png";
const Projects = () => {
  const projects = [
    {
      title: "MDTECHCONGO",
      description: "MDTECHCONGO",
      image: md ,
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript"],
      github: "https://github.com/votre-username/immoplus",
      demo: "https://immoplus-demo.com"
    },
    {
      title: "brightline",
      description: "brightline Service",
      image: bright,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/votre-username/portfolio",
      demo: "https://votre-portfolio.com"
    },
    {
      title: "Yekolab forkids ",
      description: "Plateforme d'apprentissage robotique ",
      image: forkid,
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/votre-username/task-manager",
      demo: "https://task-manager-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20  bg-white dark:bg-transparent transition-colors duration-initial ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12   transition-colors duration-300">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ }}
              whileInView={{  }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="  dark:bg-transparent   rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-400 "
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 uppercase  transition-colors duration-300">
                  {project.title}
                </h3>
                <p className=" mb-4 transition-colors duration-300 lowercase">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm transition-all duration-300 hover:bg-blue-100/70 dark:hover:bg-blue-900/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;