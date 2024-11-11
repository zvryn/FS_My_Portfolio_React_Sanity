import { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

import "./Footer.scss";

const RESUME_FILE_URL =
  "https://drive.google.com/uc?export=download&id=1KUJNJPHniDuh6MzOcj5CDRMn-QtzTs5O";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.message) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const downloadFile = () => {
    const url = RESUME_FILE_URL;
    const fileName = "resume_sarin.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <>
      <h2 className="head-text">
        Grab a coffee - <span>let&apos;s dive into a chat. </span> 👇
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href="mailto:sarinkanok@gmail.com"
            className="p-text"
            style={{ color: "black" }}
          >
            sarinkanok@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.phone} alt="phone" />
          <a
            href="tel:+66 (80) 730-2780"
            className="p-text"
            style={{ color: "black" }}
          >
            +66 80-730-2780
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.resume} alt="resume" />
          <a
            onClick={downloadFile}
            className="p-text"
            style={{ color: "black", cursor: "pointer" }}
          >
            Download My Resume
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">I am grateful to hear from you!🥳🥳🥳</h3>
        </div>
      )}

      <div className="app__footer-end">
        <div className="app__footer-social">
          <div>
            <a
              href="https://www.instagram.com/myjaypeg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sarin-kanokyuraphan-62b7b5306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="app__footer-copyright">
          <p className="p-text">@2024 SARIN</p>
          <p className="p-text">All RIGHTS RESERVED</p>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact");
