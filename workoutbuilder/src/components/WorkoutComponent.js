import React, { Component } from "react";
import { exerciseObject } from "../constants/Workouts";

type Props = {
  id: number
};

const styles3 = {
  height: `25px`,
  "background-color": "lightgreen"
};

// styles: {
//   ...prevState.styles,
//   width: prevState.progress + percentInterval + "%"
// }

const styles2 = {
  height: `25px`,
  "background-color": "pink"
};

class WorkoutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: exerciseObject[this.props.id].name,
      exerciseObj: exerciseObject[this.props.id].exerciseList,
      totalWorkoutTime: exerciseObject[this.props.id].totalTime,
      value: "",
      done: false,
      paused: false,
      exerciseName: "",
      nextExercise: "",
      progress: 0.0,
      totalProgress: 0.0,
      timeLoop: () => {}
    };
    this.intervalID = 0;
    this.exerciseLoop = this.exerciseLoop.bind(this);
    this.finish = this.finish.bind(this);
    this.pause = this.pause.bind(this);
  }

  exerciseLoop() {
    var elmnt = document.getElementById("activeWorkout");
    elmnt.scrollIntoView();
    let { exerciseObj, totalWorkoutTime } = this.state;
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Let's get moving";
    window.speechSynthesis.speak(msg);
    clearInterval(this.intervalID);

    let percentInterval = 100 / exerciseObj[0].timeInSeconds;
    let totalPercentageInterval = 100 / totalWorkoutTime;
    this.setState({
      done: false,
      paused: false,
      progress: 0.0,
      totalProgress: 0.0
    });
    let i = 0;
    let y = exerciseObj[i].timeInSeconds;
    let yMin = Math.floor(y / 60);
    let ySec = y % 60;
    let hours = 0;
    let minutes = 0;
    let seconds = -1;

    var msg = new SpeechSynthesisUtterance();
    msg.text = exerciseObj[i].exerciseName;
    window.speechSynthesis.speak(msg);
    var msg2 = new SpeechSynthesisUtterance();
    msg2.text = exerciseObj[i].displayText;
    window.speechSynthesis.speak(msg2);
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
          percentInterval = 100 / exerciseObj[i].timeInSeconds;
          yMin = Math.floor(y / 60);
          ySec = y % 60;
          this.setState({
            progress: 0.0
          });
          msg.text = exerciseObj[i].exerciseName;
          window.speechSynthesis.speak(msg);
          msg2.text = exerciseObj[i].displayText;
          window.speechSynthesis.speak(msg2);
        } else if (i === exerciseObj.length - 1 && y === 0) {
          // i = 0;
          // y = exerciseObj[i].timeInSeconds;
          // yMin = Math.floor(y / 60);
          // ySec = y % 60;

          // var msg = new SpeechSynthesisUtterance();
          // msg.text = exerciseObj[i].exerciseName;
          // window.speechSynthesis.speak(msg);
          msg.text = "Excellent job, you're a true fitness champion!";
          window.speechSynthesis.speak(msg);
          this.setState({
            done: true,
            exerciseName: "REST IT OUT!",
            timeRemaining: "Amazing Job!",
            nextExercise: ""
          });
          clearInterval(this.intervalID);
          this.setState({
            totalTime: hours + ": " + minutes + " : " + (seconds + 1),
            done: false,
            paused: false,
            timeLoop: () => {}
          });
          this.intervalID = 0;
          return;
        }
        this.setState({
          nextExercise: exerciseObj[i + 1]
            ? exerciseObj[i + 1].exerciseName
            : "",
          exerciseName: exerciseObj[i].exerciseName,
          timeRemaining: yMin + ":  " + ySec + " remaining"
        });
        if (ySec <= 3 && ySec > 0) {
          msg.text = ySec;
          window.speechSynthesis.speak(msg);
        }
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
        this.setState(prevState => ({
          totalTime: hours + ": " + minutes + ": " + seconds,
          progress: prevState.progress + percentInterval,
          totalProgress: prevState.totalProgress + totalPercentageInterval
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  finish() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Excellent job, you're a true fitness champion!";
    window.speechSynthesis.speak(msg);
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
      paused,
      workoutName,
      progress,
      totalProgress,
      done
    } = this.state;
    return (
      <div noValidate>
        <div class="row">
          <div class="icon-block">
            <h3 class="left-align">{workoutName}</h3>
          </div>
        </div>
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
          <div id="activeWorkout" class=" center col s4 m4">
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
          <div class="col s12 m12 paddingBottom">
            <h3 class="center" style={{ color: "#8B0000" }}>
              {exerciseName}
            </h3>
            <br></br>
            <h3 class="center" style={{ color: "red" }}>
              {timeRemaining}
            </h3>
            {nextExercise && (
              <React.Fragment>
                <div class="col l4"></div>
                <div class="col s12 l4 progress" style={styles2}>
                  <div
                    class="determinate"
                    style={{
                      width: progress + "%",
                      "background-color": "red"
                    }}
                  ></div>
                </div>
                <div class="col l2"></div>
              </React.Fragment>
            )}
            <br></br>
            {/* {nextExercise && (
              <React.Fragment>
                <h6 class="center">Next exercise: </h6>
                <h3 class="center" style={{ color: "#87CEEB" }}>
                  {nextExercise}
                </h3>
              </React.Fragment>
            )} */}
          </div>
        </div>

        <div class="row center">
          {nextExercise && (
            <React.Fragment>
              <h6 class="col s12 l12 center">Next exercise: </h6>
              <h3 class="col s12 l12 center" style={{ color: "#87CEEB" }}>
                {nextExercise}
              </h3>
            </React.Fragment>
          )}
        </div>

        <div class="row">
          {/* <div class="col s2 m4">
            <a onClick={this.finish} class="waves-effect waves-light btn-large">
              <i class="material-icons right">cloud</i>Finish
            </a>
          </div> */}
          {totalTime && (
            <div class="center col s12 m12 marginUp">
              <h6>Total time: </h6> <h3>{totalTime}</h3>
            </div>
          )}
          {/* <div class="col s2 m3">
            <a onClick={this.pause} class="waves-effect waves-light btn-large">
              <i class="material-icons right">cloud</i>Pause
            </a>
          </div> */}
          {/* <button onClick={this.finish}>Finish Workout</button>
        <button onClick={this.pause}>Continue Workout</button> */}
        </div>
        {totalTime && (
          <React.Fragment>
            <div class="row">
              <div class="col l3"></div>
              <div class="col s12 l6 progress" style={styles3}>
                <div
                  class="determinate"
                  style={{
                    width: totalProgress + "%",
                    "background-color": "green"
                  }}
                ></div>
              </div>{" "}
              {/* <div class="col l2"></div> */}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default WorkoutComponent;
