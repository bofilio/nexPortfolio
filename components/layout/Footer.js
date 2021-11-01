import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-50 lg:px-16 px-4">
        <div className="flex flex-col mt-28 p-8 h-64  container m-auto">
          <h1 className="text-dark text-2xl font-bold mb-4">Talha Hemza.</h1>
          <p className="text-gray">It's always awsome to bring good ideas online.</p>
          <div className="flex-grow" />
          <div className="flex items-center text-dark self-center space-x-8">
            <span>email me : hemzatalha@gmail.com</span>
          </div>
          <hr className=" border-gray-300 w-3/4 self-center" />
        </div>
      </footer>
    )
}

export default Footer
