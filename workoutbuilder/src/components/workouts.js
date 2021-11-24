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
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container ">
            <br></br>
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img
            src={background7}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12">
            <h3 class="coachName center maringUp">
              <a class="black-text" href="https://teambodyproject.com/">
                Team Body Project
              </a>
            </h3>
          </div>
          <div class="row maringUp">
            <div class="col s12 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s12 m5 center">
                <div class="light">
                  <a
                    class="black-text center"
                    href="https://teambodyproject.com/"
                  >
                    <img
                      class="bodyProjectImg circlePic"
                      src={bodyProject}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={0} />
              {/* <div class="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12">
            <a class="black-text" href="https://www.fitnessblender.com/">
              <h3 class="coachName center maringUp">Fitness Blender</h3>
            </a>
          </div>
          <div class="row maringUp">
            <div class="col s12 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s12 m5 center">
                <div class="light">
                  <a class="black-text" href="https://www.fitnessblender.com/">
                    <img
                      class="workoutImgs circlePic workoutMarginUpImgs"
                      src={fitnessBlender}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={1} />
              {/* <div class="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12">
            <a
              class="black-text"
              href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
            >
              <h3 class="coachName">MadFit</h3>
            </a>
          </div>
          <div class="row maringUp">
            <div class="col s12 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s12 m5 center">
                <div class="light">
                  <a
                    class="black-text"
                    href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
                  >
                    <img
                      class="workoutImgs circlePic"
                      src={madFit}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={2} />
              {/* <div class="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12">
            <a
              class="black-text"
              href="https://www.youtube.com/c/Pernillaschannel/videos"
            >
              <h3 class="coachName">Pernilla Stryker</h3>
            </a>
          </div>
          <div class="row maringUp">
            <div class="col s12 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s12 m5 center">
                <div class="light">
                  <a
                    class="black-text"
                    href="https://www.youtube.com/c/Pernillaschannel/videos"
                  >
                    <img
                      class="workoutImgs circlePic"
                      src={pernilla}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={3} />
              {/* <div class="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12"></div>
          <div class="row maringUp">
            <div class="col s12 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s12 m5 center">
                <div class="light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WorkoutsComponent;
