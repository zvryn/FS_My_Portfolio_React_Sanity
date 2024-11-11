/* eslint-disable react/prop-types */

import "./Button.scss";
const Button = (props) => {
  return (
    <div className="app__button">
      <a href="#contact">{props.name}</a>
    </div>
  );
};

export default Button;
