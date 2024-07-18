/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-md" />
      <h3 className="text-xl font-bold mt-4 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        View Project
      </button>
    </motion.div>
  );
};

export default ProjectCard;
