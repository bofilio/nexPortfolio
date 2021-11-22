import React from 'react'
import ClockIcon from '../icons/ClockIcon'
import DemoIcon from '../icons/DemoIcon'
import GithubIcon from '../icons/GithubIcon'

const Sample = ({ title, brief, img, duration, demo_link, github_link, children,className }) => {
    return (
        <div className={`${className} flex flex-shrink-0 m-2 flex-col text-xs  space-y-2 w-60  bg-white shadow-xl rounded-xl p-4 `}>
            <div className="flex justify-center items-center">
                <img className=" w-full h-40 " src={img} />
            </div>
            <h1 className="self-center text-gray font-bold text-lg">{title}</h1>
            <p className="text-gray text-center"> {brief}</p>
            <div className=" flex items-center justify-center space-x-2 font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                
                <span>{duration}</span>
            </div>
            <div className=" flex items-center justify-center space-x-2 text-gray flex-grow">
                {children}
            </div>

            <div className="flex items-center justify-center space-x-2">
                <a className=" flex items-center border-2 border-gray-800 p-2 rounded-md space-x-2 hover:bg-gray-800 hover:text-gray-100 text-gray-800"
                    href={github_link}>
                    <GithubIcon className="w-4 h-4" />
                </a>
                <a className="flex items-center border-2 p-2 rounded-md space-x-2 border-blue-500 hover:bg-blue-500 hover:text-gray-100 text-blue-600 "
                    href={demo_link}>
                    <DemoIcon className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}

export default Sample
