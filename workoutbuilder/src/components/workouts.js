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
            {/* <div class="row center">
              <h3 class=" blue-grey lighten-5 seeThroughWorkouts  col s6 m3 black-text">
                IT DOESN'T GET EASIER, YOU GET BETTER!
              </h3>
            </div> */}
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
          <div class="row s12 l12 text-align-left">
            <h3 class="coachName">
              <a class="black-text" href="https://teambodyproject.com/">
                Team Body Project
              </a>
            </h3>
          </div>
          <div class="row">
            <div class="col s5 m4 marginUp">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <a class="black-text" href="https://teambodyproject.com/">
                    <img
                      class="bodyProjectImg circlePic"
                      src={bodyProject}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s7 m6 youtubeVid">
              <DemoCarousel showArrows={true} id={0} />
              {/* <div class="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12 text-align-left">
            <a class="black-text" href="https://www.fitnessblender.com/">
              <h3 class="coachName">Fitness Blender</h3>
            </a>
          </div>
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
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
            <div class="col s7 m6 youtubeVid">
              <DemoCarousel showArrows={true} id={1} />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12 text-align-left">
            <a
              class="black-text"
              href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
            >
              <h3 class="coachName">MadFit</h3>
            </a>
          </div>
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <a
                    class="black-text"
                    href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ"
                  >
                    <img
                      class="workoutImgs circlePic workoutMarginUpImgs"
                      src={madFit}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s7 m6 youtubeVid">
              <DemoCarousel showArrows={true} id={2} />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row s12 l12 text-align-left">
            <a
              class="black-text"
              href="https://www.youtube.com/c/Pernillaschannel/videos"
            >
              <h3 class="coachName">Pernilla Stryker</h3>
            </a>
          </div>
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <a
                    class="black-text"
                    href="https://www.youtube.com/c/Pernillaschannel/videos"
                  >
                    <img
                      class="workoutImgs circlePic workoutMarginUpImgs"
                      src={pernilla}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col s7 m6 youtubeVid">
              <DemoCarousel showArrows={true} id={3} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WorkoutsComponent;
