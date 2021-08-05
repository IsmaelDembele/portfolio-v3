import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ResumeIcon from "../pictures/resume2.png";
import ResumePdf from "../files/Resume.pdf";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact">
        <div className="contact__box">
          <p>Feel free to contact me for any additional question.</p>
          <p>Email : dembele.ismael at gmail.com</p>

          <div item className="contact__social">
            <a href="https://github.com/IsmaelDembele" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="contact__social__icon" />
            </a>

            <a href="mailto:dembele.ismael@gmail.com" rel="noreferrer">
              <EmailIcon className="contact__social__icon" />
            </a>
            <a href={ResumePdf} target="_blank" rel="noreferrer">
              <img src={ResumeIcon} alt="my resume " className="contact__social__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
