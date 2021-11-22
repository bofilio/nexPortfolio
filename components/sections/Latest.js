import React from 'react'
import DemoIcon from '../icons/DemoIcon';
import ClockIcon from '../icons/ClockIcon'
import GithubIcon from "../icons/GithubIcon";
import Sample from '../content/Sample';
const Latest = () => {
  return (
    <section id="Latest_Work" className="space-y-8  pt-28">
      <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
        Latest work
      </h1>
      <div className="flex flex-wrap justify-center overflow-x-auto w-full px-4 py-6">
        <Sample className="border-2 border-gray-500" title="Food Delivery Service"
          brief="Delivery food service website based on given figma design with 3 breakpoints" duration="20 days"
          img="/media/delivery.png" github_link="https://github.com/bofilio/delivery-next"
          demo_link="https://delivery-next.vercel.app/">
           <span className="p-1 rounded-lg bg-gray-200 text-gray-600 m-1"> NextJs</span>
            <span className="p-1 rounded-lg bg-blue-200 text-blue-600 m-1"> TailWind</span>
            <span className="p-1 rounded-lg bg-red-200 text-red-600 m-1"> Scss</span>
            <span className="p-1 rounded-lg bg-green-200 text-green-600 m-1"> Ci-Cd</span>
        </Sample>

        <Sample className="border-2 border-gray-400" title="My portfolio" duration="1weak"
          brief="This is the current portfolio you are in" img="/img/banner.svg"
          github_link="https://github.com/bofilio/nexPortfolio"
          demo_link="#">
          <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
          <span className=" p-1 rounded-lg bg-green-200 text-green-600"> Css</span>
          <span className="p-1 rounded-lg bg-blue-200 text-blue-600 "> TailWind</span>
          <span className="p-1 rounded-lg bg-green-200 text-green-600"> Ci-Cd</span>
        </Sample>

        <Sample className="border-2 border-gray-400" title="Organic" duration="5 days"
          brief="Organic food landing page" img="/media/organic.png"
          github_link="https://github.com/bofilio/organic"
          demo_link="https://organic-eta.vercel.app/">
          <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
          <span className="p-1 rounded-lg bg-blue-200 text-blue-600 "> TailWind</span>
          <span className="p-1 rounded-lg bg-green-200 text-green-600"> Ci-Cd</span>
        </Sample>

        <Sample className="border-2 border-gray-300" title="Restaurant Landing" duration="3 days"
          brief="Restaurant Landing page based on a Figma design" img="/media/restau.png"
          github_link="https://github.com/bofilio/restaurant_landing"
          demo_link="https://bofilio.github.io/restaurant_landing/">
          <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 "> NextJs</span>
          <span className=" p-1 rounded-lg bg-green-200 text-green-600"> Css</span>
        </Sample>

      </div>
    </section>
  )
}

export default Latest
