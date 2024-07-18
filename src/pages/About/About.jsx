
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import photo from '../../assets/pauloo.jpg';

const paragraphData = [
  "I don't just code, I craft possibilities...",
  "In 2019, during my fourth year at university, I had the opportunity to undergo my Internship at a software development company.",
  "This played a pivotal role in my journey into Frontend engineering and ever since, I have been building applications for diverse ecosystems, including Blockchain and Fintech ecosystems.",
  "I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore my blog here.",
  "Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surroundings."
];

const additionalParagraphs = [
  "As a visionary developer and creative enthusiast, I fuse innovative thinking with technical expertise to craft exceptional user experiences.",
  "I believe that shaping our surroundings is the ultimate human endeavor, and I achieve this by partnering with design-driven teams to build impactful websites and micro-sites.",
  "With a diverse background in product engineering and UI design, I excel at solving complex product challenges while creating visually stunning and user-centric web experiences.",
  "Leveraging my extensive experience in leading engineering initiatives and collaborating on product teams, I bring a comprehensive skill set to every project, driving success and excellence."
];

const textVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [secondRef, secondInView] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <div className="text-[#363636] py-10 px-4 md:px-24 font-mono">
        {/* Heading */}
        <div className="heading text-center">
          <motion.h1
            className="lg:text-[4.5rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariant}
            ref={ref}
          >
            A little bit <br /> about me
          </motion.h1>
        </div>
        {/* Projects */}
        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between flex-col py-[4rem]">
          <motion.div
            className="lg:w-[90%] w-full flex lg:justify-start sm:justify-center justify-center lg:items-center h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={photo}
              loading="lazy"
              alt="Paulo"
              style={{ objectFit: 'cover', height: '100%' }}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="lg:w-[120%] w-full flex items-center flex-col"
            initial="hidden"
            animate={inView ? 'visible' : 'visible'}
            variants={textVariant}
          >
            <div className="max-w-[90rem] overflow-hidden">
              {paragraphData.map((text, index) => (
                <motion.p key={index} className="text-base mt-4 text-justify" variants={textVariant}>
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="w-[75%]" ref={secondRef}>
          <motion.h1
            className="lg:text-[2rem] md:text-[3rem] sm:text-[2rem] text-[1rem] lg:font-medium md:font-normal sm:font-normal"
            initial="hidden"
            animate={secondInView ? 'visible' : 'hidden'}
            variants={textVariant}
          >
            I go beyond developing visually appealing interfaces.
          </motion.h1>
          <motion.span
            className="lg:text-xl md:text-lg sm:text-base text-sm"
            initial="hidden"
            animate={secondInView ? 'visible' : 'hidden'}
            variants={textVariant}
          >
            I even focus more on accessibility, SEO and performance optimization.
          </motion.span>
          {additionalParagraphs.map((paragraph, index) => (
            <motion.p key={index} className="text-base mt-4 text-justify" initial="hidden" animate={secondInView ? 'visible' : 'hidden'} variants={textVariant}>
              {paragraph}
            </motion.p>
          ))}
        </div>
        <div className="flex gap-4 mt-4">
          <Link to="/" target="_blank">
            <FaTwitter size={20} />
          </Link>
          <Link to="/" target="_blank">
            <FaLinkedin size={20} />
          </Link>
          <Link to="/" target="_blank">
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
