import React from "react";
import facebookIcon from "../pics/facebook_icon.png";
import instaIcon from "../pics/insta_icon.png";
import linkedinIcon from "../pics/linkedin_icon.png";
import snapIcon from "../pics/snap_icon.png";
import githubIcon from "../pics/github_icon.png";

function FooterComponent() {
  return (
    <footer class="page-footer teal">
      <div class="container">
        <div class="row">
          <div class="col l3 s12">
            <h5 class="white-text">About Me</h5>
            <p class="grey-text text-lighten-4">
              My name is Daniel Garza and I'm a software engineer with a passion
              for fitness.
            </p>
          </div>
          <div class="col l1 s12"></div>
          <div class="col l8 s12 left-align">
            <h5 class="white-text">Connect</h5>
            <div class="row center">
              <div class="col s2 center">
                <a
                  href="https://www.instagram.com/dan_the_realest_man/"
                  target="_blank"
                >
                  <img class="socialMedia-icon" src={instaIcon} />
                </a>
              </div>
              <div class="col s2 center">
                <a href="https://www.facebook.com/Dgza88" target="_blank">
                  <img class="socialMedia-icon" src={facebookIcon} />
                </a>
              </div>
              <div class="col s2 center">
                <a
                  href="https://www.snapchat.com/add/danielgarza8819"
                  target="_blank"
                >
                  <img class="socialMedia-icon" src={snapIcon} />
                </a>
              </div>
              <div class="col s2 center">
                <a href="https://www.linkedin.com/in/dgza88/" target="_blank">
                  <img class="socialMedia-icon" src={linkedinIcon} />
                </a>
              </div>

              <div class="col s2 center">
                <a href="https://github.com/Dag2788" target="_blank">
                  <img class="socialMedia-icon" src={githubIcon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          Made by{" "}
          <a
            class="brown-text text-lighten-3"
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
