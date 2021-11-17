import React from "react";
import WorkoutComponent from "./WorkoutComponent";

function WorkoutScreenComponent() {
  return (
    <React.Fragment>
      <div class="container workoutScreen">
        <div class="section">
          <WorkoutComponent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutScreenComponent;
