import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      {/* <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-black/50 opacity-[0.9]"
      >
        <SparklesIcon className="text-black mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] px-[5rem]">
          Tools
        </h1>
      </motion.div> */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-black font-medium mt-[10px] text-center mb-[15px]'
      >
        Let us make your apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Never miss a task, deadline or idea
      </motion.div>
    </div>
  );
}

export default SkillText;
