import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import background4 from "../pics/background4.jpeg";

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
              <h1 class="header col s4 teal-text text-lighten-2">
                uFit Workouts
              </h1>
            </div>
            <div class="row center">
              <div class="header col l4 light">
                <a
                  href="http://materializecss.com/getting-started.html"
                  id="download-button"
                  class="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  Free Workouts
                </a>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img
            src={background4}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <WorkoutComponent />
    </React.Fragment>
  );
}

export default WorkoutsComponent;
