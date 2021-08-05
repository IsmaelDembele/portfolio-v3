import React from "react";
import App from "./Chart";
import options from "./data";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="chart">
        {options.map(option => (
          <div className="chart__item">
            <App option={option} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
