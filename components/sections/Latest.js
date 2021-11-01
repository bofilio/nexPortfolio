import React from 'react'
import DemoIcon from '../icons/DemoIcon';
import ClockIcon from '../icons/ClockIcon'
import GithubIcon from "../icons/GithubIcon";
const Latest = () => {
    return (
        <section id="Latest" className="space-y-8  pt-28">
          <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
            Latest work
          </h1>
          <div className="flex flex-wrap justify-center overflow-x-auto w-full px-4 py-6">

          <div className=" flex flex-shrink-0 m-2 flex-col text-xs border-2 border-gray-300 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <img className=" w-full h-40 " src="/media/restau.png" />
              </div>
              <h1 className="self-center text-gray font-bold text-lg">My portfolio</h1>
              <p className="text-gray text-center">This is the current portfolio you are in</p>
              <div className=" flex items-center justify-center space-x-2 font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                <span>One week</span>
              </div>
              <div className=" flex items-center justify-center space-x-2 text-gray flex-grow">
                <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
                <span className=" p-1 rounded-lg bg-green-200 text-green-600"> Css</span>
                <span className="p-1 rounded-lg bg-blue-200 text-blue-600 "> TailWind</span>
                <span className="p-1 rounded-lg bg-green-200 text-green-600"> Ci-Cd</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <a className=" flex items-center border-2 border-gray-800 p-2 rounded-md space-x-2 text-gray-800"
                  href="https://github.com/bofilio/restaurant_landing">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a className="flex items-center border-2 border-blue-600  p-2 rounded-md space-x-2 text-blue-600"
                  href="https://bofilio.github.io/restaurant_landing/">
                  <DemoIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className=" flex flex-shrink-0 m-2 flex-col text-xs border-2 border-gray-300 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <img className=" w-full h-40 " src="/media/restau.png" />
              </div>
              <h1 className="self-center text-gray font-bold text-lg">Restaurant Landing</h1>
              <p className="text-gray text-center"> Restaurant Landing page based on a Figma sesign</p>
              <div className=" flex items-center justify-center space-x-2 font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                <span>One week</span>
              </div>
              <div className=" flex items-center justify-center space-x-2 text-gray flex-grow">
                <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
                <span className=" p-1 rounded-lg bg-green-200 text-green-600"> Css</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <a className=" flex items-center border-2 border-gray-800 p-2 rounded-md space-x-2 text-gray-800"
                  href="https://github.com/bofilio/restaurant_landing">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a className="flex items-center border-2 border-blue-600  p-2 rounded-md space-x-2 text-blue-600"
                  href="https://bofilio.github.io/restaurant_landing/">
                  <DemoIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className=" flex flex-shrink-0 m-2 flex-col  border-2 text-xs border-gray-400 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <img className=" w-full h-40 " src="/media/delivery.png" />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">Food Delivery Service</h1>
              <p className="text-gray text-center"> Delivery food service website, was devoloped based on a given Figma sesign</p>
              <div className=" flex items-center justify-center space-x-2  font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                <span>One Month</span>
              </div>
              <div className=" flex items-center justify-center flex-wrap space-x-2 space-y-1 text-gray flex-grow">
                <span className="p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
                <span className="p-1 rounded-lg bg-blue-200 text-blue-600 "> TailWind</span>
                <span className="p-1 rounded-lg bg-red-200 text-red-600 "> Scss</span>
                <span className="p-1 rounded-lg bg-green-200 text-green-600"> Ci-Cd</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <a className=" flex items-center border-2 border-gray-800 p-2 rounded-md space-x-2 text-gray-800"
                  href="https://github.com/bofilio/delivery-next">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a className="flex items-center border-2 border-blue-600  p-2 rounded-md space-x-2 text-blue-600"
                  href="https://delivery-next-596t7clk3-bofilio.vercel.app/">
                  <DemoIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Latest
