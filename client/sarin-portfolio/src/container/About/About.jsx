import "./About.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { images } from "../../constants";

const abouts = [
  {
    title: "Frontend Development",
    description:
      "A sharp attention to detail and a keen eye for design, ensuring that every element of the website is precise and visually appealing. ",
    imgUrl: images.owl,
  },
  {
    title: "Backend Development",
    description:
      "A strong understanding of database management and server architectures. Focus on optimizing performance, maintaining data integrity, and implementing robust security measures.",
    imgUrl: images.octopus,
  },
  {
    title: "Fullstack Development",
    description:
      "Versatile, problem-solving, and able to collaborate across all aspects of development to deliver seamless, scalable solutions.",
    imgUrl: images.lion,
  },
  {
    title: "UX/UI",
    description:
      "Creating intuitive, visually appealing interfaces that enhance usability and accessibility.",
    imgUrl: images.butterfly,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Believe That <span>Great Development</span>
        <br />
        Drives <span>Business Success</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
