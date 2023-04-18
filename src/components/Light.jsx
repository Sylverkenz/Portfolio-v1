import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function Light({ text }) {
  const fromTop = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: .5,
      },
    },
  };
  const [x, setX] = useState();
  const [y, setY] = useState();
  const conRef = useRef(null);
  return (
    <motion.div
      variants={fromTop}
      initial="hidden"
      whileInView="show"
      className="container font-CDisplay text-[3rem] lg:text-5xl font-semibold w-fit mx-auto leading leading-none mb-4 lg:mb-0"
      ref={conRef}
    >
      <h1>{text}</h1>
      <div
        className="light hidden dark:block duration-500"
        style={{
          background: x
            ? `linear-gradient(180deg, rgba(16, 16, 26, 0.02) 0%, rgba(164, 164, 164, 0.02) 450%) ,radial-gradient(
            circle at ${x}px ${y}px,
            transparent 5%,
            rgba(16, 16, 26, 0.8) 18%
          )`
            : null,
        }}
        onMouseMove={(e) => {
          console.log(e);
          console.log(conRef);
          setX(e.pageX - conRef.current.offsetLeft);
          setY(e.pageY - conRef.current.offsetTop);
        }}
        onMouseLeave={() => setX(null)}
      ></div>
    </motion.div>
  );
}

export default Light;
