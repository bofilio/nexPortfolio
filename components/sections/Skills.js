import React from 'react'
import ReactIcon from '../icons/ReactIcon'
import NodeIcon from '../icons/NodeIcon'
import FireBaseIcon from '../icons/FireBaseIcon'
import MongoDbIcon from '../icons/MongoDbIcon'
import DjangoIcon from '../icons/DjangoIcon'
import NextJsIcon from '../icons/NextJsIcon'
import Skill from '../content/Skill'
const Skills = () => {
  return (
    <section id="Skills" className="space-y-8 pt-28">
      <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
        My skills
      </h1>
      <div className="flex flex-wrap justify-center text-xs overflow-x-auto w-full  px-4 py-6">
        <Skill title="React" brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-blue-300">
         <ReactIcon className=" w-40 h-40 " />
        </Skill>

        <Skill title="NextJS" brief="NextJs is built on top of React. It supports SSR, caching, Bundle Splitting and more, all out of the box."
          className="border-2 border-gray-800">
          <NextJsIcon className=" w-40 h-40 " />
        </Skill>


        <Skill title="NodeJs Backend" brief="I use NodeJs (Express/NastJs and typeORM) to build secured and powerfull Apis."
          className="border-2 border-green-200">
          <NodeIcon className=" w-40 h-40 " />
        </Skill>

        <Skill title="Django Backend" brief="Python-Django is my first backend Framework. it's very powerful." className="border-2 border-green-700">
          <DjangoIcon className="w-40 h-40" />
        </Skill>

        <Skill title="Firebase Backend" brief="As a backend alternative, i am also familiar with google firebase services." className="border-2 border-yellow-400">
          <FireBaseIcon className=" w-40 h-40 " />
        </Skill>

        <Skill title="DBMS" brief="I am familiar with MongoDb, Postgres and Sqllite. However, I can learn any other Dbms when needed." className="border-2 border-green-500">
          <MongoDbIcon className="w-40 h-40" />
        </Skill>

      </div>
    </section>
  )
}

export default Skills
