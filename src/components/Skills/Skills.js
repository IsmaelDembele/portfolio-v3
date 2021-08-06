import React from "react";
import Chart from "./Chart";
import options from "./data";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="chart">
        {options.map(option => (
          <div className="chart__item">
            <Chart option={option} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
