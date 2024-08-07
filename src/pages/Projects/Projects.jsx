
import ProjectCard from '../../components/ProjectCard';
import project_img from "../../assets/bicass.png"
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Bicass App', description: 'Biccas is a productivity-enhancing application designed to help users manage their tasks and organize their work efficiently. Built with a sleek and modern interface, Biccas leverages the power of the Taskio Dashboard to offer the latest features for managing work every day.', image: project_img, url: 'https://bicass-app.vercel.app/' },
    { id: 2, title: 'Project Two', description: 'This is the second project.', image: '../../assets/bicass.png', url: 'https://bicass-app.vercel.app/' },
    { id: 3, title: 'Project Three', description: 'This is the third project.', image: '../../assets/bicass.png', url: 'https://bicass-app.vercel.app/' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 font-mono">
      <motion.h1 
        className='lg:text-[4.5rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal text-center'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Selected Projects
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
