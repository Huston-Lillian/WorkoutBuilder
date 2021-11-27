import React from "react";
import { useParams } from "react-router-dom";
import CustomWorkoutComponent from "./CustomWorkoutComponent";

function CustomWorkoutStartButtonComponent() {
  //window.scrollTo(0, 0);
  let { workoutObj } = useParams();
  return (
    <React.Fragment>
      <div className="container">
        <div className="row center">
          <div className="header col l12 s12 light paddingBottom">
            <a
              //onClick={this.buildWorkout}
              href={"#/customWorkoutScreen/:" + workoutObj}
              id="download-button"
              className="btn btn-large waves-effect waves-light teal lighten-1"
            >
              Start Workout
              {/* <Link className="white-text" to="/workouts" replace>
                    {" "}
                    Free Workouts
                  </Link> */}
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CustomWorkoutStartButtonComponent;
