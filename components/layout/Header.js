import React from 'react'
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
const Header = () => {
    return (
        <nav className=" w-full fixed top-0  bg-green-50 lg:px-16 px-4">
            <div className="flex items-center justify-between  py-6 px-4 container m-auto">
                <h1 className="text-dark text-2xl font-bold">Talha Hemza.</h1>
                <div className="flex items-center space-x-8 font-semibold text-dark">
                    <a href="#Home">Home</a>
                    <a href="#About">About Me</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Latest">Latest Work</a>
                    {/*<a>Blogs</a>*/}
                </div>
                <div className="flex items-center space-x-3 self-start text-xs">
                    <GithubIcon className="w-4 h-4" />
                    <LinkedInIcon className=" w-4 h-4 text-blue-800" />
                </div>
            </div>
        </nav>
    )
}

export default Header
