import { motion } from "framer-motion";
import "./styles.css";

const Projects = () => {
  const Lists = [
    {
      id: "c1",
      name: "Peepol Human Club",

      details:
        "The alien race that protected humanity for centuries from the shadows have now made themselves known. The fate of our entire world is going to change - and you can be a part of it! ",
      liveLink: "https://peepolshowcase.netlify.app",
    },
    {
      id: "c2",
      name: "Paysum",

      details:
        "Payum was a project to change the situation of remmitance in the cureent finantial world.The dream was to make a system where you can send money anywhere in the world, with any currency without delay.",
      liveLink: "https://www.paysum.org/",
    },
    {
      id: "c3",
      name: "Api Showcase",

      details:
        "An app with 5 seperate mini-apps. Here you can check weather, get recipies, know about Harry Potter, take part in a trivia game, or you can look at cats as long as you want.",
      liveLink: "https://apishowcase0121.netlify.app",
    },
    {
      id: "c4",
      name: "Anihilation NFT Marketplace",

      details:
        "A NFT Marketplace tied to the Annihilation mobile game, where users can buy and sell the nfts they own in two different chains with two different currencies.",
      liveLink: "https://annihilationmarketplace.netlify.app",
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
        <div className="flex justify-center">
          <div className="text-5xl font-semibold sm:text-6xl xl:text-6xl ">
            My Projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between mt-10">
          {Lists.map((list, id) => (
            <div key={id}>
              <div className="card  m-5">
                <div className="content">
                  <p className="heading">{list.name}</p>
                  <p className="para">{list.details}</p>
                  <div className="flex">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={list.liveLink}
                      className="mx-5"
                    >
                      <button className="btn">Check Live</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/itssaptarshi?tab=repositories"
        >
          <button className="btn mb-20 mt-5">
            Please check my github for other projects
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default Projects;
