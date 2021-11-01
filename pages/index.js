import emailjs from 'emailjs-com'

import ToRightArrowIcon from "../components/icons/ToRightArrowIcon";
import CloseIcon from '../components/icons/CloseIcon'
import { ModalProvider } from "../contexts/ModalContext";
import OpenModal from "../components/util/OpenModal";
import CloseModal from '../components/util/CloseModal'
import Modal from "../components/util/Modal";
//icons

import ReactIcon from '../components/icons/ReactIcon'
import NodeIcon from '../components/icons/NodeIcon'
import FireBaseIcon from '../components/icons/FireBaseIcon'
import DemoIcon from '../components/icons/DemoIcon';
import ClockIcon from '../components/icons/ClockIcon'
import CodeIcon from '../components/icons/CodeIcon';
import Banner from '../components/sections/Banner';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Latest from '../components/sections/Latest';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';
import Header from '../components/layout/Header';
import { ResponsiveNavBar } from '../components/layout/ResponsiveNavBar';
export default function Home() {

  return (
    <div className="bg-gray-50">

      {/**Navigation <Header/>*/}
      
    <ResponsiveNavBar/>
      {/**Main */}
      <Main>
        {/**Banner Section */}
        <Banner />
        {/**About Section */}
        <About />
        {/**Skills Section */}
        <Skills />
        {/**Previous Work section */}
        <Latest />
      </Main>
      
      {/**Footer */}
      <Footer />
    </div>
  )
}
