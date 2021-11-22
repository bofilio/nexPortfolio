import React from 'react'

const Skill = ({title,brief,className,children}) => {
    return (
        <div className={`${className} flex flex-shrink-0  flex-col m-2  space-y-2 w-60 bg-white shadow-xl rounded-xl p-4`}>
            <div className="flex justify-center items-center">
            {children}
            </div>
            <h1 className=" self-center text-gray font-bold text-lg">{title}</h1>
            <p className="text-gray flex-grow">{brief}</p>
        </div>
    )
}

export default Skill
