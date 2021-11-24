import React from "react";
import { useParams } from "react-router-dom";
import WorkoutComponent from "./WorkoutComponent";
import SetListComponent from "../builder/SetListComponent";

function WorkoutScreenComponent() {
  window.scrollTo(0, 0);
  let { id } = useParams();
  return (
    <React.Fragment>
      <div class="container workoutScreen">
        <div class="section">
          <WorkoutComponent id={id} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutScreenComponent;
