import React from "react";
import { CgMenuRight } from "react-icons/cg";
import NavLogo from "./NavLogo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useColorMode from "./useColorMode";
import { motion } from "framer-motion";
import { headerAnim } from "../animation";

function NavBar() {
  const toggleDarkMode = (checked) => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <motion.header
        variants={headerAnim}
        initial="hidden"
        animate="show"
        className=" header"
      >
        <div className="logo flex items-center gap-4 font-medium">
          <NavLogo />
          <h2 className="text-navTextLight dark:text-navTextDark uppercase tracking-[3px]  sm:text-[1.4rem] overflow-hidden px-2 border-l-2  dark:border-[#dfdfdf] border-[#131320] ">
            <motion.span className="namespan block">
              chika sylvester
            </motion.span>
          </h2>
        </div>
        <nav className="text-[2rem] lg:text-[4rem]  flex gap-6 items-center">
          <DarkModeSwitch
            checked={colorMode === "light" ? true : false}
            onChange={toggleDarkMode}
            size={30}
            moonColor="#101828"
            sunColor="#F7DF1E"
          />
          <CgMenuRight />
        </nav>
      </motion.header>
    </>
  );
}

export default NavBar;
