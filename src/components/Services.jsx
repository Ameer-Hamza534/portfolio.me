import React from "react";

const Services = () => {
  const services = [
    {
      name: "Full-stack Web Development",
      description:
        "Build scalable and efficient web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      border: "border-red-300",
    },
    {
      name: "RESTful API Development",
      description:
        "Create robust and secure RESTful APIs using Node.js and Express.js for seamless communication between front-end and back-end systems.",
      border: "border-green-300",
    },
    {
      name: "Database Design and Management",
      description:
        "Design, implement, and manage MongoDB databases to store and retrieve data efficiently for web applications.",
      border: "border-blue-300",
    },
    {
      name: "Front-end Development",
      description:
        "Develop responsive and interactive user interfaces using modern JavaScript frameworks like React.js, HTML5, and CSS3.",
      border: "border-yellow-300",
    },
    {
      name: "Back-end Development",
      description:
        "Build scalable and performant server-side applications using Node.js and Express.js to handle client requests and business logic.",
      border: "border-indigo-300",
    },
    {
      name: "Deployment and Hosting",
      description:
        "Deploy web applications on cloud platforms like AWS, Heroku, or DigitalOcean, ensuring high availability and scalability.",
      border: "border-purple-300",
    },
  ];

  return (
    <div id="services" className="flex flex-wrap justify-center my-14">
      <div className="w-full my-8">
        <h2 className="text-center text-4xl font-bold mb-2 max-md:text-2xl xl:mb-6">Services</h2>
      </div>
      {services.map((service, index) => (
        <Service
          key={index}
          name={service.name}
          description={service.description}
          border={service.border}
        />
      ))}
    </div>
  );
};

// Service component
const Service = ({ name, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 m-1">
      <div className={`h-full p-6 rounded-lg border-2 border-purple-700`}>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-white">{description}</p>
      </div>
    </div>
  );
};

export default Services;
