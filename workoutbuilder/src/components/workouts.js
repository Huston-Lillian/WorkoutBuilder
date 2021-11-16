import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import background7 from "../pics/background7.jpeg";
import bodyProject from "../pics/bodyProject.jpeg";

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
              <h3 class=" blue-grey lighten-5 seeThroughWorkouts  col s4 black-text">
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
            <div class="col s12 m4">
              <div class="icon-block">
                <h5 class="center">Team Body Project</h5>
              </div>
              <div class="s12 m4 center">
                <div class="light">
                  <img
                    class="bodyProjectImg"
                    src={bodyProject}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>

            <div class="col s12 m8">
              {/* <iframe
                width="420"
                height="345"
                src="https://youtu.be/x3aogIZfVUI"
              ></iframe> */}
              <iframe
                width="430"
                height="345"
                src="https://www.youtube.com/embed/x3aogIZfVUI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutsComponent;
