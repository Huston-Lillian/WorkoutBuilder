import React, { Component } from "react";
import NoSleep from "nosleep.js";

type Props = {
  workoutObj: any
};

const styles3 = {
  height: `25px`,
  "background-color": "lightgreen"
};

const styles2 = {
  height: `25px`,
  "background-color": "pink"
};

var noSleep = new NoSleep();

class CustomWorkoutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: "Custom Circuit Workout",
      exerciseObj: this.props.workoutObj.exerciseList,
      totalWorkoutTime: this.props.workoutObj.totalTime,
      value: "",
      done: false,
      paused: false,
      exerciseName: this.props.workoutObj.exerciseList[0]
        ? this.props.workoutObj.exerciseList[0].exerciseName
        : " ",
      nextExercise: this.props.workoutObj.exerciseList[1]
        ? this.props.workoutObj.exerciseList[1].exerciseName
        : " ",
      progress: 0.0,
      totalProgress: 0.0,
      timeRemaining: this.props.workoutObj.exerciseList[0]
        ? this.props.workoutObj.exerciseList[0].displayText
        : " ",
      timeLoop: () => {}
    };
    this.intervalID = 0;
    this.exerciseLoop = this.exerciseLoop.bind(this);
    this.finish = this.finish.bind(this);
    this.pause = this.pause.bind(this);
  }

  exerciseLoop() {
    // var video = document.getElementById("myVideo");
    // video.play();
    noSleep.enable();

    var elmnt = document.getElementById("activeWorkout");
    elmnt.scrollIntoView();
    let { exerciseObj, totalWorkoutTime } = this.state;
    if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Let's get moving";
      window.speechSynthesis.speak(msg);
    }
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

    if (window.speechSynthesis) {
      msg = new SpeechSynthesisUtterance();
      msg.text = exerciseObj[i].exerciseName;
      window.speechSynthesis.speak(msg);
      var msg2 = new SpeechSynthesisUtterance();
      msg2.text = exerciseObj[i].displayText;
      window.speechSynthesis.speak(msg2);
    }
    this.intervalID = setInterval(() => {
      let { done, paused } = this.state;
      //Your code
      if (done) {
        clearInterval(this.intervalID);
        this.setState({
          totalTime: hours + ": " + minutes + " : " + seconds,
          done: true,
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
          if (window.speechSynthesis) {
            msg.text = exerciseObj[i].exerciseName;
            window.speechSynthesis.speak(msg);
            msg2.text = exerciseObj[i].displayText;
            window.speechSynthesis.speak(msg2);
          }
        } else if (i === exerciseObj.length - 1 && y === 0) {
          // i = 0;
          // y = exerciseObj[i].timeInSeconds;
          // yMin = Math.floor(y / 60);
          // ySec = y % 60;

          // var msg = new SpeechSynthesisUtterance();
          // msg.text = exerciseObj[i].exerciseName;
          // window.speechSynthesis.speak(msg);
          if (window.speechSynthesis) {
            msg.text = "Excellent job, you're a true fitness champion!";
            window.speechSynthesis.speak(msg);
          }
          this.setState({
            done: true,
            exerciseName: "REST IT OUT!",
            timeRemaining: "Amazing Job!",
            nextExercise: ""
          });
          clearInterval(this.intervalID);
          this.setState({
            totalTime: hours + ": " + minutes + " : " + (seconds + 1),
            done: true,
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
          if (window.speechSynthesis) {
            msg.text = ySec;
            window.speechSynthesis.speak(msg);
          }
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
    noSleep.disable();
    if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Excellent job, you're a true fitness champion!";
      window.speechSynthesis.speak(msg);
    }
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
        {/* <video autoplay muted loop id="myVideo">
          <source
            src={natureVid}
            // src="https://video-previews.elements.envatousercontent.com/files/2054584a-ecf8-4865-bedc-c2d92f3b815f/video_preview_h264.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className="row">
          <div className="icon-block">
            <h3 className="left-align">{workoutName}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s4 m4">
            {totalTime ? (
              <a
                onClick={this.exerciseLoop}
                className="fitText yellow darken-4 waves-effect waves-light btn-large"
              >
                <i className="material-icons right">refresh</i>Restart
              </a>
            ) : (
              <a
                onClick={this.exerciseLoop}
                className="fitText green darken-4 waves-effect waves-light btn-large"
              >
                <i className="material-icons right">play_arrow</i>Start
              </a>
            )}
            {/* /* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div className=" center col s4 m4">
            {paused ? (
              <a
                onClick={this.pause}
                className="fitText green darken-4 waves-effect waves-light btn-large"
              >
                <i className="material-icons right">play_arrow</i>Play
              </a>
            ) : (
              <a
                onClick={this.pause}
                className="fitText grey waves-effect waves-light btn-large"
              >
                <i className="material-icons right">pause</i>Pause
              </a>
            )}

            {/* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div className=" right-align  col s4 m4">
            <a
              onClick={this.finish}
              className="fitText red waves-effect waves-light btn-large"
            >
              <i className="material-icons right">stop</i>Finish
            </a>

            {/* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>
          <div className="col s12 m12 paddingBottom">
            <h2
              id="activeWorkout"
              className="center"
              style={{ color: "#8B0000" }}
            >
              {exerciseName}
            </h2>
            <br></br>
            <h3 className="center" style={{ color: "red" }}>
              {timeRemaining}
            </h3>
            {!done && (
              <React.Fragment>
                <div className="col l4"></div>
                {/* <div className="col s12 l4 progress" style={styles2}>
                  <div
                    className="determinate"
                    style={{
                      width: progress + "%",
                      "background-color": "red"
                    }}
                  ></div>
                </div> */}
                <div
                  className="progressbar-container col s12 l4 "
                  style={styles2}
                >
                  <div
                    className="progressbar-complete-red"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="progressbar-liquid-red"></div>
                  </div>
                  {/* <span className="progress">{progress}%</span> */}
                </div>
                <div className="col l2"></div>
              </React.Fragment>
            )}
            <br></br>
            {/* {nextExercise && (
              <React.Fragment>
                <h6 className="center">Next exercise: </h6>
                <h3 className="center" style={{ color: "#87CEEB" }}>
                  {nextExercise}
                </h3>
              </React.Fragment>
              color "#87CEEB"
            )} */}
          </div>
        </div>

        <div className="row center">
          {nextExercise && (
            <React.Fragment>
              <h6 className="col s12 l12 center">Next exercise: </h6>
              <h4 className="col s12 l12 center" style={{ color: "darkgreen" }}>
                {nextExercise}
              </h4>
            </React.Fragment>
          )}
        </div>

        <div className="row">
          {/* <div className="col s2 m4">
            <a onClick={this.finish} className="waves-effect waves-light btn-large">
              <i className="material-icons right">cloud</i>Finish
            </a>
          </div> center col s12 m12 */}
          {
            <React.Fragment>
              <div className="center col s1 l4"></div>
              <div className="center col s4 l2 totalTimeMargin">
                <h5>Total time: </h5>{" "}
                {/* <h3 className="center col s3 l4">{totalTime}</h3> */}
              </div>
              <div className="left-align col s6 l3">
                <h3>{totalTime ? totalTime : "0: 0: 0"}</h3>
              </div>
              <div className="center col s1 l3"></div>
            </React.Fragment>
          }
          {/* <div className="col s2 m3">
            <a onClick={this.pause} className="waves-effect waves-light btn-large">
              <i className="material-icons right">cloud</i>Pause
            </a>
          </div> */}
          {/* <button onClick={this.finish}>Finish Workout</button>
        <button onClick={this.pause}>Continue Workout</button> */}
        </div>
        {
          <React.Fragment>
            <div className="row">
              <div className="col l3"></div>
              {/* <div className="col s12 l6 progress" style={styles3}>
                <div
                  className="determinate"
                  style={{
                    width: totalProgress + "%",
                    "background-color": "green"
                  }}
                ></div>
              </div>{" "} */}
              <div
                className="progressbar-container col s12 l6 "
                style={styles3}
              >
                <div
                  className="progressbar-complete"
                  style={{ width: `${totalProgress}%` }}
                >
                  <div className="progressbar-liquid"></div>
                </div>
                {/* <span className="progress">{progress}%</span> */}
              </div>
              {/* <div className="col l2"></div> */}
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default CustomWorkoutComponent;
