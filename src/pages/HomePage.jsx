import { motion, useScroll, useSpring } from "framer-motion";
import { Hero, AboutMe, Projects, ContactMe } from "../components";

function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress , {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <motion.main className="relative overflow-hidden">
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <motion.div style={{ scaleX }} className="scroll"></motion.div>
    </motion.main>
  );
}

export default HomePage;
