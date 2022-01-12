import React from "react";
import { Link } from "react-router-dom";
import calories from "../pics/calories.png";
import me from "../pics/me.png";
import protein from "../pics/protein.jpeg";
import active from "../pics/active.jpeg";
import nutritionBanner from "../pics/nutritionBanner.jpeg";
import background12 from "../pics/background12.jpeg";
import lowCal from "../pics/lowCalorie.png";

import water from "../pics/water.png";
import sleep from "../pics/sleep.jpeg";
import food from "../pics/food.jpeg";
import alcohol from "../pics/alcohol.png";
import cheatMeal from "../pics/cheatMeal.jpeg";
import calorieCycle from "../pics/calorieCycle.png";
import { pageview } from "../constants/analytics";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1,
};

function MyAdviceComponent() {
  window.scrollTo(0, 0);
  pageview("My Advice", window.location.pathname + "#/myadvice");
  return (
    <React.Fragment>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            {/* <div class="row center">
              <h3 class="header col s5 m3 blue-grey lighten-5 seeThroughWorkouts black-text">
                MY ADVICE TO YOU
              </h3>
            </div> */}
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img
            src={background12}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="meAdviceImg circlePic"
                    src={me}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6 customWorkoutImg">
              <div class="row center">
                <h4 class="black-text">
                  "The key to a sustainable healthy lifestyle is understanding
                  your body and finding exercises you enjoy."{" "}
                  <h5 class="teal-text text-darken-2"> Daniel Garza</h5>
                </h4>
                <a
                  href="#/aboutMe"
                  id="download-button"
                  className="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  My Fitness Journey
                  {/* <Link className="white-text" to="/workouts" replace>
                    {" "}
                    Free Workouts
                  </Link> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="adviceImg circlePic"
                    src={calories}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col 12 m6">
              <div class="row center">
                <h3 class="black-text">Calories In - Calories Out</h3>
                <h5 class="black-text">
                  I recommend calculating your total daily energy expendenture
                  (TDEE). I suggest computing the average from several sites.
                </h5>

                <h5 class="light">
                  To lose weight, you must burn more calories than you consume.
                  This is referred to as a calorie deficit.
                </h5>
                <h5 class="light">
                  To gain weight, you must consume more calories than you burn.
                  This is referred to as a calorie surplus.
                </h5>

                <h5> Free TDEE Calculators:</h5>
                <h5>
                  <ul>
                    <li>
                      <a href="https://tdeecalculator.net/">TDEE Calculator</a>
                    </li>
                    <li>
                      <a href="https://www.calculator.net/tdee-calculator.html">
                        TDEE-Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://calculator-online.net/tdee-calculator/">
                        The TDEE Calculator
                      </a>
                    </li>
                  </ul>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="foodImg circlePic"
                    src={food}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Healthier Choices</h3>
                <h5 class="black-text">
                  I strongly recommend avoiding processed foods. They are highly
                  caloric and lack macronutrients. Instead, make it a priority
                  to consume single ingredient foods. I encourage you to track
                  your weekly calorie intake and compare it to your TDEE.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="lowCalImg circlePic"
                    src={lowCal}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Low Calorie Snacks</h3>
                <h5 class="black-text">
                  I strongly encourage you to find healthier, low calorie
                  options for your preferred snacks and cravings. I eat a lot of
                  fruit because it is sweet, easy to digest, and very low in
                  calories. I also eat popcorn, rice cakes, and low calorie ice
                  cream.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="proteinImg circlePic center"
                    src={protein}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">High Protein Diet</h3>
                <h5 class="black-text">
                  Proteins are the main building blocks of our bodies and they
                  provide a plethora of benefits.
                </h5>
                <h5 class="light">
                  Eating a high protein diet can help you lose weight by keeping
                  you full and reducing your appetite.
                </h5>
                <h5 class="light">
                  To build muscle, the body must synthesize more muscle protein
                  than it breaks down, so your body must be at a protein
                  surplus.
                </h5>
                <h5 class="light">
                  {" "}
                  A high protein diet can increase muscle mass when combined
                  with strength training.{" "}
                </h5>{" "}
                <h5 class="light">
                  {" "}
                  It is recommended to consume around .08 to 1 gram of protein
                  per pound body weight.
                </h5>
                <h5> Free Protein Intake Calculators:</h5>
                <h5>
                  <ul>
                    <li>
                      <a href="https://www.calculator.net/protein-calculator.html">
                        Protein Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://examine.com/nutrition/protein-intake-calculator/">
                        Examine Protein Calculator
                      </a>
                    </li>
                    <li>
                      <a href="https://www.bodybuilding.com/fun/calpro.htm">
                        Bodybuilding Protein Calculator
                      </a>
                    </li>
                  </ul>
                </h5>
                <a
                  href="#/proteinProducts"
                  id="download-button"
                  className="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  My Favorite Protein Products
                  {/* <Link className="white-text" to="/workouts" replace>
                    {" "}
                    Free Workouts
                  </Link> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="calorieCycleIcon circlePic"
                    src={calorieCycle}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Calorie Cycling</h3>
                <h5 class="black-text">
                  The practice of alternating days of low-calorie intake with
                  days of no diet restrictions. I personally do calorie cycling
                  Monday through Friday and enjoy weekends without restrictions.
                  This does not mean overeating. I track these calories to
                  ensure I get to a weekly deficit. This allows me to enjoy all
                  the snacks and foods I love and crave. Make sure to track your
                  intake and stick to your desired calorie range for optimal
                  results.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="activeImg circlePic"
                    src={active}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Be and Stay Active</h3>
                <h5 class="black-text">
                  Exercise feels great. Your workouts should be challenging but
                  enjoyable. Reevaluate your workouts and do what works best for
                  you!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="activeImg circlePic"
                    src={water}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Stay Hydrated</h3>
                <h5 class="black-text">
                  Water may suppress your appetite, boost your metabolism, and
                  make exercise easier and more efficient, all of which could
                  contribute to results on the scale. Women should drink 11.5
                  cups (2.7 liters) per day. Men should drink 15.5 cups (3.7
                  liters) a day.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="sleepImg circlePic"
                    src={sleep}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Rest and Sleep</h3>
                <h5 class="black-text">
                  Rest days allow your muscles to rebuild and grow. I recommend
                  walking and streching on rest days to stay active. Your body
                  generally needs less calories on such days. Sleep is crucial
                  to recharge from our daily lives and helps us maintain our
                  habits. Sleep is one of my top priorities.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="alcoholImg circlePic"
                    src={alcohol}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Limit Alcohol</h3>
                <h5 class="black-text">
                  Alcohol is burned first as a fuel source before your body can
                  use food as fuel.{" "}
                </h5>
                <h5 class="light">
                  {" "}
                  When your body uses alcohol as a primary source of energy, the
                  excess food ends up as fat.
                </h5>
                <h5 class="light">
                  {" "}
                  We tend to indulge in delicious unhealthy choices while we
                  drink, making the situation worse.
                </h5>
                <h5 class="light">
                  Alcohol also direcly affects your REM sleep.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m3 center">
                <div class="light">
                  <img
                    class="cheatMeal circlePic"
                    src={cheatMeal}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="row center">
                <h3 class="black-text">Enjoy Life!</h3>
                <h5 class="black-text">
                  We're here for a good time, not for a long time.{" "}
                </h5>
                <h5 class="light">
                  {" "}
                  Enjoy the food and drinks that come with social events in
                  moderation or without moderation. You can always adjust your
                  calorie intake plan later.
                </h5>
                <h5 class="light">
                  {" "}
                  Remember that nobody cares more about your body and body image
                  than you do.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyAdviceComponent;
