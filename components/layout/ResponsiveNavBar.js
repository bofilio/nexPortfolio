import React, { useState } from 'react';

import MagicIcon from '../icons/MagicIcon';
import MySocialLinks from '../util/MySocialLinks';




const sections = ['Home', 'About me', 'Skills', 'Latest Work'];
const MenuIcon = ({ menuOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-200 ease-linear h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);


export const ResponsiveNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = sections.map(
    section => <a key={section} href={`#${section.replace(" ", "_")}`}
      className="no-underline text-lg text-dark font-semibold hover:text-gray-600" 
      onClick={() => setMenuOpen(!menuOpen)}
    >{section}</a>
    );

  return (
    <nav className="w-full fixed top-0  bg-gradient-to-r from-green-100 to-green-50  ">
      {/**menu on large screen */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center">
          <MagicIcon className="w-8 h-8 mr-2" />
          <a href="#home" className="text-2xl font-bold no-underline text-dark hover:text-gray-600"> Talha hemza</a>
        </div>
        <nav className="hidden md:block space-x-8">
          {navLinks}
        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50">
          <MenuIcon menuOpen={menuOpen} />
        </button>
        <MySocialLinks className=" hidden md:flex"/>
      </div>
      {/**menu on mobile screen */}
      {
        menuOpen &&
        <nav className="p-4 flex flex-col items-center  space-y-3 md:hidden">
          {navLinks}
        </nav>

      }
    </nav>
  );
};




