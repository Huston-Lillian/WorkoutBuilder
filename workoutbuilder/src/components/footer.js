import React from "react";
import facebookIcon from "../pics/facebook_icon.png";
import instaIcon from "../pics/insta_icon.png";
import linkedinIcon from "../pics/linkedin_icon.png";
import snapIcon from "../pics/snap_icon.png";
import githubIcon from "../pics/github_icon.png";

const styles = {
  "z-index": 1,
  position: "relative"
};

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
            <div className="row center" style={styles}>
              <div className="col s2 center">
                <a
                  href="https://www.instagram.com/ufitworkouts/"
                  target="_blank"
                >
                  <img className="socialMedia-icon" src={instaIcon} />
                </a>
              </div>
              <div className="col s2 center">
                <a href="https://www.facebook.com/ufitworkouts" target="_blank">
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
          <div className="row marginBottonNone">
            <div className="col s6 l4">
              Made by{" "}
              <a
                className="brown-text text-lighten-3"
                href="https://dag2788.github.io/DanielG/"
              >
                Daniel G.
              </a>
            </div>

            <div className="col s6 l2" style={styles}>
              <form
                action="https://www.paypal.com/donate"
                method="post"
                target="_top"
              >
                <input type="hidden" name="business" value="VKUGX4DLBK634" />
                <input type="hidden" name="no_recurring" value="0" />
                <input
                  type="hidden"
                  name="item_name"
                  value="To continue bringing you the best free workouts and the latest science based fitness advice available. "
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
        </div>
        {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="business" value="VKUGX4DLBK634" />
        <input type="hidden" name="no_recurring" value="0" />
        <input
          type="hidden"
          name="item_name"
          value="To continue bringing you the best free workouts and the latest science based fitness advice available. "
        />
        <input type="hidden" name="currency_code" value="USD" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form> */}
      </div>
    </footer>
  );
}

export default FooterComponent;
