import { Light, Card } from "../components";
import { projects } from "../data";
import { motion } from "framer-motion";
import { parent, childrenVar1 } from "../animation";

function Projects() {
  return (
    <motion.section
      variants={parent}
      initial="hidden"
      whileInView="show"
      className="section"
      id="projects"
      viewport={{ margin: "-100px" }}
    >
      <Light text={"projects"} />
      <motion.h2
        variants={childrenVar1}
        className=" herogradient  text-[2.4rem] sm:text-[3rem] lg:text-2xl  heading"
      >
        my work: where code meets creativity
      </motion.h2>
      <div className="px-[2.5rem] sm:px-[3rem] lg:px-[10rem] mt-[4rem] lg:mt-[6rem]">
        {projects.map((project) => {
          return <Card key={project.id} {...project} />;
        })}
      </div>
    </motion.section>
  );
}

export default Projects;
