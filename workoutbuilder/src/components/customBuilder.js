import React from "react";
import { useParams } from "react-router-dom";
import WorkoutComponent from "./WorkoutComponent";
import SetListComponent from "../builder/SetListComponent";

function BuilderComponent() {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div class="row">
        <div class="icon-block paddingBottom">
          <h3 class="center-align">Create Your Own Workout</h3>
        </div>
      </div>
      <div class="container workoutScreen">
        <div class="section">
          <SetListComponent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default BuilderComponent;
