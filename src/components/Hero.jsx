import { Link } from "react-router-dom";
import Light from "./Light";
import { motion } from "framer-motion";
import { parent } from "../animation";
function Hero() {
  const fromBottom = {
    hidden: { y: 150, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut'
      },
    },
  };
  const fromLeft = {
    hidden: { x: 150, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const fromTop = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className="grid place-items-center  min-h-screen font-Satoshi px-[2.2rem]">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="show"
        className="textcontent  text-center"
      >
        <Light text={"chika sylvester"} />

        <div className="overflow-hidden ">
          <motion.h1
            variants={fromLeft}
            className="text-[3.2rem] sm:text-[4rem] lg:text-4xl heading text-black dark:text-white duration-500"
          >
            <span className="herogradient">coding</span> your vision into
            reality
          </motion.h1>
        </div>
        <motion.p
          variants={fromBottom}
          className="text-navTextLight dark:text-navTextDark text-[1.5rem] sm:text-[2rem] lg:text-xl max-w-[90rem] font-medium mx-auto duration-500"
        >
          Hello there, my name is Chika Sylvester and I am a{" "}
          <span className="herogradient font-bold text-[1.5rem] sm:text-[2rem] lg:text-xxl">
            Frontend Developer
          </span>{" "}
          with a passion for creating engaging user experience through codes.
        </motion.p>
        <motion.button variants={fromTop} className="btn">
          <a href='#projects'>view projects</a>
          <div className="skew"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
