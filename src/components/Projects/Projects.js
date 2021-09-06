import React from "react";
import Grid from "@material-ui/core/Grid";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Card from "./Card";
import { projectData } from "./data";

const Projects = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section id="projects" className="project">
      <Grid container direction="column">
        <Grid item>
          <h1>Projects</h1>
        </Grid>
        <Grid item className="project__list">
          <Grid
            container
            spacing={5}
            justifyContent="space-around"
            alignItems="center"
            direction={matches ? "column" : "row"}
          >
            {
              projectData.map((project,index) =>{
                return <Card key={index} {...project}/>
              })
            }
            {/* <Card /> */}

            {/* beginning item */}
            {/* <Grid item className="project__item">
              <div className="card">
                <img src={ShoppingCart} alt="react weather app screeshot" className="card__image" />
                <div className="card__title">Shopping Cart</div>
                <div className="card__description">
                  <p>This project is buid with React and Sass. It's uses useReducer.</p>
                </div>
                <div className="card__links">
                  <a
                    href="https://frontend-shopping-cart.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="card__btn">site</button>
                  </a>
                  <a
                    href="https://github.com/IsmaelDembele/front-end-shopping-cart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="card__btn">code</button>
                  </a>
                </div>
              </div>
            </Grid> */}
            {/* end item */}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
