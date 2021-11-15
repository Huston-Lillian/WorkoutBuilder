import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import WorkoutComponent from "./components/WorkoutComponent";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import HomepageComponent from "./components/homepage/homepage";
import WorkoutsComponent from "./components/workouts";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/workouts" element={<WorkoutsComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
