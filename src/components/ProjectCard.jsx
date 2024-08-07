/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      <Link to={project.url} target={'_blank'}>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-900">
          View Project
        </button>
      </Link>
      <a href="" ></a>
    </motion.div>
  );
};

export default ProjectCard;
