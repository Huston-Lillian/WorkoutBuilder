import React, { Component } from "react";
import { feeAppsArray } from "../constants/freeApps";
import background17 from "../pics/background17.jpg";
import Googleplay from "../pics/Googleplay.png";
import AppleStore from "../pics/AppleStore.png";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

class FreeMobileAppsComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      freeApps: feeAppsArray,
    };
  }
  render() {
    let { freeApps } = this.state;
    window.scrollTo(0, 0);
    pageview("Free Mobile Apps", window.location.pathname + "#/freeApps");
    return (
      <React.Fragment>
        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br></br>
              <br></br>
            </div>
          </div>
          <div class="parallax">
            <img
              src={background17}
              alt="Unsplashed background img 1"
              style={styles}
            />
          </div>
        </div>
        <div className="container">
          <br></br>
          <div className="row center paddingBottom">
            <h1 className="center header teal-text text-lighten-2">
              Free Fitness Apps
            </h1>
            <br></br>
            <br></br>
          </div>
        </div>
        {freeApps.map((app) => (
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col s12 m4 customWorkoutImg">
                  <div class="icon-block">
                    <h5 class="center"></h5>
                  </div>
                  <div class="s4 m5 center">
                    <div class="light">
                      {/* <a href={app.insta}> */}
                      <img
                        class="adviceImg circlePic"
                        src={app.appImage}
                        alt="Unsplashed background img 1"
                      />
                      {/* </a> */}
                    </div>
                  </div>
                </div>
                <div class="col s12 m6">
                  <div class="row center appNames">
                    <h3 class="black-text">{app.appName}</h3>
                  </div>
                  <div class="row">
                    <div class="col s12 m6 center">
                      <div class="light">
                        <a href={app.googlePlayLink}>
                          <img
                            className="appLogos"
                            src={Googleplay}
                            alt="Unsplashed background img 1"
                            href={app.googlePlayLink}
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col s12 m6 center">
                      <div class="light">
                        <a href={app.appleStoreLink}>
                          <img
                            className="appLogos"
                            src={AppleStore}
                            alt="Unsplashed background img 1"
                            href={app.appleStoreLink}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </React.Fragment>
    );
  }
}

export default FreeMobileAppsComponent;
