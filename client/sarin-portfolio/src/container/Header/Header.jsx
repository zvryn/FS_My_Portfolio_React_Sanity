import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { Button } from "../../components";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
      >
        <div className="app__header__content">
          <h4>👋 Hi I am Jay.</h4>
          <h1>Full Stack Developer</h1>
          <p>
            I possess a comprehensive skill set that spans <br />
            both front-end, back-end development.
          </p>
        </div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="app__header__button">
            <Button name="Let's Chat" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="app__header__tech">
            <img src={images.mern} alt="mern" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
      >
        <div className="app__header-hero">
          <img src={images.hero} alt="hero" />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
