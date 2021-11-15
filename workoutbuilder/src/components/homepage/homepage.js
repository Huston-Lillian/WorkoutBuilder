import React from "react";
import { Link } from "react-router-dom";
import background4 from "../../pics/background4.jpeg";
import background5 from "../../pics/background5.jpeg";
import background6 from "../../pics/background6.jpeg";

function HomepageComponent() {
  return (
    <React.Fragment>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            <div class="row center">
              <h1 class="header col s4 teal-text text-lighten-2">
                uFit Workouts
              </h1>
            </div>
            <div class="row center">
              <div class="header col l4 light">
                <a
                  id="download-button"
                  class="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  <Link class="white-text" to="/workouts" replace>
                    {" "}
                    Free Workouts
                  </Link>
                </a>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img src={background4} alt="Unsplashed background img 1" />
        </div>
      </div>
      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4">
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
                    href="http://materializecss.com/getting-started.html"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    Free Workouts
                  </a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">build</i>
                </h2>
                <h5 class="center">Workout Builder</h5>

                <p class="light">
                  I developed a tool that allows you to create your own custom
                  circuit workouts. I've also provided several workouts for you
                  to try. The tool you need to find a workout that actually
                  works for you!
                </p>
              </div>
              <div class="s12 m4 center">
                <div class="light">
                  <a
                    href="http://materializecss.com/getting-started.html"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    Workout Builder
                  </a>
                </div>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">directions</i>
                </h2>
                <h5 class="center">Need Fitness Advice?</h5>

                <p class="light">
                  Here you can find information on your TDEE, the importance of
                  protein, calorie deficits, the effects of alcohol, menstrual
                  cycle and menopause, the importance of rest and asleep, and
                  more.
                </p>
              </div>

              <div class="s12 m4 center">
                <div class="light">
                  <a
                    href="http://materializecss.com/getting-started.html"
                    id="download-button"
                    class="btn btn-large waves-effect waves-light teal lighten-1"
                  >
                    Fitness Tips
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <div className="col l6" />
              <h5 class="header col s12 l4 light">
                "My goal is to help you live a sustainable healthy active
                lifestyle without sacrificing your happiness."
                <br></br>
                Danny G.
              </h5>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img src={background5} alt="Unsplashed background img 2" />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <h4>uFit Nutrition</h4>
              <p class="left-align light">
                Congratulations! You have what it takes to be a fitness
                champion! My goal is to help guide you on your fitness journey!
                uFit Workouts is a fitness hub where you can easily access a
                broad range of free workout videos, my custom workouts, and the
                most accurate fitness tips on the internet!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="container ">
          <div class="row center">
            <div class="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons large">adjust</i>
                </h2>
                <h5 class="center">Calorie Deficits</h5>

                <p class="light">
                  I've compiled the best, most effective and enjoyable free
                  workouts to help you on your fitness journey. You'll be able
                  to easily access a great catalog of free workouts on YouTube
                  here at uFit.
                </p>
              </div>
            </div>
            <div class="col m1" />
            <div class="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">battery_charging_full</i>
                </h2>
                <h5 class="center">Protein</h5>

                <p class="light">
                  I developed a tool that allows you to create your own custom
                  circuit workouts. I've also provided several workouts for you
                  to try. The tool you need to find a workout that actually
                  works for you!
                </p>
              </div>
            </div>
            <div class="col m1" />

            <div class="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div class="icon-block">
                <h2 class="center brown-text">
                  <i class="material-icons">sentiment_very_satisfied</i>
                </h2>
                <h5 class="center">Healthy Menu</h5>

                <p class="light">
                  Here you can find information on your TDEE, the importance of
                  protein, calorie deficits, the effects of alcohol, menstrual
                  cycle and menopause, the importance of rest and asleep, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img src={background6} alt="Unsplashed background img 3" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomepageComponent;
