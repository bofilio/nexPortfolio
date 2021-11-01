import React from 'react'
import emailjs from 'emailjs-com'
import OpenModal from "../util/OpenModal";
import CloseModal from '../util/CloseModal'
import Modal from "../util/Modal";
import { ModalProvider } from "../../contexts/ModalContext";
import ToRightArrowIcon from "../icons/ToRightArrowIcon";
import CloseIcon from '../icons/CloseIcon'
const Banner = () => {
  const [res_status, setRes_status] = React.useState(null)
  const sendEmail = (e) => {
    e.preventDefault(); 
      emailjs.sendForm(
      'service_n2o4twc',
      'template_fmxqo1q',
      e.target,
      'user_3oGt8iZTCBxGRYHbf8cIC'
    ).then(res => {
      setRes_status(res.status)
    }).catch(err => {
      console.log(err);
      setRes_status(err.status)
    });  
  }
  return (
    <section id="Home" className="flex lg:flex-row lg:space-y-0 space-y-8 flex-col items-center justify-around pt-28 ">
      <div className="flex flex-col items-start space-y-6">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold text-dark">Full Stack Web Developer</h1>
        <p className="text-gray">I am familiar with React, NextJs, TailWind for the Frontend. And Express, NestJs or Firebase for the backend.</p>

        <ModalProvider>
          <OpenModal className="flex">
            <button className="bg-primary text-light py-4 px-6 rounded-l-2xl"> Contact me</button>
            <button className="bg-secondary text-light py-4 px-6 rounded-2xl -ml-4">
              <ToRightArrowIcon className="w-4 h-4" />
            </button>
          </OpenModal>
          <Modal className="fixed top-0 left-0 w-full h-full items-center justify-center z-30">
            <div className=" relative flex  items-center bg-white lg:w-full w-11/12 max-w-lg  shadow-lg z-40 py-12 px-8 overflow-y-auto rounded-2xl">
              <CloseModal className=" z-50 absolute top-8 right-8 ">
                <CloseIcon className=" text-red-800 w-4 h-4" />
              </CloseModal>
                {
                  res_status !=null &&
                  (
                    res_status === 200 ?
                      <p className="absolute -top-0 left-0  w-full text-center p-2 bg-green-100 text-green-600 rounded-t-xl ">success: your message was sent</p> :
                      <p className="absolute -top-0 left-0 w-full text-center p-2 bg-red-100 text-red-600 rounded-t-xl ">error: your message was not sent! try again</p>
                  )

                }
              <form className="flex flex-grow flex-col space-y-6 " onSubmit={(e) => sendEmail(e)}>
                
                <h1 className="">Feel free to contact us</h1>
                <div className="flex flex-col space-y-2">
                  <input type="text" name="to_name" value="Bofil" readOnly hidden />
                  <input className=" border-primary flex-grow focus:outline-none py-2 px-4 border-2 rounded-md" type="text" name="name" placeholder="Enter your name" />
                  <input className="border-primary flex-grow focus:outline-none py-2 px-4 border-2 rounded-md" type="email" name="user_email" placeholder="Enter your email" />
                  <textarea className="border-primary flex-grow focus:outline-none py-2 px-4 border-2 rounded-md" name='message' placeholder="Message" />
                </div>
                <div className="flex items-center justify-end space-x-4">
                  <CloseModal>
                    <button type='button' className="px-4 py-2 bg-red-500 text-light rounded-lg" data-dismiss="modal">Cancel</button>
                  </CloseModal>
                  <button type='submit' className="px-4 py-2 bg-secondary text-light rounded-lg">Send</button>
                </div>
              </form>
            </div>
          </Modal>

        </ModalProvider>

      </div>
      <div className="flex justify-end items-center">
        <img className="lg:w-10/12 w-3/4 h-auto" src="/img/banner.svg" alt="banner" />
      </div>
    </section>
  )
}

export default Banner
