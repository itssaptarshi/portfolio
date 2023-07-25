/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import skills from "./SklillList";
import { SiTypescript,SiGithub } from "react-icons/si";
import { DiWordpress,DiPython } from "react-icons/di";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-100 "
      >
        <div className="flex mt-10 text-white justify-center  ">
          <div className="text-5xl font-semibold m-5 pb-10 sm:text-6xl xl:text-6xl ">
            My Skills
          </div>
        </div>

        <div>
          <div className="flex flex-row ">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 rounded-lg ">
              {skills.map((skill) => (
                <>
                  <div className="flex items-center justify-center rounded-lg  flex-col m-4 px-8 py-4 bg-gray-700 border-2 border-gray-300">
                    <Player
                      autoplay
                      loop
                      src={skill.src}
                      style={{ height: "150px", width: "100px", scale: "100%" }}
                    />
                    <div className="text-white">{skill.name}</div>
                  </div>
                </>
              ))}
              <div className="flex items-center justify-center rounded-lg  flex-col m-4 px-8 py-4 bg-gray-700 border-2 border-gray-300">
                <SiTypescript
                  style={{ height: "150px", width: "100px", scale: "80%", color:'blue' }}
                />
                <div className="text-white">TypeScript</div>
              </div>
              <div className="flex items-center justify-center rounded-lg  flex-col m-4 px-8 py-4 bg-gray-700 border-2 border-gray-300">
                <SiGithub
                  style={{ height: "150px", width: "100px", scale: "80%", color:'white' }}
                />
                <div className="text-white">Github</div>
              </div>
              <div className="flex items-center justify-center rounded-lg  flex-col m-4 px-8 py-4 bg-gray-700 border-2 border-gray-300">
                <DiWordpress
                  style={{ height: "150px", width: "100px", scale: "100%", color:'white' }}
                />
                <div className="text-white">Wordpress</div>
              </div>
              <div className="flex items-center justify-center rounded-lg  flex-col m-4 px-8 py-4 bg-gray-700 border-2 border-gray-300">
                <DiPython
                  style={{ height: "150px", width: "100px", scale: "80%", color:'blue' }}
                />
                <div className="text-white">Python</div>
              </div>
             
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
