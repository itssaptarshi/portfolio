/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particle from "./Particle";
import prof from '../assets/profile.jpg'

const About = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="projects"
      >
        <div className="flex flex-col sm:flex-row text-white mt-10">
          <div className="mt-10 ">
            <img
              className="p-10 rounded-full"
              src={prof}
              alt="Profile image"
            />
          </div>
          <div className="flex flex-col ">
            <div className="text-5xl font-semibold m-5 sm:text-6xl xl:text-6xl justify-start ">
              I<span className="text-[#2A90A7]">'m</span>{" "}
              <span className="text-[#FC6D6D]">Saptarshi</span>
            </div>
            <div className="text-xl p-5 text-[#ddd] mb-5">
              A Frontend Developer
            </div>
            <div className="text-[#ddd] my-10">
              Hi, I am a developer based in Kolkata, India. I am a skilled Front-End Developer with 1.5 years of expertise in crafting captivating user interfaces. Additionally, I possess hands-on experience in Blockchain development. Passionate about merging technology with creativity, I thrive on delivering seamless web experiences and exploring innovative solutions in the world of decentralized applications.
            </div>
            <div className="flex flex-row justify-center ">
              <div className="p-5">
                <Link to="/skills">
                  <button data-text="Awesome" className="button">
                    <span className="actual-text">
                      &nbsp;&nbsp;Skills&nbsp;
                    </span>
                    <span className="hover-text" aria-hidden="true">
                      &nbsp;&nbsp;Skills&nbsp;
                    </span>
                  </button>
                </Link>
              </div>
              <Link to="/projects">
                <div className="p-5 shadow-white justify-between items-center	">
                  <button data-text="Awesome" className="button">
                    <span className="actual-text">
                      &nbsp;&nbsp;Projects&nbsp;
                    </span>
                    <span className="hover-text" aria-hidden="true">
                      &nbsp;&nbsp;Projects&nbsp;
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Particle/>

      </motion.div>
    </>
  );
};

export default About;
