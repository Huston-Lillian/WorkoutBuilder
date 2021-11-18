import React from "react";
import { Link } from "react-router-dom";
import calories from "../pics/calories.png";
import me from "../pics/me.png";
import protein from "../pics/protein.jpeg";
import active from "../pics/active.jpeg";
import nutritionBanner from "../pics/nutritionBanner.jpeg";

const styles = {
  transform: `translate3d(-50%, 298.213px, 0px)`,
  opacity: 1
};

function MyAdviceComponent() {
  return (
    <React.Fragment>
      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            <div class="row center">
              <h3 class="header col s5 m3 blue-grey lighten-5 seeThroughWorkouts black-text">
                MY ADVICE TO YOU
              </h3>
            </div>
            <br></br>
          </div>
        </div>
        <div class="parallax">
          <img
            src={nutritionBanner}
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
                    src={me}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6 customWorkoutImg">
              <div class="row center">
                <h4 class="black-text">
                  "The key to a sustainable healthy lifestyle is understanding
                  your body and doing what works best for you."{" "}
                  <h5 class="teal-text text-darken-2"> Daniel Garza</h5>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <div class="s4 m5 center">
                  <div class="light">
                    <img
                      class="bodyProjectImg circlePic"
                      src={calories}
                      alt="Unsplashed background img 1"
                    />
                  </div>
                </div>
                <h5 class="center">Calories In - Calories Out</h5>
                <h7 class="black-text">
                  Whether you are trying to lose weight or build muscle, I
                  recommend calculating your total daily energy expendenture
                  (TDEE).
                </h7>
                <p class="light">
                  I suggest calculating it using several websites and then
                  computing the average. If your goal is to lose weight,
                  calories burned must greater than calories consumed. If your
                  goal is to build muscle, calories consumed must be greater
                  than calories burned.{" "}
                </p>
                <h7> Free TDEE Calculators:</h7>
                <p>
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
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <div class="s4 m5 center">
                  <div class="light">
                    <img
                      class="bodyProjectImg circlePic"
                      src={protein}
                      alt="Unsplashed background img 1"
                    />
                  </div>
                </div>
                <h5 class="center">High Protein Diet</h5>
                <h7 class="black-text">
                  Proteins are the main building blocks of our bodies and they
                  provide a plethora of benefits. Eating a high protein diet can
                  help you lose weight by keeping you full and reducing your
                  appetite.
                </h7>
                <p class="light">
                  Protein boots metabolism and increases fat burning because it
                  has a high thermic effect of food (TEF). A hight protein diet
                  can increase muscle mass and strenght when combined with
                  strenght training. To build muscle, the body must synthesize
                  more muscle protein than it breaks down, so your body must be
                  at a protein surplus. It is recommended to consume around .08
                  to 1 gram of protein per your pound body weight.
                </p>
                <h7> Free Protein Intake Calculators:</h7>
                <p>
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
                </p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <div class="s4 m5 center">
                  <div class="light">
                    <img
                      class="bodyProjectImg circlePic"
                      src={active}
                      alt="Unsplashed background img 1"
                    />
                  </div>
                </div>
                <h5 class="center">Be and Stay Active</h5>
                <h7 class="black-text">
                  Exercise feels great. Your workout should be enjoyable.
                </h7>
                <p class="light">
                  Protein boots metabolism and increases fat burning because it
                  has a high thermic effect of food (TEF). A hight protein diet
                  can increase muscle mass and strenght when combined with
                  strenght training. To build muscle, the body must synthesize
                  more muscle protein than it breaks down, so your body must be
                  at a protein surplus. It is recommended to consume around .08
                  to 1 gram of protein per your pound body weight.
                </p>
                <h7> Free Protein Intake Calculators:</h7>
                <p>
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
                    src={calories}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Calories In - Calories Out</h3>
                <h5 class="black-text">
                  I recommend calculating your total daily energy expendenture
                  (TDEE).
                </h5>

                <h5>
                  I suggest calculating it using several websites and then
                  computing the average.
                </h5>
                <h5>Weight loss = calories out > calories in</h5>
                <h5>Muscle gain = calories in > calories out</h5>

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
            <div class="col s5 m4 customWorkoutImg">
              <div class="icon-block">
                <h5 class="center"></h5>
              </div>
              <div class="s4 m5 center">
                <div class="light">
                  <img
                    class="bodyProjectImg circlePic"
                    src={protein}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Hight Protein Diet</h3>
                <h5 class="black-text">
                  Proteins are the main building blocks of our bodies and they
                  provide a plethora of benefits. Eating a high protein diet can
                  help you lose weight by keeping you full and reducing your
                  appetite.
                </h5>

                <h5 class="light">
                  Protein boots metabolism and increases fat burning because it
                  has a high thermic effect of food (TEF). A hight protein diet
                  can increase muscle mass and strenght when combined with
                  strenght training. To build muscle, the body must synthesize
                  more muscle protein than it breaks down, so your body must be
                  at a protein surplus. It is recommended to consume around .08
                  to 1 gram of protein per your pound body weight.
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
              </div>
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
                    src={active}
                    alt="Unsplashed background img 1"
                  />
                </div>
              </div>
            </div>
            <div class="col s7 m6">
              <div class="row center">
                <h3 class="black-text">Be and Stay Active</h3>
                <h5 class="black-text">
                  Exercise feels great. Your workout should be challenging but
                  enjoyable. Reevaluate your workouts and do what works best for
                  you!
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
