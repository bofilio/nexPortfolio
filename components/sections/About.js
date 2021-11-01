import React from 'react'
import OpenModal from "../util/OpenModal";
import CloseModal from '../util/CloseModal'
import Modal from "../util/Modal";
import { ModalProvider } from "../../contexts/ModalContext";
import CloseIcon from '../icons/CloseIcon'

const About = () => {
    return (
        <section id="About_me" className="flex lg:flex-row lg:space-y-0 space-y-8 flex-col items-center w-full justify-around pt-28 space-x-8">
          <div className=" lg:flex justify-start hidden lg:w-1/2 max-w-lg flex-shrink-0">
            <img className=" w-11/12 h-auto" src="/img/about2.svg" alt="" />
          </div>
          <div className="flex flex-col items-start space-y-4 flex-grow">
            <h1 className="lg:text-5xl text-3xl self-center font-bold text-dark mb-4">About me</h1>
            <div className="flex flex-col space-y-2 text-gray">
              <p className="text-gray">
                I am an engineer stack developer with over three years of experience.
              </p>
              <p>
                <span className="font-bold">Backend: </span>  I am familiar with NodeJs based frameworks (Express, NestJs)
                and Django framework to build restful/GraphQl endpoints.
                I am also familiar with google-firebase Backend service
              </p>
              <p>
                <span className="font-bold"> Frontend: </span>I am familiar with React and NextJs frameworks. For the styling,
                I am great with CSS and TailWind-CSS (low-level library). However,
                I can work with any top-level CSS framework such as bootstrap or Materialize.
              </p>
              <p>
                <span className="font-bold">DBMS: </span> i am familiar with MongoDB (noSql database) and PostgreSQL(sql-relational database).
                However, i can switch to any other DBMS when i need to.
              </p>
              <p>
                <span className="font-bold">Admin: </span>
                when clients ask for the admin section to manage and view their data,
                I usually go for AdminJs or Django-admin to produce elegant,
                stable, and powerful Admin sections. But I am open to any suggestions
              </p>
            </div>
            <ModalProvider>
              <OpenModal className="bg-primary text-light py-2 px-4 rounded-xl">
                Know More
              </OpenModal>
              <Modal className="fixed top-0 items-center justify-center left-0 w-full h-full z-40">
                <div className=" relative  bg-white lg:max-w-screen-md w-11/12  shadow-lg z-50 max-h-3/4 overflow-y-auto rounded" >
                  <CloseModal className=" z-50 absolute top-8 right-8 ">
                    <CloseIcon className=" text-red-800 w-4 h-4" />
                  </CloseModal>
                  <div className="flex flex-col space-y-4 lg:p-16 p-4">
                    <h1 className="lg:text-5xl text-3xl font-bold text-dark">Know more</h1>
                    <div className="flex flex-col space-y-2 text-gray">
                      <p>
                        I’m an experienced software developer with over three years of experience in the industry,
                        and I have worked on several projects during that time.
                      </p>
                      <h1 className="font-bold">Why Should You Hire Me?</h1>
                      <ul className="list-disc space-y-2 pl-8">
                        <li>Taking ownership;</li>
                        <li>Master degree software background.</li>
                        <li>Research, suggest, and implement new solutions based on industry standards and best practices;</li>
                        <li>Learn new technologies and concepts very fast.</li>
                        <li>Implement pixel perfect responsive screens based on your design specification(XD or Figma);</li>
                        <li>Able to effectively self manage during independent projects, as well as collaborate as part of a productive team;</li>
                        <li>Strong troubleshooting, problem-solving, communication, and analytical skills;</li>
                        <li>Ability to work under high pressure and complete project under tight deadlines; </li>
                        <li>Comfortable multi-tasking and working as part of a global team, as well as working independently;</li>
                        <li>Understanding of CI/ CD, Docker and an appreciation for DevOps techniques </li>
                        <li>Excellent verbal communication skills</li>
                      </ul>
                      <h1 className="font-bold">What technologies and languages am I familiar with?</h1>
                      <ul className="list-disc space-y-2 pl-8">
                        <li> Programming language (Javascript, Python )</li>
                        <li>Backend (Express, nestJs, Django)</li>
                        <li>Frontend (Html, CSS, Javascript, React, NextJs, Material UI, TailWind-CSS, ...)</li>
                        <li>Auth and Social auth(FireBase auth-as-service, PassportJs)</li>
                        <li>Bug tracking (Sentry, Crashlytics)</li>
                        <li>Continuous integration and delivery (CD-CI, GitHub Actions, ...)</li>
                        <li>Unit tests, integration tests, and e2e tests (jest)</li>
                        <li>Payment gateways integration (PayPal, Stripe, ...)</li>
                        <li>3rd party APIs integrations,...</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Modal>
            </ModalProvider>
          </div>
        </section>
    )
}

export default About
