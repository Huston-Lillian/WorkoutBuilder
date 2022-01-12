import React from "react";
import { Link } from "react-router-dom";
import WorkoutComponent from "./WorkoutComponent";
import abs2 from "../pics/abs2.jpeg";
import stretching from "../pics/stretching.jpeg";
import upperBody from "../pics/upperBody.jpeg";
import background8 from "../pics/background8.jpeg";
import { pageview } from "../constants/analytics";

import legs from "../pics/legs.jpeg";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

function CustomWorkoutsComponent() {
  window.scrollTo(0, 0);
  pageview("Custom Workouts", window.location.pathname + "#/customWorkouts");
  return (
    <React.Fragment>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            {/* <div className="row center">
              <h3 className="header col s4 m3 blue-grey lighten-5 seeThroughWorkouts black-text">
                THIS IS YOUR GYM
              </h3>
            </div> */}
            <br></br>
          </div>
        </div>
        <div className="parallax">
          <img
            src={background8}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s5 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m5 center">
                <div className="light">
                  <img
                    className="bodyProjectImg circlePic"
                    src={abs2}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div className="col s7 m6">
              <div className="row center">
                <h3 className="black-text">Amrap Ab Workout</h3>
                <h5 className="black-text">15 minutes. Try it!</h5>
                <div className="light">
                  <span
                    //href="/workoutScreen/0"
                    id="download-button"
                    className="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link className="white-text" to="/workoutScreen/0">
                      {" "}
                      Start Workout
                    </Link>
                  </span>
                </div>
              </div>
              {/* <div className="col s4 m8">
                <i className="material-icons large ">navigate_before</i>
              </div>
              <div className="col s4 m1"></div>
              <div className="col s4 m3">
                <i className="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s5 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m5 center">
                <div className="light">
                  <img
                    className="bodyProjectImg circlePic"
                    src={legs}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div className="col s7 m6">
              <div className="row center">
                <h3 className="black-text">Lower Body Workout</h3>
                <h5 className="black-text">16 minutes. Try it!</h5>
                <div className="light">
                  <a
                    //href="/workoutScreen/1"
                    id="download-button"
                    className="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link className="white-text" to="/workoutScreen/1">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div className="col s4 m8">
                <i className="material-icons large ">navigate_before</i>
              </div>
              <div className="col s4 m1"></div>
              <div className="col s4 m3">
                <i className="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s5 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m5 center">
                <div className="light">
                  <img
                    className="bodyProjectImg circlePic"
                    src={stretching}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div className="col s7 m6">
              <div className="row center">
                <h3 className="black-text">Stretching</h3>
                <h5 className="black-text">7 minutes. Try it!</h5>
                <div className="light">
                  <a
                    //href="/workoutScreen/2"
                    id="download-button"
                    className="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link className="white-text" to="/workoutScreen/2">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div className="col s4 m8">
                <i className="material-icons large ">navigate_before</i>
              </div>
              <div className="col s4 m1"></div>
              <div className="col s4 m3">
                <i className="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s5 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m5 center">
                <div className="light">
                  <img
                    className="bodyProjectImg circlePic"
                    src={upperBody}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div className="col s7 m6">
              <div className="row center">
                <h3 className="black-text">Full Body Workout</h3>
                <h5 className="black-text">22 minutes. Try it!</h5>
                <div className="light">
                  <a
                    // href="/workoutScreen/3"
                    id="download-button"
                    className="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link className="white-text" to="/workoutScreen/3">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div className="col s4 m8">
                <i className="material-icons large ">navigate_before</i>
              </div>
              <div className="col s4 m1"></div>
              <div className="col s4 m3">
                <i className="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={stretching} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Stretching<i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Stretching<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={abs} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Extreme Abs<i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Extreme Abs<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={upperBody} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Upper Body Cardio
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Upper Body Cardio<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m3">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={lowerBody} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    Lower Body Cardio
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Lower Body Cardio<i className="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default CustomWorkoutsComponent;
