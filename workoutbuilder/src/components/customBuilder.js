import React from "react";
import { useParams } from "react-router-dom";
import WorkoutComponent from "./WorkoutComponent";
import SetListComponent from "../builder/SetListComponent";

function BuilderComponent() {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div className="row">
        <div className="icon-block paddingBottom">
          <h3 className="center-align">Create Your Own Workout</h3>
        </div>
      </div>
      <div className="container workoutScreen">
        <div className="section">
          <SetListComponent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default BuilderComponent;
