import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ReactJs from "../../assets/icons/react.png";
import Github from "../../assets/icons/github.png";
import NodeJs from "../../assets/icons/node.png";
import ExpressJs from "../../assets/icons/express.png";
import JavaScript from "../../assets/icons/js.png";
import MongoDb from "../../assets/icons/mongo.png";
import Redux from "../../assets/icons/redux.png";
import Sass from "../../assets/icons/sass.png";
import Strapi from "../../assets/icons/strapi.png";
import Tailwind from "../../assets/icons/tailwind.png";
import Typescript from "../../assets/icons/typescript.png";
import Bootstrap from "../../assets/icons/bootstrap.png";
import HTML from "../../assets/icons/html.png";
import Css from "../../assets/icons/css.png";
import More from "../../assets/icons/more.png";

const icons = {
  ReactJs,
  NodeJs,
  ExpressJs,
  MongoDb,
  JavaScript,
  Redux,
  Strapi,
  Typescript,
  Tailwind,
  Sass,
  Github,
  Bootstrap,
  HTML,
  Css,
  More,
};

const About = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // You can adjust the scroll position value as needed
    if (scrollPosition > 300) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      className="flex p-20 max-md:p-8 max-lg:flex-col-reverse"
      style={{ backgroundColor: "#302f2fd9" }}
    >
      <div className="w-1/2 max-lg:w-full flex px-20 flex-wrap gap-4 max-md:mb-8 max-md:justify-center max-xl:p-8 max-sm:p-0 max-md:gap-6">
        {Object.keys(icons).map((key, index) => (
          <motion.div
            key={key}
            className="icon__box flex flex-col justify-center items-center p-4 w-[80px] h-[80px] hover:shadow-2xl rounded-lg max-md:w-[60px] max-md:h-[60px] "
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={icons[key]}
              className="icon object-cover"
              alt=""
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
            <p className="text-sm font-medium text-gray-300 max-md:text-xs max-md:font-normal">
              {key}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="w-1/2 max-lg:w-full flex flex-col justify-center max-md:text-center max-md:my-8">
        <h2 className="text-4xl font-bold mb-2 max-md:text-2xl xl:mb-6">About Me</h2>
        <p className="max-md:text-sm">
          👋 Hey there! I'm Ameer Hamza and I'm a software engineer specializing
          in building exceptional digital experiences. I've been building things
          for the web for over 4 years, and along the way I've had the privilege
          of working for a bunch of different companies. I've built many
          different kinds of websites with tools like React, Node.js, MongoDB,
          Express.js, WordPress, Shopify Stores, and more. At the end of the
          day, I'm not picky about the tech stack I'm using, as long as I'm
          building something cool!
        </p>
      </div>
    </div>
  );
};

export default About;
