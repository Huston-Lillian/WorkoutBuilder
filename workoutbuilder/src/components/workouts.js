import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import background7 from "../pics/background7.jpeg";
import bodyProject from "../pics/bodyProject.jpeg";
import fitnessBlender from "../pics/fitnessBlender.jpeg";
import madFit from "../pics/madFit.jpeg";
import pernilla from "../pics/pernilla.jpeg";

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
              <div class="carousel">
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/x3aogIZfVUI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/xsqh63FaYz4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/8oQ-WNJoYtM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/3SpPraOLJl4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/WjoBQsoekgk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/TYMGYumHKtw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>{" "}
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/tYyNM9pmOlA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>{" "}
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/QNAOIXhNRJs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>{" "}
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/Ba3qZjzPonI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>{" "}
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/-irx3_FA2nU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
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
              <div class="carousel">
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/fKMGZW8cA1U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/E4tiWhsQhQg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/DbjMVBeBBdQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/BS7XkoGmhXQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/VUG7m-IyoZ8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/EJK4RuUz0yI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/_Xm3GEDVmbM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/nNe1p2uPt_g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/6dhO7S7_DW0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/CSXksjKzR2w"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
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
              <div class="carousel">
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/u3h_Yr40rhg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/fgveacDs6_c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/8DGcqYVxJLQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/qg39x20q790"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/4iy4yEKa7W8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/f7Msw169kr4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/qULTwquOuT4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/cdsJB1gHTiA"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/ESkI_WR1qqc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/v5cO0Bs-Tlg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
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
              <div class="carousel">
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/TFW8Orq7rX8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/6I7aSEZGJPM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/GtLHr4dilUE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/LcrhDiRHOLI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/f-2YscGQsMw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/Ki33wY5ZwI4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/Uij_PWAXncc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/x9r_j7Lgy48"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/Zj82gmAR3bc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/jD-qEd2MUXw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutsComponent;
