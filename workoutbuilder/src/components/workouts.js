import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import background7 from "../pics/background7.jpeg";
import bodyProject from "../pics/bodyProject.jpeg";
import fitnessBlender from "../pics/fitnessBlender.jpeg";
import madFit from "../pics/madFit.jpeg";
import pernilla from "../pics/pernilla.jpeg";
import jQuery from "jquery";
import DemoCarousel from "./carousel";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
};

function WorkoutsComponent() {
  return (
    <React.Fragment>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container ">
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="parallax">
          <img
            src={background7}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <h3 className="coachName center maringUp">
              <a className="black-text" href="https://teambodyproject.com/">
                Team Body Project
              </a>
            </h3>
          </div>
          <div className="row maringUp">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center">
                <div className="light">
                  <a
                    className="black-text center"
                    href="https://teambodyproject.com/"
                  >
                    <img
                      className="bodyProjectImg circlePic"
                      src={bodyProject}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={0} />
              {/* <div className="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <a className="black-text" href="https://www.fitnessblender.com/">
              <h3 className="coachName center maringUp">Fitness Blender</h3>
            </a>
          </div>
          <div className="row maringUp">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center">
                <div className="light">
                  <a
                    className="black-text"
                    href="https://www.fitnessblender.com/"
                  >
                    <img
                      className="workoutImgs circlePic workoutMarginUpImgs"
                      src={fitnessBlender}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={1} />
              {/* <div className="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <a
              className="black-text"
              href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
            >
              <h3 className="coachName">MadFit</h3>
            </a>
          </div>
          <div className="row maringUp">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center">
                <div className="light">
                  <a
                    className="black-text"
                    href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={madFit}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={2} />
              {/* <div className="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <a
              className="black-text"
              href="https://www.youtube.com/c/Pernillaschannel/videos"
            >
              <h3 className="coachName">Pernilla Stryker</h3>
            </a>
          </div>
          <div className="row maringUp">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center">
                <div className="light">
                  <a
                    className="black-text"
                    href="https://www.youtube.com/c/Pernillaschannel/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={pernilla}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={3} />
              {/* <div className="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12"></div>
          <div className="row maringUp">
            <div className="col s12 m4 marginUp">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s12 m5 center">
                <div className="light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WorkoutsComponent;
