import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
const MySocialLinks = ({ className }) => {
    return (
        <div className={"md:flex hidden items-center space-x-3 self-start text-xs" + " " + className}>
            <a href="https://github.com/bofilio" className="no-underline">
                <GithubIcon className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/hemza-talha-3527a5224" className="no-underline">
                <LinkedInIcon className=" w-4 h-4 text-blue-800" />
            </a>
            
        </div>
    )
}

export default MySocialLinks
