import aboutImg from '../../assets/paul.jpg'
import Skills from '../../components/Skills'
import Projects from '../Projects/Projects'




const Home = () => {
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

                <Projects />
            </div>
        </>
    )
}

export default Home
 