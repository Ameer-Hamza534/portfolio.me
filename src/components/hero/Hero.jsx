import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import profile from "../../assets/transparent.png";
import "./hero.css";
import { FaBriefcase, FaFileDownload } from "react-icons/fa";
import CV from "../../assets/CV.pdf";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.section
      className="section flex justify-center items-center h-[600px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="content-wrapper text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.h4
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          👋, my name is{" "}
          <span className="font-semibold text-purple-600">Ameer Hamza</span> and
          I am a freelance
        </motion.h4>
        <div className="pt-5 heading__wrapper">
          <div className="n1">
            <motion.h2
              className="a1 design text-9xl font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Webdesigner
            </motion.h2>
            <motion.h2
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
              }}
              className="a2 design text-9xl font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Webdesigner
            </motion.h2>
          </div>
          <div className="n2">
            <motion.h1
              className="a1 text-9xl font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              & Webdeveloper
            </motion.h1>
            <motion.h1
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
              }}
              className="a2 text-9xl font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              & Webdeveloper
            </motion.h1>
          </div>
        </div>
        <motion.div
          className="flex items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <h3 className="text-lg">based in Pakistan.</h3>
        </motion.div>
        <motion.div
          className="btns flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.a
            href={CV}
            download
            className="rounded-full py-2 px-4 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFileDownload /> Download CV
          </motion.a>
          <motion.button
            className="rounded-full py-2 px-4 flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaBriefcase /> Hire me
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.img
        className="profile_image"
        src={profile}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </motion.section>
  );
};

export default Hero;
