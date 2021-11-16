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
          <div class="container">
            <br></br>
            <div class="row center">
              <h3 class=" blue-grey lighten-5 seeThroughWorkouts  col s6 black-text">
                IT DOESN'T GET EASIER, YOU GET BETTER!
              </h3>
            </div>
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
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={bodyProject}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
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
                  src="https://www.youtube.com/embed/x3aogIZfVUI"
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
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={fitnessBlender}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
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
                  src="https://www.youtube.com/embed/fKMGZW8cA1U"
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
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={madFit}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
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
                  src="https://www.youtube.com/embed/u3h_Yr40rhg"
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
          <div class="row">
            <div class="col s5 m4 paddingBottom">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={pernilla}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="carousel">
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/KpKP_9l1ut0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/KpKP_9l1ut0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/KpKP_9l1ut0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
                <iframe
                  class="carousel-item"
                  width="630"
                  height="445"
                  src="https://www.youtube.com/embed/KpKP_9l1ut0"
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
