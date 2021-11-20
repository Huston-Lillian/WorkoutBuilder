import React from "react";
import { Link } from "react-router-dom";
import WorkoutComponent from "./WorkoutComponent";
import abs2 from "../pics/abs2.jpeg";
import lowerBody from "../pics/lowerBody.jpeg";
import stretching from "../pics/stretching.jpeg";
import upperBody from "../pics/upperBody.jpeg";
import background8 from "../pics/background8.jpeg";
import legs from "../pics/legs.jpeg";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
};

function CustomWorkoutsComponent() {
  window.scrollTo(0, 0);
  return (
    <React.Fragment>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            {/* <div class="row center">
              <h3 class="header col s4 m3 blue-grey lighten-5 seeThroughWorkouts black-text">
                THIS IS YOUR GYM
              </h3>
            </div> */}
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img
            src={background8}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s5 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={abs2}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Amrap Ab Workout</h3>
                <h5 class="black-text">15 minutes. Try it!</h5>
                <div class="light">
                  <a
                    //href="/workoutScreen/0"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link class="white-text" to="/workoutScreen/0">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s5 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={legs}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Lower Body Workout</h3>
                <h5 class="black-text">16 minutes. Try it!</h5>
                <div class="light">
                  <a
                    //href="/workoutScreen/1"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link class="white-text" to="/workoutScreen/1">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s5 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={stretching}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Stretching</h3>
                <h5 class="black-text">8 minutes. Try it!</h5>
                <div class="light">
                  <a
                    //href="/workoutScreen/2"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link class="white-text" to="/workoutScreen/2">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s5 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={upperBody}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Full Body Workout</h3>
                <h5 class="black-text">22 minutes. Try it!</h5>
                <div class="light">
                  <a
                    // href="/workoutScreen/3"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    <Link class="white-text" to="/workoutScreen/3">
                      {" "}
                      Start Workout
                    </Link>
                  </a>
                </div>
              </div>
              {/* <div class="col s4 m8">
                <i class="material-icons large ">navigate_before</i>
              </div>
              <div class="col s4 m1"></div>
              <div class="col s4 m3">
                <i class="material-icons large ">navigate_next</i>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={stretching} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Stretching<i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Stretching<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={abs} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Extreme Abs<i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Extreme Abs<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={upperBody} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Upper Body Cardio
                    <i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Upper Body Cardio<i class="material-icons right">close</i>
                  </span>
                  <p>
                    Here is some more information about this product that is
                    only revealed once clicked on.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m3">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={lowerBody} />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Lower Body Cardio
                    <i class="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a href="/workoutScreen">Start Workout</a>
                  </p>
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Lower Body Cardio<i class="material-icons right">close</i>
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
