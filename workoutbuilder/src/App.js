import logo from "./logo.svg";
import "./App.css";
import WorkoutComponent from "./components/WorkoutComponent";
import background1 from "./pics/background1.jpg";
import background2 from "./pics/background2.jpg";
import background3 from "./pics/background3.jpg";
import background4 from "./pics/background4.jpeg";
import background5 from "./pics/background5.jpeg";
import background6 from "./pics/background6.jpeg";

function App() {
  return (
    <div>
      {/* <header className="App-header"> */}
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">
            uFit
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>

          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br></br>
            <div class="row center">
              <h1 class="header col s4 teal-text text-lighten-2">
                uFit Workouts
              </h1>
            </div>
            {/* <div class="row center">
              <h5 class="header col s4 light">
                I've compiled a list of the best most enjoyable free workouts.
                Developed a one of a kind custom workout builder. Documented my
                expertise on achieving a sustainable fit and healthy lifestyle
                just for you!
              </h5>
            </div> */}
            <div class="row center">
              <div class="header col l4 light">
                <a
                  href="http://materializecss.com/getting-started.html"
                  id="download-button"
                  class="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  Free Workouts
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
              <div class="row center">
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
                  I development a tool that allows you to create your own custom
                  circuit workouts. I've also provided several workouts for you
                  to try.
                </p>
              </div>
              <div class="row center">
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

              <div class="row center">
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
                lifestyle without sacrificing your happiness". - Danny G.
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
              <h4>Welcome to uFit Workouts!</h4>
              <p class="left-align light">
                Congratulations! You have what it takes to be a fitness
                champion! My goal is to help guide you on your fitness journey!
                uFit Workouts is a fitness hub where you can easily access a
                broad range of free workout videos, my custom workouts, and the
                most accurate fitness tips on the internet!
                {/* <ul>
                  <ol>Set a goal</ol>
                  <ol>Calculate your TDEE</ol>
                  <ol>Calculate your daily protein intake</ol>
                  <ol>Count/estimate your daily caloric intake</ol>
                  <ol>Train for strenght</ol>
                  <ol>Avoid processed foods</ol>
                  <ol>Get enough rest and sleep</ol>
                </ul> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center grey seeThrough darken-4">
              <h5 class="text-white header col s12">
                Healthy is an outfit that looks different on everybody!
              </h5>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img src={background6} alt="Unsplashed background img 3" />
        </div>
      </div>

      <footer class="page-footer teal">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">About Me</h5>
              <p class="grey-text text-lighten-4">
                My name is Daniel Garza and I'm a software engineer with a
                passion for fitness.
              </p>
            </div>
            {/* <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div> */}
            <div class="col l3 s12">
              <h5 class="white-text">Connect</h5>
              <ul>
                <li>
                  <a class="white-text" href="#!">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    <i class="fa fa-instagram"></i>{" "}
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    <i class="fa fa-github"></i>{" "}
                  </a>
                </li>
                <li>
                  <a class="white-text" href="#!">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            Made by{" "}
            <a
              class="brown-text text-lighten-3"
              href="http://materializecss.com"
            >
              Daniel G.
            </a>
          </div>
        </div>
      </footer>
      {/* </header> */}
    </div>
  );
}

export default App;
