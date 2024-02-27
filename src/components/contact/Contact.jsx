import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="py-8 lg:w-1/2 md:w-3/4 sm:w-full mx-auto">
      <h2 className="text-center text-4xl font-bold mb-2 max-md:text-2xl xl:mb-6">Contact</h2>
      <form onSubmit={handleSubmit} className="mb-4 mx-8">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-300 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-center space-x-4">
        <SocialLink
          href="https://www.linkedin.com/in/ameer-hamza-816252225/"
          icon={<FaLinkedin />}
        />
        <SocialLink
          href="https://github.com/Ameer-Hamza534"
          icon={<FaGithub />}
        />
        <SocialLink
          href="#"
          icon={<FaInstagram />}
        />
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl text-gray-300 hover:text-blue-500 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Contact;
