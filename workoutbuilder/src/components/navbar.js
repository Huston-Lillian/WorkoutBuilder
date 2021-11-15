import React from "react";

function NavbarComponent() {
  return (
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
  );
}

export default NavbarComponent;
