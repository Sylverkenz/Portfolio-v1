import Light from "./Light";
import { motion } from "framer-motion";
import { parent } from "../animation";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import {
  childrenVar1,
  childrenVar2,
  childrenVar3,
  childrenVar4,
} from "../animation";

function AboutMe() {
  return (
    <motion.section
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-200px" }}
      className="section"
    >
      <Light text={"about me"} />
      <motion.h2
        variants={childrenVar1}
        className=" herogradient text-[2.5rem] lg:text-2xl heading"
      >
        meet the developer: exploring my journey
      </motion.h2>
      <motion.p
        variants={childrenVar1}
        className="text-xsm max-w-[95rem] mx-auto text-bodyTextLight dark:text-navTextDark font-medium"
      >
        I am a front-end developer with a passion for creating user-friendly web
        experiences through codes. With several years of experience in the
        field, I specialize in turning ideas into high performance websites that
        engage users and drive results. When I’m not coding, I enjoy staying up
        to date with the latest web development trends and experimenting with
        new technologies to expand my skillset. I believe that good design is
        important, but it’s the functionality and user experience that really
        makes a website stand out. Let’s work together to create a web solution
        that exceeds your expectations.
      </motion.p>

      <motion.div className="p-[1.5rem] lg:p-[5rem] overflow-hidden">
        <motion.h2
          variants={childrenVar2}
          className="text-[1.6rem] lg:text-xl font-CDisplay uppercase font-semibold text-navTextLight dark:text-navTextDark tracking-[2px]"
        >
          technologies i work with
        </motion.h2>
        <motion.div className="techs">
          <motion.h3 variants={childrenVar1}>
            <AiOutlineHtml5 />
          </motion.h3>
          <motion.h3 variants={childrenVar1}>
            <TbBrandCss3 />
          </motion.h3>
          <motion.h3 variants={childrenVar1}>
            <FaSass />
          </motion.h3>
          <motion.h3 variants={childrenVar1}>
            <SiTailwindcss />
          </motion.h3>
          <motion.h3 variants={childrenVar1}>
            <SiJavascript />
          </motion.h3>
          <motion.h3 variants={childrenVar1}>
            <SiReact />
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutMe;
