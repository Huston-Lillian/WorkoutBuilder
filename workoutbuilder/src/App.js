import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import WorkoutComponent from "./components/WorkoutComponent";
import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import HomepageComponent from "./components/homepage/homepage";
import WorkoutsComponent from "./components/workouts";
import CustomWorkoutsComponent from "./components/customWorkout";
import WorkoutScreenComponent from "./components/workoutScreen";
import MyAdviceComponent from "./components/myadvice";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/workouts" element={<WorkoutsComponent />} />
          <Route path="/customWorkouts" element={<CustomWorkoutsComponent />} />
          <Route
            path="/workoutScreen/:id"
            element={<WorkoutScreenComponent />}
          />
          <Route path="/myadvice" element={<MyAdviceComponent />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
