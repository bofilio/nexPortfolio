import React from 'react'
import MagicIcon from '../icons/MagicIcon'
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";
import MySocialLinks from '../util/MySocialLinks';
const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-green-100 to-green-50 lg:px-16 px-4">
      <div className="flex flex-col mt-28 p-8 h-64  container m-auto">
        <div className="flex items-center mb-4">
          <MagicIcon className=" w-8 h-8" />
          <h1 className="text-dark text-2xl font-bold ">Talha Hemza.</h1>
        </div>

        <p className="text-gray">It's always awsome to bring good ideas online.</p>
        <div className="flex-grow" />
        <div className="flex items-center text-dark self-center space-x-8 mb-2">
          <span>email me : hemzatalha@gmail.com</span>
          <MySocialLinks className=" flex items-center"/>
        </div>
        <hr className=" border-gray-300 w-3/4 self-center" />
      </div>
    </footer>
  )
}

export default Footer
