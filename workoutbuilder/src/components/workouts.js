import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import background7 from "../pics/background7.jpeg";
import bodyProject from "../pics/bodyProject.jpeg";
import fitnessBlender from "../pics/fitnessBlender.jpeg";
import madFit from "../pics/madFit.jpeg";
import pernilla from "../pics/pernilla.jpeg";
import alomate from "../pics/alomate.jpeg";
import yogiapproved from "../pics/yogiapproved.png";
import moveNicole from "../pics/moveNicole.jpeg";
import psychetruth from "../pics/psychetruth.jpeg";
import buffdude from "../pics/buffdude.jpeg";
import criticalBench from "../pics/criticalbench.png";
import popSugar from "../pics/popsugar.png";
import zumbaClass from "../pics/zumbaClass.jpeg";
import darebee from "../pics/darebee.jpeg";
import bodyCoach from "../pics/bodyCoach.jpeg";
import hasFit from "../pics/hasFit.jpeg";
import heather from "../pics/heather.jpeg";
import kitRich from "../pics/kitRich.jpeg";
import yogaAdrian from "../pics/yogaAdrian.jpeg";
import bodyRock from "../pics/bodyRock.jpeg";
import liveStrong from "../pics/liveStrong.jpeg";
import xhit from "../pics/xhit.jpeg";

import jQuery from "jquery";
import DemoCarousel from "./carousel";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

function WorkoutsComponent() {
  window.scrollTo(0, 0);
  pageview("Free Workouts", window.location.pathname + "#/workouts");
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
        <br></br>
        <div className="row center paddingBottom">
          <h1 className="center header teal-text text-lighten-2">
            Free Fitness Channels
          </h1>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <h3 className="coachName center maringUp">
              <a
                className="black-text"
                href="https://www.youtube.com/c/Darebees/videos"
              >
                The DAREBEE Project
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
                  <a className="black-text center" href="https://darebee.com/">
                    <img
                      className="bodyProjectImg circlePic"
                      src={darebee}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={12} />
            </div>
          </div>
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
            <h3 className="coachName center maringUp">
              <a
                className="black-text"
                href="https://www.youtube.com/c/TheBodyCoachTV/videos"
              >
                The Body Coach TV
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
                    href="https://www.youtube.com/c/TheBodyCoachTV/videos"
                  >
                    <img
                      className="bodyProjectImg circlePic"
                      src={bodyCoach}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={13} />
              {/* <div className="carousel"> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row s12 l12">
            <h3 className="coachName center maringUp">
              <a
                className="black-text"
                href="https://www.youtube.com/c/Hasfit/videos"
              >
                HASfit
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
                    href="https://www.youtube.com/c/Hasfit/videos"
                  >
                    <img
                      className="bodyProjectImg circlePic"
                      src={hasFit}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={14} />
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
              href="https://www.youtube.com/thedailyhiit/videos"
            >
              <h3 className="coachName center maringUp">BodyRock TV</h3>
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
                    href="https://www.youtube.com/thedailyhiit/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={bodyRock}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={18} />
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
              href="https://www.youtube.com/c/livestrongcom/videos"
            >
              <h3 className="coachName center maringUp">LIVESTRONG.COM</h3>
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
                    href="https://www.youtube.com/c/livestrongcom/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={liveStrong}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={19} />
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
              href="https://www.youtube.com/c/xhit/videos"
            >
              <h3 className="coachName center maringUp">XHIT Daily</h3>
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
                    href="https://www.youtube.com/c/xhit/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={xhit}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={20} />
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
              href="https://www.youtube.com/c/Heatherrobertsoncom/videos"
            >
              <h3 className="coachName">Heather Robertson</h3>
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
                    href="https://www.youtube.com/c/Heatherrobertsoncom/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={heather}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={15} />
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
          <div className="row s12 l12">
            <a
              className="black-text"
              href="https://www.youtube.com/c/BuffDudesWorkouts/videos"
            >
              <h3 className="coachName">Buff Dudes Workouts</h3>
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
                    href="https://www.youtube.com/c/BuffDudesWorkouts/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={buffdude}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={8} />
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
              href="https://www.youtube.com/c/YogiApproved/videos"
            >
              <h3 className="coachName">YogiApproved</h3>
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
                    href="https://www.youtube.com/c/YogiApproved/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={yogiapproved}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={4} />
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
              href="https://www.youtube.com/c/yogawithadriene/videos"
            >
              <h3 className="coachName">Yoga with Adriene</h3>
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
                    href="https://www.youtube.com/c/yogawithadriene/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={yogaAdrian}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={17} />
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
              href="https://www.youtube.com/user/Criticalbench/featured"
            >
              <h3 className="coachName">Criticalbench</h3>
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
                    href="https://www.youtube.com/user/Criticalbench/featured"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={criticalBench}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={9} />
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
              href="https://www.youtube.com/c/alomoves/videos"
            >
              <h3 className="coachName">Alo Moves</h3>
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
                    href="https://www.youtube.com/c/alomoves/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={alomate}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={5} />
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
              href="https://www.youtube.com/c/MoveWithNicole/videos"
            >
              <h3 className="coachName">Move with Nicole</h3>
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
                    href="https://www.youtube.com/c/MoveWithNicole/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={moveNicole}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={6} />
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
              href="https://www.youtube.com/c/psychetruth/videos"
            >
              <h3 className="coachName">PsycheTruth</h3>
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
                    href="https://www.youtube.com/c/psychetruth/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={psychetruth}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={7} />
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
              href="https://www.youtube.com/c/POPSUGARFitness/videos"
            >
              <h3 className="coachName">PopSugar Fitness</h3>
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
                    href="https://www.youtube.com/c/POPSUGARFitness/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={popSugar}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={10} />
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
              href="https://www.youtube.com/c/KitRich/videos"
            >
              <h3 className="coachName">Kit Rich</h3>
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
                    href="https://www.youtube.com/c/KitRich/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={kitRich}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={16} />
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
              href="https://www.youtube.com/c/ZumbaClassInc/videos"
            >
              <h3 className="coachName">Zumba Class</h3>
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
                    href="https://www.youtube.com/c/ZumbaClassInc/videos"
                  >
                    <img
                      className="workoutImgs circlePic"
                      src={zumbaClass}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 youtubeVid center">
              <DemoCarousel showArrows={true} id={11} />
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
