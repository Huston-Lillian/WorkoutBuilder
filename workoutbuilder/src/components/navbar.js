import React from "react";

function NavbarComponent() {
  return (
    <React.Fragment>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="/workouts">Workouts</a>
        </li>
        <li>
          <a href="#!">Fitness Adive</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
      <nav>
        <div class=" white nav-wrapper" role="navigation">
          <div class="nav-wrapper container">
            <a id="logo-container" href="/" class="brand-logo">
              uFit
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                  Menu<i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>

            <ul id="nav-mobile" class="sidenav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/workouts">Workouts</a>
              </li>
              <li>
                <a href="#!">Fitness Adive</a>
              </li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
          </div>
        </div>
      </nav>
      {/* <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">
            uFit
          </a>
          <ul class="right">
            <li>
              <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                Menu<i class="material-icons right">arrow_drop_down</i>
              </a>
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
      </nav> */}
    </React.Fragment>
  );
}

export default NavbarComponent;
