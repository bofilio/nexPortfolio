import emailjs from 'emailjs-com'
import LinkedInIcon from "../components/icons/LinkedInIcon";
import GithubIcon from "../components/icons/GithubIcon";
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
import Badge from '../components/util/Badge';
export default function Home() {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm(
      'service_n2o4twc',
      'template_fmxqo1q',
      e.target,
      'user_3oGt8iZTCBxGRYHbf8cIC'
    ).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <div>

      {/**Navigation */}
      <nav className="bg-purple-50 lg:px-16 px-4">
        <div className="flex items-center justify-between  py-6 px-4 container m-auto">
          <h1 className="text-dark text-2xl font-bold">Talha Hemza.</h1>
          <div className="flex items-center space-x-8 font-semibold text-dark">
            <span>Home</span>
            <span>About Me</span>
            <span>Skills</span>
            <span>Privious Work</span>
            <span>Blogs</span>
          </div>
          <div className="flex items-center space-x-3 self-start text-xs">
            <GithubIcon className="w-4 h-4" />
            <LinkedInIcon className=" w-4 h-4 text-blue-800" />
          </div>
        </div>
      </nav>

      {/**Main */}
      <main className="container m-auto lg:px-16 px-4">
        {/**Banner Section */}
        <section className="flex lg:flex-row lg:space-y-0 space-y-8 flex-col items-center justify-around mt-28 ">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold text-dark">Full Stack Web Developer</h1>
            <p className="text-gray">i mainly use React, NextJs and TailWind for the Frontend. Express, NestJs or Firebase for the backend.</p>

            <ModalProvider>
              <OpenModal className="flex">
                <button className="bg-primary text-light py-4 px-6 rounded-l-2xl"> Contact me</button>
                <button className="bg-secondary text-light py-4 px-6 rounded-2xl -ml-4">
                  <ToRightArrowIcon className="w-4 h-4" />
                </button>
              </OpenModal>
              <Modal className="fixed top-0 left-0 w-full h-full items-center justify-center z-40">
                <div className=" relative flex  items-center bg-white lg:w-full w-11/12 max-w-lg  shadow-lg z-50 p-8 overflow-y-auto rounded-2xl">
                  <CloseModal className=" z-50 absolute top-8 right-8 ">
                    <CloseIcon className=" text-gray-800 w-4 h-4" />
                  </CloseModal>
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
                        <button type='button' className="px-4 py-2 bg-error text-light rounded-lg" data-dismiss="modal">Cancel</button>
                      </CloseModal>
                      <button type='submit' className="px-4 py-2 bg-primary text-light rounded-lg">Send</button>
                    </div>
                  </form>
                </div>
              </Modal>

            </ModalProvider>

          </div>
          <div className="flex justify-center items-center">
            <img className="lg:w-full w-3/4 h-auto" src="/media/banner.png" alt="" />
          </div>
        </section>
        {/**About Section */}
        <section className="flex lg:flex-row lg:space-y-0 space-y-8 flex-col items-center w-full justify-around mt-28 space-x-8">
          <div className="w-96 flex-shrink-0">
            <img className=" w-full h-auto" src="/media/about.png" alt="" />
          </div>
          <div className="flex flex-col items-start space-y-4 flex-grow">
            <h1 className="lg:text-5xl text-3xl font-bold text-dark">About me</h1>
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
                <span className="font-bold"> Frontend</span>I am familiar with React and NextJs frameworks. For the styling,
                I can say that I am great with pure-CSS and TailWind-CSS (low-level library), However,
                I can work with any other top-level CSS framework such as bootstrap or Materialize.
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
                    <CloseIcon className=" text-gray-800 w-4 h-4" />
                  </CloseModal>
                  <div className="flex flex-col space-y-4 p-4">
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
        {/**Skills Section */}
        <section className="space-y-8 mt-28">
          <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
            My skills
          </h1>
          <div className="flex flex-nowrap lg:justify-center justify-start overflow-x-auto w-full space-x-4 px-4 py-6">

            <div className=" flex flex-shrink-0  flex-col border-2 border-blue-300 space-y-2 w-60 h-80 overflow-y-auto bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <ReactIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">React</h1>
              <p className="text-gray flex-grow">I use React  UI framworks for both  Web and Mobile Apps.</p>
            </div>

            <div className=" flex flex-shrink-0  flex-col  border-2 border-green-400 space-y-2 w-60 h-80 overflow-y-auto bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <NodeIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">NodeJs Backend</h1>
              <p className="text-gray flex-grow">I use NodeJs with Express or NastJs to get secured and powerfull Apis.</p>
            </div>

            <div className=" flex flex-shrink-0  flex-col  border-2 border-green-400 space-y-2 w-60 h-80 overflow-y-auto bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <NodeIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">NodeJs Backend</h1>
              <p className="text-gray flex-grow">I use NodeJs with Express or NastJs to get secured and powerfull Apis.</p>
            </div>

            <div className=" flex flex-shrink-0  flex-col  border-2 border-green-400 space-y-2 w-60 h-80 overflow-y-auto bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <NodeIcon className=" w-40 h-40 " />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">NodeJs Backend</h1>
              <p className="text-gray flex-grow">I use NodeJs with Express or NastJs to get secured and powerfull Apis.</p>
            </div>
          </div>
        </section>

        {/**Previous Work section */}
        <section className="space-y-8  mt-28">
          <h1 className="text-center lg:text-5xl text-3xl font-bold text-dark">
            Latest work
          </h1>
          <div className="flex flex-nowrap lg:justify-center justify-start overflow-x-auto w-full space-x-4 px-4 py-6">

            <div className=" flex flex-shrink-0  flex-col border-2 border-gray-300 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <img className=" w-40 h-40 " src="/media/restau.png" />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">Restaurant Landing</h1>
              <div className=" flex items-center justify-center space-x-2 text-xs font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                <span>One week</span>
              </div>
              <div className=" flex items-center justify-center space-x-2 text-gray flex-grow">
                <span className=" p-1 rounded-lg  bg-gray-200 text-gray-600 text-xs"> NextJs</span>
                <span className=" p-1 rounded-lg bg-green-200 text-green-600 text-xs"> Css</span>
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

            <div className=" flex flex-shrink-0  flex-col  border-2 border-gray-400 space-y-2 w-60  bg-white shadow-xl rounded-xl p-4">
              <div className="flex justify-center items-center">
                <img className=" w-40 h-40 " src="/media/delivery.png" />
              </div>
              <h1 className=" self-center text-gray font-bold text-lg">Food Delivery Service</h1>
              <div className=" flex items-center justify-center space-x-2 text-xs font-bold text-gray ">
                <ClockIcon className="w-5 h-5" />
                <span>One Month</span>
              </div>
              <div className=" flex items-center justify-center flex-wrap space-x-2 space-y-1 text-gray flex-grow">
                <span className="p-1 rounded-lg  bg-gray-200 text-gray-600 text-xs"> NextJs</span>
                <span className="p-1 rounded-lg bg-blue-200 text-blue-600 text-xs"> TailWind</span>
                <span className="p-1 rounded-lg bg-red-200 text-red-600 text-xs"> Scss</span>
                <span className="p-1 rounded-lg bg-green-200 text-green-600 text-xs"> Ci-Cd</span>
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
      </main>

      {/**Footer */}
      <footer className="bg-purple-50 lg:px-16 px-4">
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


    </div>
  )
}
