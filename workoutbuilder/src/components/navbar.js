import React from "react";

function NavbarComponent() {
  return (
    <React.Fragment>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#/workouts">Workouts</a>
        </li>
        <li>
          <a href="#/builder">Workout Builder</a>
        </li>
        <li>
          <a href="#/customWorkouts">Custom Workouts</a>
        </li>
        <li>
          <a href="#/myadvice">My Fitness Advice</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="/WorkoutBuilder">Home</a>
        </li>
      </ul>
      <nav>
        <div className=" white nav-wrapper" role="navigation">
          <div className="nav-wrapper container">
            <a
              id="logo-container"
              href="/WorkoutBuilder"
              className="brand-logo"
            >
              uFit
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Menu<i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="/WorkoutBuilder">Home</a>
              </li>
              <li>
                <a href="#/workouts">Workouts</a>
              </li>
              <li>
                <a href="#/builder">Workout Builder</a>
              </li>
              <li>
                <a href="#/customWorkouts">Custom Workouts</a>
              </li>
              <li>
                <a href="#/myadvice">My Fitness Advice</a>
              </li>
            </ul>
            <a
              href="/WorkoutBuilder"
              data-target="nav-mobile"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </div>
      </nav>
      {/* <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            uFit
          </a>
          <ul className="right">
            <li>
              <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                Menu<i className="material-icons right">arrow_drop_down</i>
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="#">Menu</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav> */}
    </React.Fragment>
  );
}

export default NavbarComponent;
