import { motion } from "framer-motion";
import {
  childrenVar1,
  childrenVar3,
  childrenVar4,
} from "../animation";

function Card({ id, image, colours, name, description, technologies, link }) {
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
    <motion.div
      style={{
        flexDirection: (id + 1) % 2 === 0 ? "row-reverse" : "row",
      }}
      variants={parent}
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-200px", once: true }}
      className="card"
    >
      <motion.div
        variants={(id + 1) % 2 === 0 ? childrenVar3 : childrenVar4}
        className="w-[85%] mx-auto lg:mx-0 h-[30rem] lg:h-[36rem] sm:w-[25rem] lg:w-[31rem] rounded-[2.5rem] lg:rounded-[7rem]"
        style={{
          background: `linear-gradient(to bottom right, ${colours[0]}, ${colours[1]} )`,
        }}
      ></motion.div>
      <motion.article variants={childrenVar1} className="cardDetails">
        <h3 className={`color${id + 1} `}>{name}</h3>
        <p>{description}</p>
        <div className="stack mb-8">
          {technologies.map((technology) => {
            return <span key={technology}>{technology}</span>;
          })}
        </div>
        <div className="group mx-auto lg:mx-0 text-xsm w-fit font-bold capitalize cursor-pointer">
          <a
            href={link}
            target="_blank"
            className="inline-flex gap-3 items-center text-bodyTextLight dark:text-bodyTextDark"
          >
            view website{" "}
            <span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className=" dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div
            style={{
              background: `linear-gradient(to right, ${colours[0]}, ${colours[1]} )`,
            }}
            className="line h-[4px] w-3 rounded-[2px] group-hover:w-full duration-1000"
          ></div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default Card;
