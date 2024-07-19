import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className="text-[#363636] px-4 md:px-24 font-mono">
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
    )
}

export default Footer
