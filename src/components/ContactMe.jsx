import Light from "./Light";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { childrenVar1 } from "../animation";

function ContactMe() {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        delay: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };
  return (
    <motion.section
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-250px" }}
      className="section"
    >
      <Light text={"contact me"} />
      <motion.div
        variants={childrenVar1}
        className="outerbox p-1 lg:p-1.5 rounded-[16px] lg:rounded-[60px] mt-8"
      >
        <div className=" bg-primaryLight dark:bg-primaryDark py-[2rem] lg:px-[12rem] lg:py-[5rem] rounded-[13.75px] lg:rounded-[57px] ">
          <motion.p
            variants={childrenVar1}
            className=" font-CDisplay text-[1.8rem] lg:text-2xl font-semibold mx-auto text-navTextLight dark:text-navTextDark  "
          >
            Let’s Work Together to Build a <br /> User-Friendly Web Experience
            that Exceeds Your Expectation
          </motion.p>
          <motion.button variants={childrenVar1} className="btn">
            <Link>send a message</Link>
            <div className="skew"></div>
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ContactMe;
