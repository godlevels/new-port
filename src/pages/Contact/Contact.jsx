import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
const Contact = () => {

  return (
    <div className='py-10 md:p-24 text-[#363636] px-4 font-mono' id='contact'>
      <div className="heading">
        <h1 className='text-center text-[60px] sm:text-9xl leading-[4rem]'>Let us start <br /> a project</h1>
      </div>
      <div className='mt-16 sm:flex w-full justify-around'>
        <div className='max-w-[600px]'>
          <h2 className='text-base mt-2 mb-4 text-justify'>
            I am open to <span className='font-bold'>building projects</span> and <span className='font-bold'>Technical Writing</span> opportunities. You can also pitch me your Open-Source Projects.
          </h2>
          <span className='text-base mt-4 text-justify flex items-center justify-center mt-8'>What I cannot do, cannot be done!!!</span>
        </div>
      </div>

      <div className="my-28 flex flex-col gap-y-10">
          <div>
            <Link className="flex justify-between">
              <h2 className="lg:text-[3rem] md:text-[2rem] sm:text-[1rem] text-[1rem]">Twitter</h2>
              <ArrowUpRight className="lg:mt-[2.5rem] md:mt-[1.3rem]" />
            </Link>
            <div className="h-[0.1rem] bg-gray-400 w-full"></div>
          </div>

          <div>
            <Link className="flex justify-between">
              <h2 className="lg:text-[3rem] md:text-[2rem] sm:text-[1rem] text-[1rem]">WhatsApp</h2>
              <ArrowUpRight className="lg:mt-[2.5rem] md:mt-[1.3rem]" />
            </Link>
            <div className="h-[0.1rem] bg-gray-400 w-full"></div>
          </div>
      </div>
    </div>
  );
};

export default Contact;
