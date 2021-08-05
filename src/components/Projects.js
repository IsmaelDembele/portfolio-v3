import React from "react";
import Grid from "@material-ui/core/Grid";
import ReactWApp from "../pictures/screenshot_react_weather_app.png";
import ShoppingCart from "../pictures/front-end-shopping-cart.jpg";

const Projects = () => {
  return (
    <section id="projects" className="project">
      <Grid container direction="column">
        <Grid item>
          <h1>Projects</h1>
        </Grid>
        <Grid item className="project__list">
          <Grid container spacing={5} justifyContent="space-around" alignItems="center">
            {/* beginning item */}
            <Grid item className="project__item">
              <div className="card">
                <img src={ReactWApp} alt="react weather app screeshot" className="card__image" />
                <div className="card__title">React Weather App</div>
                <div className="card__description">
                  <p>
                    This project is based on &nbsp;
                    <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
                      "openweathermap" API. It gets the information of a city and dispays it on the
                      screen. It is build with Reactjs and SASS.
                    </a>
                  </p>
                </div>
                <div className="card__links">
                  <a
                    href="https://ismaelweatherapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="card__btn">site</button>
                  </a>
                  <a href="https://github.com/IsmaelDembele/react-weather-app" target="_blank" rel='noopener noreferrer'>
                    <button className="card__btn">code</button>
                  </a>
                </div>
              </div>
            </Grid>
            {/* end item */}
            {/* beginning item */}
            <Grid item className="project__item">
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
            </Grid>
            {/* end item */}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Projects;
