
import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project One', description: 'This is the first project.', image: 'image1.jpg' },
    { id: 2, title: 'Project Two', description: 'This is the second project.', image: 'image2.jpg' },
    { id: 3, title: 'Project Three', description: 'This is the third project.', image: 'image3.jpg' },
    { id: 4, title: 'Project Four', description: 'This is the fourth project.', image: 'image4.jpg' },
    { id: 5, title: 'Project Five', description: 'This is the fifth project.', image: 'image5.jpg' },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <motion.h1
        className='lg:text-[4.5rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal text-center'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
