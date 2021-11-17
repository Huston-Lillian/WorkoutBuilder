import React, { Component } from "react";
import { exerciseObj } from "../constants/Workouts";

class WorkoutComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      done: false,
      paused: false,
      exerciseName: "",
      nextExercise: "",
      timeLoop: () => {}
    };
    this.intervalID = 0;
    this.exerciseLoop = this.exerciseLoop.bind(this);
    this.finish = this.finish.bind(this);
    this.pause = this.pause.bind(this);
  }

  exerciseLoop() {
    clearInterval(this.intervalID);

    this.setState({
      done: false,
      paused: false
    });
    let i = 0;
    let y = exerciseObj[i].timeInSeconds;
    let yMin = Math.floor(y / 60);
    let ySec = y % 60;
    let hours = 0;
    let minutes = 0;
    let seconds = -1;
    this.intervalID = setInterval(() => {
      let { done, paused } = this.state;
      //Your code
      if (done) {
        clearInterval(this.intervalID);
        this.setState({
          totalTime: hours + ": " + minutes + " : " + seconds,
          done: false,
          paused: false,
          timeLoop: () => {}
        });
        this.intervalID = 0;
        return;
      } else if (paused) {
      } else if (!paused) {
        if (y === 0 && i + 1 < exerciseObj.length) {
          i++;
          y = exerciseObj[i].timeInSeconds;
          yMin = Math.floor(y / 60);
          ySec = y % 60;
        } else if (i === exerciseObj.length - 1 && y === 0) {
          i = 0;
          y = exerciseObj[i].timeInSeconds;
          yMin = Math.floor(y / 60);
          ySec = y % 60;
        }
        this.setState({
          nextExercise: exerciseObj[i + 1]
            ? exerciseObj[i + 1].exerciseName
            : "",
          exerciseName: exerciseObj[i].exerciseName,
          timeRemaining: yMin + ":  " + ySec + " remaining"
        });
        y--;
        yMin = Math.floor(y / 60);
        ySec = y % 60;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        this.setState({
          totalTime: hours + ": " + minutes + ": " + seconds
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  finish() {
    this.setState({
      done: true,
      exerciseName: "REST IT OUT!",
      timeRemaining: "Amazing Job!",
      nextExercise: ""
    });
  }

  pause() {
    let { paused } = this.state;
    if (paused) {
      this.setState({
        paused: !paused
      });
    } else {
      this.setState({
        paused: true
      });
    }
  }

  render() {
    let {
      totalTime,
      exerciseName,
      timeRemaining,
      nextExercise,
      paused
    } = this.state;
    return (
      <div noValidate>
        <div class="row">
          <div class="col s4 m4">
            {totalTime ? (
              <a
                onClick={this.exerciseLoop}
                class="fitText yellow darken-4 waves-effect waves-light btn-large"
              >
                <i class="material-icons right">refresh</i>Restart
              </a>
            ) : (
              <a
                onClick={this.exerciseLoop}
                class="fitText green darken-4 waves-effect waves-light btn-large"
              >
                <i class="material-icons right">play_arrow</i>Start
              </a>
            )}
            {/* /* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div class=" center col s4 m4">
            {paused ? (
              <a
                onClick={this.pause}
                class="fitText green darken-4 waves-effect waves-light btn-large"
              >
                <i class="material-icons right">play_arrow</i>Play
              </a>
            ) : (
              <a
                onClick={this.pause}
                class="fitText grey waves-effect waves-light btn-large"
              >
                <i class="material-icons right">pause</i>Pause
              </a>
            )}

            {/* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div class=" right-align  col s4 m4">
            <a
              onClick={this.finish}
              class="fitText red waves-effect waves-light btn-large"
            >
              <i class="material-icons right">stop</i>Finish
            </a>

            {/* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div class="col s12 m12">
            <h3 class="center" style={{ color: "#8B0000" }}>
              {exerciseName}
            </h3>
            <br></br>
            <h3 class="center" style={{ color: "red" }}>
              {timeRemaining}
            </h3>
            <br></br>
            {nextExercise && (
              <React.Fragment>
                <h3 class="center">Next exercise:</h3>
                <h3 class="center" style={{ color: "#87CEEB" }}>
                  {nextExercise}
                </h3>
              </React.Fragment>
            )}
          </div>
        </div>
        <div class="row">
          {/* <div class="col s2 m4">
            <a onClick={this.finish} class="waves-effect waves-light btn-large">
              <i class="material-icons right">cloud</i>Finish
            </a>
          </div> */}
          <div class="center col s12 m12">
            <h3>{totalTime}</h3>
          </div>
          {/* <div class="col s2 m3">
            <a onClick={this.pause} class="waves-effect waves-light btn-large">
              <i class="material-icons right">cloud</i>Pause
            </a>
          </div> */}
          {/* <button onClick={this.finish}>Finish Workout</button>
        <button onClick={this.pause}>Continue Workout</button> */}
        </div>
      </div>
    );
  }
}

export default WorkoutComponent;
