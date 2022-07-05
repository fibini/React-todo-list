import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <ul>
      <li>
        <NavLink to={"/about/singlepage"}>About App</NavLink>
      </li>
      <li>
        <NavLink to={"/about/anotherpage"}>About Author</NavLink>
      </li>
    </ul>
  );
};
export default About;
