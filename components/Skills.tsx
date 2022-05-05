import styles from "../styles/skills.module.scss";
import Rating from "@mui/material/Rating";
import { skillsData } from "../data/skills";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  return (
    <section id="skills" className={styles["skills"]}>
      <h1>Skills</h1>
      <div className={styles["skills--item-list"]}>
        {skillsData.map(el => {
          return (
            <div key={uuidv4()} className={styles["skills--item"]}>
              <h2 className={styles["skills--title"]}>{el.title}</h2>
              <div className={styles["skills--left"]}>{display_line(el.left)}</div>
              <div className={styles["skills--right"]}>{display_line(el.right)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

interface ISide {
  name: string;
  value: number;
}

const display_line = (side: ISide[]) => {
  return side.map(el => {
    return (
      <div className={styles["skills--line"]}>
        <div className={styles["skills--name"]}>{el.name} </div>
        <span className={styles["skills--value"]}>
          <Rating value={el.value} readOnly size={"large"} />
        </span>
      </div>
    );
  });
};

export default Skills;
