import { Link } from 'react-router-dom';
import aboutImg from '../../assets/paul.jpg'
import Skills from '../../components/Skills'
import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';




const Home = () => {
    const projects = [
        { id: 1, title: 'Project One', description: 'This is the first project.', image: 'image1.jpg' },
        { id: 2, title: 'Project Two', description: 'This is the second project.', image: 'image2.jpg' },
        { id: 3, title: 'Project Three', description: 'This is the third project.', image: 'image3.jpg' },
    ];


    return (
        <>
            <div className="w-full h-auto lg:px-24 md:px-16 sm:px-6 px-4 lg:py-10 md:py-10 sm:py-10 py-16 font-mono">
                <div>
                    <h1 className="font-bold lg:w-10 md:w-10 sm:w-6 w-6 lg:text-[8rem] md:text-[8rem] sm:text-[6rem] text-[5rem] lg:leading-[8rem] md:leading-[8rem] sm:leading-[7rem] leading-[5rem]">Ogunsola Paul Ola</h1>

                    <p className='pb-10 pt-5 lg:w-full lg:text-xl md:text-lg sm:text-base text-sm'>I go beyond developing visually appealing interfaces.I even focus more on accessibility, SEO and performance optimization.As a visionary developer and creative enthusiast, I fuse innovative thinking with technical expertise to craft exceptional user experiences...</p>
                </div>
                <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 flex-wrap-reverse">
                    <div className='lg:w-[42%] md:w-[50%] sm:w-full w-full h-auto relative overflow-hidden rounded-lg'>
                        <img src={aboutImg} alt="About Image" className='w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55%] object-cover'/>
                    </div>
                    <div className='lg:w-[52%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center'>
                        <h1 className='lg:text-[4rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal'>Frontend Engineer</h1>
                        <h3>Technical Writer</h3>
                    </div>
                </div>

                <Skills />

                {/* <Projects /> */}
                <div className='lg:mt-[-10rem] md:mt-[-10rem] sm:mt-[-15rem] mt-[-15rem]'>
                    <motion.h2
                    className='lg:text-[4.5rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal text-center mb-16'
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
                        Selected Projects
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <motion.div
                        className="mt-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                    <Link to="/projects" className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-5">
                        See More Projects
                    </Link>
                    </motion.div>
                </div>

                
            </div>
        </>
    )
}

export default Home
 