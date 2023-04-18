import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useColorMode from "./useColorMode";
import { motion } from "framer-motion";
import { headerAnim } from "../animation";

function NavBar() {
  const toggleDarkMode = (checked) => {
    // setDarkMode(checked);
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <motion.header
        variants={headerAnim}
        initial="hidden"
        animate="show"
        className="flex lg:hidden items-center justify-between font-Satoshi font-bold text-navTextLight dark:text-navTextDark px-[2.2rem] min-h-[10rem]"
      >
        <div className="logo">
          <NavLogo />
        </div>
        <nav className="text-sm flex gap-16 capitalize">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={colorMode === "light" ? true : false}
            onChange={toggleDarkMode}
            size={30}
            moonColor="#101828"
            sunColor="#F7DF1E"
          />
        </nav>
      </motion.header>

      <motion.header
        variants={headerAnim}
        initial="hidden"
        animate="show"
        className="hidden lg:flex items-center justify-between font-Satoshi font-bold text-navTextLight dark:text-navTextDark px-[10rem] min-h-[10rem]"
      >
        <div className="logo">
          <NavLogo />
        </div>
        <nav className="text-sm flex gap-16 capitalize">
          <Link>about</Link>
          <Link>projects</Link>
          <Link>contact me</Link>
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={colorMode === "light" ? true : false}
            onChange={toggleDarkMode}
            size={30}
            moonColor="#101828"
            sunColor="#F7DF1E"
          />
        </nav>
      </motion.header>
    </>
  );
}

export default NavBar;
