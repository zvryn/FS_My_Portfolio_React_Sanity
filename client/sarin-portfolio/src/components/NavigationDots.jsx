/* eslint-disable react/prop-types */

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {["home", "about", "work", "skills", "contact"].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#ff2c2c" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
