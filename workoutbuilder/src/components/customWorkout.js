import React from "react";
import WorkoutComponent from "./WorkoutComponent";
import abs from "../pics/abs.jpeg";
import lowerBody from "../pics/lowerBody.jpeg";
import stretching from "../pics/stretching.jpeg";
import upperBody from "../pics/upperBody.jpeg";
import background8 from "../pics/background8.jpeg";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
};

function CustomWorkoutsComponent() {
  return (
    <React.Fragment>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            <div class="row center">
              <h3 class=" blue-grey lighten-5 seeThroughWorkouts  col s6 black-text">
                THIS IS YOUR GYM!
              </h3>
            </div>
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
            {/* <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons large">money_off</i>
                </h2>
                <h5 class="center">Free Online Workouts</h5>

                <p class="light">
                  I've compiled the best, most effective and enjoyable free
                  workouts to help you on your fitness journey. You'll be able
                  to easily access a great catalog of free workouts on YouTube
                  here at uFit.
                </p>
              </div>
              <div class="s12 m4 center">
                <div class="light">
                  <a
                    href="/workouts"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    Free Workouts
                  </a>
                </div>
              </div>
            </div> */}

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
      </div>
    </React.Fragment>
  );
}

export default CustomWorkoutsComponent;
