/* eslint-disable react/no-unescaped-entities */
import { Player } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from "react-type-animation";

import "./styles.css";
import { motion } from "framer-motion";
import Particle from "./Particle";

import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

// import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="check"
      >
        <Particle />

        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="text-3xl  mt-5 mb-3 text-white sm:text-5xl">
                Hi,
              </h1>
            </div>
            <div>
              <h1 className="text-4xl  font-semibold text-white mb-5 sm:text-6xl xl:text-6xl ">
                I'm{" "}
                <motion.span
                  whileHover={{ scale: 1.7 }}
                  className="hover:text-red-700 inline-block"
                >
                  S
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-red-600 inline-block"
                >
                  a
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-red-400 inline-block"
                >
                  p
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-red-200 inline-block"
                >
                  t
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-red-100 inline-block"
                >
                  a
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-purple-200 inline-block"
                >
                  r
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-purple-400 inline-block"
                >
                  s
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.5 }}
                  className="hover:text-purple-600 inline-block"
                >
                  h
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.7 }}
                  className="hover:text-purple-700 inline-block"
                >
                  i
                </motion.span>
              </h1>
            </div>
            <div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Designer",
                  1000,
                  "Freelancer",
                  1000,
                  "Coder",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "4em",
                  display: "inline-block",
                  color: "#fc6d6d",
                }}
                repeat={Infinity}
              />
            </div>
            <div>
              <div className="py-3  flex-row mb-5">
                <Link to="/about">
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">About me</span>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <div className="flex flex-row place-content-center">
                <a
                  href="https://github.com/itssaptarshi"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-[#ddd] m-3 p-3 hover:bg-white rounded-full">
                    <FaGithub size={25} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/saptarshi-maitra/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-[#ddd] m-3 p-3 hover:bg-blue-400 rounded-full">
                    <FaLinkedin size={25} />
                  </div>
                </a>
                <a
                  href="https://t.me/itssaptarshi1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-[#ddd] m-3 p-3  hover:bg-[#0077B5] rounded-full">
                    <FaTelegramPlane size={25} />
                  </div>
                </a>
                <a
                  href="https://discord.com/users/saptarshi1131f"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-[#ddd] m-3 p-3 hover:bg-[#5460E6] rounded-full">
                    <FaDiscord size={25} />
                  </div>
                </a>
                <a
                  href="https://twitter.com/saptarshi1131f"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="bg-[#ddd] m-3 p-3 hover:bg-[#1C99E6] rounded-full">
                    <FaTwitter size={25} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="justify-center items-center">
              
            <div className="flex">
              <Player className="hidden md:block"
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_nsm6jeys.json"
                style={{ width: "600px"  }}
              />
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
