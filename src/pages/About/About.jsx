import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import photo from '../../assets/pauloo.jpg';

const paragraphData = [
  "I'm shy and I don't want to lie...",
  "Let's work together. You'll find out"
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
            <div className="max-w-[90rem] overflow-hidden mt-20">
              {paragraphData.map((text, index) => (
                <motion.p key={index} className="text-base text-justify" variants={textVariant}>
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
