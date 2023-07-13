import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";
import { ImCross } from "react-icons/im";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const Lists = [
    {
      id: "c1",
      name: "Paysum",
      smallDetails:
        "Make your payments easier with PaySum - Transfer remittance now, 0 Fees 0 delay.",
      details:
        "Payum is a project that aims to change the situation of remmitance in the cureent finantial world. Some more details about paysum, and maybe even more details, if i can figure out some.",
    },
    {
      id: "c2",
      name: "Paysum",
      smallDetails:
        "Make your payments easier with PaySum - Transfer remittance now, 0 Fees 0 delay.",
      details:
        "Payum is a project that aims to change the situation of remmitance in the cureent finantial world. Some more details about paysum, and maybe even more details, if i can figure out some.",
    },
    {
      id: "c3",
      name: "Paysum",
      smallDetails:
        " Make your payments easier with PaySum - Transfer remittance now, 0 Fees 0 delay",
      details:
        "Payum is a project that aims to change the situation of remmitance in the cureent finantial world. Some more details about paysum, and maybe even more details, if i can figure out some.",
    },
    {
      id: "c4",
      name: "Paysum",
      smallDetails:
        "Make your payments easier with PaySum - Transfer remittance now, 0 Fees 0 delay.",
      details:
        "Payum is a project that aims to change the situation of remmitance in the cureent finantial world. Some more details about paysum, and maybe even more details, if i can figure out some.",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="projects text-white"
      >
        <div className="flex flex-col  ">
          <div className="text-5xl font-semibold sm:text-6xl xl:text-6xl ">
            My Projects
          </div>

          <div className="main mt-20 sm:mt-20 ">
            {Lists.map((list) => (
              <>
                {/*  h-100 w-100 */}
                <div
                  className="card h-100 w-100 md:h-200 md:w-200 rounded-lg pt-10 "
                  id={list.id}
                  onClick={() => setShowModal(true)}
                >
                  <div className="text-2xl font-semibold">
                  {list.name}

                  </div>
                  <div className="mt-6">{list.smallDetails}</div>
                </div>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className=" rounded-lg shadow-lg relative flex flex-col w-full outline-none bg-gray-700 bg-opacity-20 focus:outline-none backdrop-blur-lg border-slate-700 border-2">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-5xl text-white font-semibold">
                              {list.name}
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-2xl block outline-none focus:outline-none text-white">
                                <ImCross style={{ color: "#ff0000" }} />
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-400 text-lg leading-relaxed">
                              {list.details}
                            </p>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-between p-6 border-t border-solid rounded-b">
                            <a
                              rel="noopener noreferrer"
                              href="https://github.com/itssaptarshi"
                              target="_blank"
                            >
                              <button className="learn-more" type="button">
                                <span className="circle" aria-hidden="true">
                                  <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Github</span>
                              </button>
                            </a>
                            <a
                              rel="noopener noreferrer"
                              href="https://www.paysum.org/"
                              target="_blank"
                            >
                              {/* <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                              >
                                Visit Live
                              </button> */}
                               <button data-text="Awesome" className="button">
                    <span className="actual-text">
                      &nbsp;&nbsp;See&nbsp;Live&nbsp;
                    </span>
                    <span className="hover-text" aria-hidden="true">
                      &nbsp;&nbsp;See&nbsp;Live&nbsp;
                    </span>
                  </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
