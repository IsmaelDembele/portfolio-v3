import Image from "next/image";
import styles from "../styles/projects.module.scss";
import { data } from "../data/projects";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1>Projects</h1>

      <div className={styles["projects--list"]}>
        {data.map(el => {
          return (
            <div key={uuidv4()} className={styles["projects--item"]}>
              <div className={styles["projects--description"]}>
                {el.description}
                <br />
                Check out the
                <a href={el.frontEnd} target="_blank" rel="noreferrer">
                  front-end
                </a>
                ,&nbsp;&nbsp;
                <a href={el.backEnd} target="_blank" rel="noreferrer">
                  back-end
                </a>
                , and
                <a href={el.live} target="_blank" rel="noreferrer">
                  &nbsp; live
                </a>
                .
              </div>
              <div className={styles["projects--image"]}>
                <a href={el.live} target="_blank" rel="noreferrer">
                  <Image
                    src={el.img.src}
                    alt={el.img.alt}
                    layout="intrinsic"
                    priority={false}
                    placeholder="blur"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
