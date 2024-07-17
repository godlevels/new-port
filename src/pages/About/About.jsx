import photo from "../../assets/pauloo.jpg"
import { FaTwitter, FaGithub, FaLinkedin, } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className='text-[#363636] py-10 px-4 md:px-24 font-mono'>
                {/* Heading */}
                <div className="heading ">
                    <h1 className='lg:text-[4.5rem] md:text-[5rem] sm:text-[3rem] text-[2rem] lg:font-medium md:font-normal sm:font-normal text-center'>A little bit <br/> about me</h1>
                </div>
                {/* Projects*/}
                <div className='flex lg:flex-row md:flex-row sm:flex-col lg:justify-between md:justify-between flex-col py-[4rem]'>
                    <div className='lg:w-[90%] w-full flex lg:justify-start sm:justify-center justify-center lg:items-center h-[400px]'>
                        <img src={photo} loading='lazy' alt='Paulo'  style={{objectFit: "cover", height: "100%"}} className="rounded-lg" />
                    </div>
                    <div className='lg:w-[120%] w-full flex items-center flex-col'>
                    <div className='max-w-[90rem] overflow-hidden' >
                        <p className='text-2xl mt-4 text-justify'>I don't just code,<span className='font-bold'>I craft possibilities...</span> </p>
                        <p className='text-base text-justify'>In 2019, during my fourth year at university,I had the opportunity to undergo my Internship at a software development company.
                        </p>
                        <p className='text-base text-justify'> This played pivotal role for my journey into Frontend engineering and ever since, I have been building applications for a diverse ecosystems, including Blockchain and Fintech ecosystems.</p>
                        <p className='text-base mt-4 text-justify'>
                            I am constantly immersed in learning, I document my insights and share them through articles, aiming to reach a wider audience. Explore my blog <Link href="/" target='_blank' className='text-violet-red-400/80 font-semibold underline'>
                            here
                        </Link></p>
                <p className='text-base mt-4 text-justify'>Apart from my coding pursuits, I am an avid gamer and I have two furry companions - Billy and Shepherd. They remind me to breathe and reconnect with my surrounding.</p>
                </div>
        </div>
        </div>

        <div>
            <h1 className='lg:text-[2rem] md:text-[3rem] sm:text-[2rem] text-[1rem] lg:font-medium md:font-normal sm:font-normal'>I go beyond developing visually appealing interfaces.</h1>
            <span>I even focus more on accessibility, SEO and performance optimization.</span>
            <p>As a visionary developer and creative enthusiast, I fuse innovative thinking with technical expertise to craft exceptional user experiences. I believe that shaping our surroundings is the ultimate human endeavor, and I achieve this by partnering with design-driven teams to build impactful websites and microsites. With a diverse background in product engineering and UI design, I excel at solving complex product challenges while creating visually stunning and user-centric web experiences. Leveraging my extensive experience in leading engineering initiatives and collaborating on product teams, I bring a comprehensive skill set to every project, driving success and excellence.</p>
        </div>
        <div className='flex gap-4 mt-4 '>
                    <Link href="/" target='_blank'>
                    <FaTwitter size={20}  />
                    </Link>
                    <Link href="/" target='_blank'>
                    <FaLinkedin size={20}/>
                    </Link>
                    <Link href="/" target='_blank'>
                    <FaGithub size={20} />
                    </Link>        
        </div>
        </div> 
        </>
    )
}

export default About
