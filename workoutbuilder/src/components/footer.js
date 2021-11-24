import React from "react";
import facebookIcon from "../pics/facebook_icon.png";
import instaIcon from "../pics/insta_icon.png";
import linkedinIcon from "../pics/linkedin_icon.png";
import snapIcon from "../pics/snap_icon.png";
import githubIcon from "../pics/github_icon.png";

function FooterComponent() {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l3 s12">
            <h5 className="white-text">About Me</h5>
            <p className="grey-text text-lighten-4">
              My name is Daniel Garza and I'm a software engineer with a passion
              for fitness.
            </p>
          </div>
          <div className="col l1 s12"></div>
          <div className="col l8 s12 left-align">
            <h5 className="white-text">Connect</h5>
            <div className="row center">
              <div className="col s2 center">
                <a
                  href="https://www.instagram.com/dan_the_realest_man/"
                  target="_blank"
                >
                  <img className="socialMedia-icon" src={instaIcon} />
                </a>
              </div>
              <div className="col s2 center">
                <a href="https://www.facebook.com/Dgza88" target="_blank">
                  <img className="socialMedia-icon" src={facebookIcon} />
                </a>
              </div>
              <div className="col s2 center">
                <a
                  href="https://www.snapchat.com/add/danielgarza8819"
                  target="_blank"
                >
                  <img className="socialMedia-icon" src={snapIcon} />
                </a>
              </div>
              <div className="col s2 center">
                <a href="https://www.linkedin.com/in/dgza88/" target="_blank">
                  <img className="socialMedia-icon" src={linkedinIcon} />
                </a>
              </div>

              <div className="col s2 center">
                <a href="https://github.com/Dag2788" target="_blank">
                  <img className="socialMedia-icon" src={githubIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by{" "}
          <a
            className="brown-text text-lighten-3"
            href="https://dag2788.github.io/DanielG/"
          >
            Daniel G.
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
