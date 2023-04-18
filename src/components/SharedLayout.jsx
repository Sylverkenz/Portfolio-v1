import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function SharedLayout({ children }) {
  return (
    <motion.main
      // variants={pageAnimation}
      // initial="hidden"
      // animate="show"
      className=" bg-primaryLight dark:bg-primaryDark text-bodyTextDark  duration-50"
    >
      <NavBar />
      <Outlet />
      <Footer />
    </motion.main>
  );
}

export default SharedLayout;
