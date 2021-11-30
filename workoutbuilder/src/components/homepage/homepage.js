import React from "react";
import { Link } from "react-router-dom";
import background4 from "../../pics/background4.jpeg";
import background5 from "../../pics/background5.jpeg";
import background6 from "../../pics/background6.jpeg";
import free from "../../pics/free.png";
import custom from "../../pics/custom.png";
import advice from "../../pics/advice.png";
import build from "../../pics/build.png";
import experts from "../../pics/fitness_experts.png";

const styles = {
  transform: `translate3d(-50%, 309.727px, 0px)`,
  opacity: 1
};

function HomepageComponent() {
  return (
    <React.Fragment>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <div className="row center">
              <h1 className="center header col s6 l4 teal-text text-lighten-2">
                uFit Workouts
              </h1>
            </div>
            <div className="row center">
              <div className="header col l4 light">
                <a
                  href="#/workouts"
                  id="download-button"
                  className="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  Free Workouts
                  {/* <Link className="white-text" to="/workouts" replace>
                    {" "}
                    Free Workouts
                  </Link> */}
                </a>
              </div>
            </div>
            <br></br>
          </div>
        </div>
        <div className="parallax">
          <img
            src={background4}
            alt="Unsplashed background img 1"
            style={styles}
          />
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m3 center">
                <div className="light">
                  <a href="#/workouts">
                    <img
                      className="cheatMeal circlePic"
                      src={free}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row center">
                <h3 className="black-text">
                  {" "}
                  <a className="teal-text text-lighten-2" href="#/workouts">
                    FREE Workouts
                  </a>
                </h3>{" "}
                <h5 className="black-text">
                  I've compiled the best, most effective and enjoyable free
                  workouts to help you on your fitness journey. You'll be able
                  to easily access a great catalog of free workouts on YouTube
                  here at uFit.
                </h5>
                <div className="s12 m4 center">
                  <div className="light">
                    <a
                      href="#/workouts"
                      id="download-button"
                      className="btn btn-large waves-effect waves-light teal lighten-1"
                    >
                      Free Workouts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m3 center">
                <div className="light">
                  <a href="#/builder">
                    <img
                      className="cheatMeal circlePic"
                      src={build}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row center">
                <h3 className="black-text">
                  {" "}
                  <a className="teal-text text-lighten-2" href="#/builder">
                    Workout Builder
                  </a>
                </h3>
                <h5 className="black-text">
                  <p>
                    I developed a tool to help you design and create your own
                    custom circuit workouts.
                  </p>
                </h5>
                <div className="s12 m4 center">
                  <div className="light">
                    <a
                      href="#/builder"
                      id="download-button"
                      className="btn btn-large waves-effect waves-light teal lighten-1"
                    >
                      Workout Builder
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m3 center">
                <div className="light">
                  <a href="#/customWorkouts">
                    <img
                      className="cheatMeal circlePic"
                      src={custom}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row center">
                <h3 className="black-text">
                  {" "}
                  <a
                    className="teal-text text-lighten-2"
                    href="#/customWorkouts"
                  >
                    Custom Workouts
                  </a>
                </h3>
                <h5 className="black-text">
                  <p>
                    I've created several workouts for you to try using my
                    Workout Builder tool.
                  </p>
                </h5>
                <div className="s12 m4 center">
                  <div className="light">
                    <a
                      href="#/customWorkouts"
                      id="download-button"
                      className="btn btn-large waves-effect waves-light teal lighten-1"
                    >
                      Custom Workouts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m3 center">
                <div className="light">
                  <a href="#/myadvice">
                    <img
                      className="cheatMeal circlePic"
                      src={advice}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row center">
                <h3 className="black-text">
                  <a className="teal-text text-lighten-2" href="#/myadvice">
                    Fitness Advice
                  </a>
                </h3>
                <h5 className="black-text">
                  Here you can find information on your TDEE, the importance of
                  protein, calorie deficits, the effects of alcohol, the
                  importance of rest and asleep, and more.
                </h5>
                <div className="s12 m4 center">
                  <div className="light">
                    <a
                      href="#/myadvice"
                      id="download-button"
                      className="btn btn-large waves-effect waves-light teal lighten-1"
                    >
                      Fitness Advice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4 customWorkoutImg">
              <div className="icon-block">
                <h5 className="center"></h5>
              </div>
              <div className="s4 m3 center">
                <div className="light">
                  <a href="#/fitnessGurus">
                    <img
                      className="cheatMeal circlePic"
                      src={experts}
                      alt="Unsplashed background img 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="row center">
                <h3 className="black-text">
                  <a className="teal-text text-lighten-2" href="#/fitnessGurus">
                    Fitness Experts
                  </a>
                </h3>
                <h5 className="black-text">
                  List of the most influential fitness experts I follow and how
                  they have helped me on my fitness journey.
                </h5>
                <div className="s12 m4 center">
                  <div className="light">
                    <a
                      href="#/fitnessGurus"
                      id="download-button"
                      className="btn btn-large waves-effect waves-light teal lighten-1"
                    >
                      Fitness Experts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
          <div className="container">
            <div className="row center">
              <div className="col l6" />
              <h5 className="header col s12 l4 light">
                "My goal is to help you live a sustainable healthy and active
                lifestyle without sacrificing your happiness."
                <br></br>
                Dan "The Realest" Man
              </h5>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img
            src={background5}
            alt="Unsplashed background img 2"
            style={styles}
          />
        </div>
      </div>

      {/* <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3>
                <i className="mdi-content-send brown-text"></i>
              </h3>
              <h4>uFit Nutrition</h4>
              <p className="left-align light">
                Congratulations! You have what it takes to be a fitness
                champion! My goal is to help guide you on your fitness journey!
                uFit Nutrition gives you the information needed to find a
                sustainable menu that is both delicious and nutriotious. No fad
                diets or no meal plans, you decide what best fits your
                lifestyle. The key is to become aware of the macronutrients and
                caloric content of the foods we consume. I've developed a tool
                to help you calculate total calories of a meal based on a common
                list of ingredients. Explore topics such as Calorie Deficits,
                Alcohol and Training, Calorie Cycling, Cheat Days, and more.
                uFit Workouts is a fitness hub where you can easily access a
                broad range of free workout videos, my custom workouts, and the
                most accurate fitness tips on the internet! 
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="parallax-container valign-wrapper">
        <div className="container ">
          <div className="row center">
            <div className="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons large">adjust</i>
                </h2>
                <h5 className="center">Calorie Deficits</h5>

                <p className="light">
                  The key to weight loss is understanding the energy balance
                  equation, that is, calories in vs. calories out. In order to
                  be in a caloric deficit, calories burnt ...Learn more.
                </p>
              </div>
            </div>
            <div className="col m1" />
            <div className="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">battery_charging_full</i>
                </h2>
                <h5 className="center">Protein</h5>

                <p className="light">
                  Eating a protein-rich diet can help people lose weight because
                  it can help them avoid overeating. A high protein diet can
                  help build lean muscle when combined with exercise ...Learn
                  more
                </p>
              </div>
            </div>
            <div className="col m1" />

            <div className="col s12 m3 grey seeThrough darken-4 paddingBottom">
              <div className="icon-block">
                <h2 className="center brown-text">
                  <i className="material-icons">sentiment_very_satisfied</i>
                </h2>
                <h5 className="center">Healthy Menu</h5>

                <p className="light">
                  Emphasizes vegetables, fruits, whole grains, and fat-free or
                  low-fat dairy products. Includes lean meats, poultry, fish,
                  beans, eggs, and nuts...Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={background6} alt="Unsplashed background img 3" />
        </div>
      </div> */}
    </React.Fragment>
  );
}

export default HomepageComponent;
