import React from 'react'
import ReactIcon from '../icons/ReactIcon'
import NodeIcon from '../icons/NodeIcon'
import FireBaseIcon from '../icons/FireBaseIcon'
import MongoDbIcon from '../icons/MongoDbIcon'
import DjangoIcon from '../icons/DjangoIcon'
import NextJsIcon from '../icons/NextJsIcon'
const Skills = () => {
    return (
        <section id="Skills" className="space-y-8 pt-28">
          <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
            My skills
          </h1>
          <div className="flex flex-wrap justify-center text-xs overflow-x-auto w-full  px-4 py-6">

            <div className=" flex flex-shrink-0 flex-col m-2 border-2 border-blue-300 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <ReactIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">React</h1>
              <p className="text-gray flex-grow">I hv two years of experience with React. I use it to build Frontend Web apps and i love it..</p>
            </div>
            <div className=" flex flex-shrink-0 m-2 flex-col border-2 border-gray-800 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <NextJsIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">NextJS</h1>
              <p className="text-gray flex-grow text-justify ">NextJs is built on top of React. It supports SSR, caching, Bundle Splitting and more, all of the box. </p>
            </div>

            <div className=" flex flex-shrink-0  flex-col m-2 border-2 border-green-300 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <NodeIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">NodeJs Backend</h1>
              <p className="text-gray flex-grow">I use NodeJs (Express/NastJs and typeORM) to build secured and powerfull Apis.</p>
            </div>
            <div className=" flex flex-shrink-0  flex-col m-2 border-2 border-green-700 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <DjangoIcon className="w-40 h-40" />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">Django Backend</h1>
              <p className="text-gray flex-grow">Python-Django is my first backend Framework. it's very powerful.</p>
            </div>

            <div className=" flex flex-shrink-0  flex-col m-2 border-2 border-yellow-400 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <FireBaseIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">Firebase Backend</h1>
              <p className="text-gray flex-grow">As a backend alternative, i am also familiar with firebase out of the box features.</p>
            </div>

            <div className=" flex flex-shrink-0  flex-col m-2 border-2 border-green-500 space-y-2 w-60 bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <MongoDbIcon className="w-40 h-40"/>
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">DBMS</h1>
              <p className="text-gray flex-grow">I am familiar with MongoDb, Postgres and SqlLite. however i can learn any other Dbms when needed.</p>
            </div>
          </div>
        </section>
    )
}

export default Skills
