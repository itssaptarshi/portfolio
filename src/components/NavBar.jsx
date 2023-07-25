import { Link } from "react-router-dom";
import { useState } from "react";
import { TiThList } from "react-icons/ti";


const NavBar = () => {
  let Links = [
    { name: "Skill", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 mb-3 pr-5 md:px-10 px-7">
          <Link
            to={"/"}
            className="font-bold text-2xl cursor-pointer flex items-center
        text-gray-800"
          >
            <div className="hover:text-orange-500 text-3xl">
            Saptarshi

            </div>
            
          </Link>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 mr-5 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}>
              <TiThList />
            </ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in mr-5 ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl font-semibold md:my-0 my-7">
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;