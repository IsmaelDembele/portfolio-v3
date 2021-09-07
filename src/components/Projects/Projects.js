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
            spacing={10}
            justifyContent="space-around"
            alignItems="center"
            direction={matches ? "column" : "row"}
            >
                <Card key={1} {...projectData[0]}/>
                <Card key={2} {...projectData[1]}/>
          </Grid>
          <Grid
            container
            spacing={10}
            justifyContent="space-around"
            alignItems="center"
            direction={matches ? "column" : "row"}
            >
                <Card key={3} {...projectData[2]}/>
                <Card key={4} {...projectData[3]}/>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
