/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particle from "./Particle";

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
              src="https://scontent.fccu26-1.fna.fbcdn.net/v/t39.30808-6/283110735_3141354816102047_6382796195322754405_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=E3UO4ylwpI8AX-5qvYl&_nc_ht=scontent.fccu26-1.fna&oh=00_AfAUnDmgEIFNAQs8fvWYzhlyvB82-yOgSBlCxlR0dBLuCA&oe=64A1F965"
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
              I am a developer based in Kolkata, India. I have 1.5 years
              experience in Blockchain and Front-end Development. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat incidunt nisi ullam quos modi ut quisquam sit, sint quaerat libero corporis, ea ex minus nam, eaque labore asperiores recusandae?
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
