import React from "react";
import { useParams } from "react-router-dom";
import CustomWorkoutComponent from "./CustomWorkoutComponent";
import { pageview } from "../constants/analytics";

function CustomWorkoutScreenComponent() {
  window.scrollTo(0, 0);
  pageview(
    "Workout Builder Room",
    window.location.pathname + "#/customWorkoutScreen"
  );
  let { workoutObj } = useParams();
  return (
    <React.Fragment>
      <div className="container workoutScreen">
        <div className="section">
          <CustomWorkoutComponent
            workoutObj={JSON.parse(decodeURIComponent(workoutObj))}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomWorkoutScreenComponent;
