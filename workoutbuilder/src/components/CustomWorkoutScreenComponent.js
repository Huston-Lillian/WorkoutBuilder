import React from "react";
import { useParams } from "react-router-dom";
import CustomWorkoutComponent from "./CustomWorkoutComponent";

function CustomWorkoutScreenComponent() {
  window.scrollTo(0, 0);
  let { workoutObj } = useParams();
  // let obj = JSON.parse(decodeURIComponent(workoutObj));
  // console.log(obj.name);
  // console.log(obj.totalTime);
  // console.log(obj.exerciseList);

  return (
    <React.Fragment>
      <div class="container workoutScreen">
        <div class="section">
          <CustomWorkoutComponent
            workoutObj={JSON.parse(decodeURIComponent(workoutObj))}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomWorkoutScreenComponent;
