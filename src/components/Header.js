import React from "react";
import Grid from "@material-ui/core/Grid";
import pic from "../pictures/picture12.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ResumeIcon from "../pictures/resume2.png";
import ResumePdf from "../files/Resume.pdf";

const Header = () => {
  return (
    <header id="header">
      <Grid container className="presentation">
        {/* -------------left side---------------- */}

        <Grid item lg md className="presentation__left">
          <Grid container direction="column" className="presentation__left-box">
            <Grid item>
              <div className="presentation__text">
                <p>I'm Ismael Dembele</p>
                <p>a full stact developper</p>
                <p>base in Pittsburgh, PA</p>
              </div>
            </Grid>
            <Grid item className="presentation__line">
              <hr />
            </Grid>
            <Grid item className="presentation__social">
              <a href="https://github.com/IsmaelDembele" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="presentation__social__icon" />
              </a>

              <a href="mailto:dembele.ismael@gmail.com" rel="noreferrer">
                <EmailIcon className="presentation__social__icon" />
              </a>
              <a href={ResumePdf} target="_blank" rel="noreferrer">
                <img src={ResumeIcon} alt="my resume " className="presentation__social__icon" />
              </a>
            </Grid>
          </Grid>
        </Grid>

        {/* -------------Right side---------------- */}

        <Grid item lg md className="presentation__right">
          <img src={pic} alt="computer" className="presentation__img" />
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
