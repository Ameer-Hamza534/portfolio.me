import React from "react";
import naptressImg from "../project_imgs/Naptress.png";
import luxuryImg from "../project_imgs/Luxury.png";
import princeImg from "../project_imgs/Prince Fancy.png";
import tesorImg from "../project_imgs/Tesor.png";

const Portfolio = () => {
  const projects = [
    {
      name: "Naptress",
      image: naptressImg,
      link: "https://www.naptresscommercial.com.au/",
    },
    {
      name: "Deltora Diamonds",
      image: luxuryImg,
      link: "https://deltoradiamonds.com/",
    },
    {
      name: "Prince Fancy",
      image: princeImg,
      link: "https://princefancy.com",
    },
    {
      name: "Tesor Jewellery & gift",
      image: tesorImg,
      link: "https://tesoronline.com/",
    },
  ];

  return (
    <div id="portfolio" className="flex flex-wrap justify-center my-14">
      <div className="w-full my-8">
        <h2 className="text-center text-4xl font-bold mb-2 max-md:text-2xl xl:mb-6">
          Portfolio
        </h2>
      </div>
      {projects.map((project, index) => (
        <Service
          key={index}
          img={project.image}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

// Service component
const Service = ({ name, img, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 m-4">
      <div className={`h-full rounded-lg`}>
        <div
          style={{ backgroundColor: "rgba(48, 47, 47, 0.85)" }}
          className="p-6 rounded-lg"
        >
          <img className="rounded-lg" src={img} alt="" />
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <a className="text-purple-500" href={link}>
          Visit site
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
