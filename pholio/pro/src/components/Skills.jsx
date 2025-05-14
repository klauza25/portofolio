const Skills = () => {
  return (
    <section id="comp" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-300">
          Mes Compétences
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-8 p-6 rounded-lg bg-gray-50 dark:bg-gray-800/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/70 dark:hover:bg-gray-700/40"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200/60 dark:bg-gray-700/50 rounded-full overflow-hidden transition-colors duration-300">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} dark:${skill.darkColor} transition-colors duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};