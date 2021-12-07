import React, { Component } from "react";
import NoSleep from "nosleep.js";
import Webcam from "react-webcam";
import { exerciseObject } from "../constants/Workouts";
import MusicPlayerComponent from "./musicPlayer";

type Props = {
  id: number
};

const videoConstraints = {
  facingMode: "user"
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

class WorkoutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isIos: false,
      showPlayUnderPlaylist: false,
      allowMirror: false,
      workoutName: exerciseObject[this.props.id].name,
      exerciseObj: exerciseObject[this.props.id].exerciseList,
      totalWorkoutTime: exerciseObject[this.props.id].totalTime,
      value: "",
      done: false,
      paused: false,
      exerciseName: exerciseObject[this.props.id].exerciseList[0]
        ? exerciseObject[this.props.id].exerciseList[0].exerciseName
        : " ",
      nextExercise: exerciseObject[this.props.id].exerciseList[1]
        ? exerciseObject[this.props.id].exerciseList[1].exerciseName
        : " ",
      progress: 0.0,
      totalProgress: 0.0,
      timeRemaining: exerciseObject[this.props.id].exerciseList[0]
        ? exerciseObject[this.props.id].exerciseList[0].displayText
        : " ",
      timeLoop: () => {}
    };
    this.intervalID = 0;
    this.exerciseLoop = this.exerciseLoop.bind(this);
    this.finish = this.finish.bind(this);
    this.pause = this.pause.bind(this);
    this.enableMirror = this.enableMirror.bind(this);
    this.scrollToMusic = this.scrollToMusic.bind(this);
    this.scrollToWorkout = this.scrollToWorkout.bind(this);
    this.speakNow = this.speakNow.bind(this);
  }

  componentDidMount() {
    let isIos =
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    this.setState({
      isIos: isIos
    });
  }

  scrollToWorkout() {
    var elmnt = document.getElementById("titleUp");
    elmnt.scrollIntoView();
  }

  scrollToMusic() {
    let { showPlayUnderPlaylist } = this.state;
    showPlayUnderPlaylist = !showPlayUnderPlaylist;
    var elmnt = document.getElementById("musicPlaylist");
    elmnt.scrollIntoView();
    this.setState({
      showPlayUnderPlaylist
    });
  }

  speakNow(text) {
    if (window.speechSynthesis) {
      var msg = new SpeechSynthesisUtterance();
      let voices = window.speechSynthesis.getVoices();
      msg.lang = "en-US";
      msg.voice = voices.find(voice => voice.lang === "en-US");
      msg.text = text;
      msg.volume = 1;
      window.speechSynthesis.speak(msg);
    }
  }

  // exerciseLoop() {
  //   // var video = document.getElementById("myVideo");
  //   // video.play();
  //   noSleep.enable();
  //   var elmnt = document.getElementById("activeWorkout");
  //   elmnt.scrollIntoView();
  //   let { exerciseObj, totalWorkoutTime } = this.state;
  //   if (window.speechSynthesis) {
  //     var msg = new SpeechSynthesisUtterance();
  //     msg.text = "Let's get moving";
  //     window.speechSynthesis.speak(msg);
  //   }
  //   clearInterval(this.intervalID);

  //   let percentInterval = 100 / exerciseObj[0].timeInSeconds;
  //   let totalPercentageInterval = 100 / totalWorkoutTime;
  //   this.setState({
  //     done: false,
  //     paused: false,
  //     progress: 0.0,
  //     totalProgress: 0.0
  //   });
  //   let i = 0;
  //   let y = exerciseObj[i].timeInSeconds;
  //   let yMin = Math.floor(y / 60);
  //   let ySec = y % 60;
  //   let hours = 0;
  //   let minutes = 0;
  //   let seconds = -1;

  //   if (window.speechSynthesis) {
  //     msg = new SpeechSynthesisUtterance();
  //     msg.text = exerciseObj[i].exerciseName;
  //     window.speechSynthesis.speak(msg);
  //     var msg2 = new SpeechSynthesisUtterance();
  //     msg2.text = exerciseObj[i].displayText;
  //     window.speechSynthesis.speak(msg2);
  //   }
  //   this.intervalID = setInterval(() => {
  //     let { done, paused } = this.state;
  //     //Your code
  //     if (done) {
  //       clearInterval(this.intervalID);
  //       this.setState({
  //         totalTime: hours + ": " + minutes + " : " + seconds,
  //         done: true,
  //         paused: false,
  //         timeLoop: () => {}
  //       });
  //       this.intervalID = 0;
  //       return;
  //     } else if (paused) {
  //     } else if (!paused) {
  //       if (y === 0 && i + 1 < exerciseObj.length) {
  //         i++;
  //         y = exerciseObj[i].timeInSeconds;
  //         percentInterval = 100 / exerciseObj[i].timeInSeconds;
  //         yMin = Math.floor(y / 60);
  //         ySec = y % 60;
  //         this.setState({
  //           progress: 0.0
  //         });
  //         if (window.speechSynthesis) {
  //           msg.text = exerciseObj[i].exerciseName;
  //           window.speechSynthesis.speak(msg);
  //           msg2.text = exerciseObj[i].displayText;
  //           window.speechSynthesis.speak(msg2);
  //         }
  //       } else if (i === exerciseObj.length - 1 && y === 0) {
  //         // i = 0;
  //         // y = exerciseObj[i].timeInSeconds;
  //         // yMin = Math.floor(y / 60);
  //         // ySec = y % 60;

  //         // var msg = new SpeechSynthesisUtterance();
  //         // msg.text = exerciseObj[i].exerciseName;
  //         // window.speechSynthesis.speak(msg);
  //         if (window.speechSynthesis) {
  //           msg.text = "Excellent job, you're a true fitness champion!";
  //           window.speechSynthesis.speak(msg);
  //         }
  //         this.setState({
  //           done: true,
  //           exerciseName: "REST IT OUT!",
  //           timeRemaining: "Amazing Job!",
  //           nextExercise: ""
  //         });
  //         clearInterval(this.intervalID);
  //         this.setState({
  //           totalTime: hours + ": " + minutes + " : " + (seconds + 1),
  //           done: true,
  //           paused: false,
  //           timeLoop: () => {}
  //         });
  //         this.intervalID = 0;
  //         return;
  //       }
  //       this.setState({
  //         nextExercise: exerciseObj[i + 1]
  //           ? exerciseObj[i + 1].exerciseName
  //           : "",
  //         exerciseName: exerciseObj[i].exerciseName,
  //         timeRemaining: yMin + ":  " + ySec + " remaining"
  //       });
  //       if (ySec <= 3 && ySec > 0) {
  //         if (window.speechSynthesis) {
  //           msg.text = ySec;
  //           window.speechSynthesis.speak(msg);
  //         }
  //       }
  //       y--;
  //       yMin = Math.floor(y / 60);
  //       ySec = y % 60;
  //       seconds++;
  //       if (seconds === 60) {
  //         seconds = 0;
  //         minutes++;
  //       }
  //       if (minutes === 60) {
  //         minutes = 0;
  //         hours++;
  //       }
  //       this.setState(prevState => ({
  //         totalTime: hours + ": " + minutes + ": " + seconds,
  //         progress: prevState.progress + percentInterval,
  //         totalProgress: prevState.totalProgress + totalPercentageInterval
  //       }));
  //     }
  //   }, 1000);
  // }

  exerciseLoop() {
    noSleep.disable();
    this.speakNow("Start Moving,");

    clearInterval(this.intervalID);

    this.setState({
      done: false,
      paused: false,
      progress: 0.0,
      totalProgress: 0.0
    });
    //testing working cam on safari
    let { exerciseObj, totalWorkoutTime } = this.state;
    let percentInterval = 100 / exerciseObj[0].timeInSeconds;
    let totalPercentageInterval = 100 / totalWorkoutTime;
    let i = 0;
    let y = exerciseObj[i].timeInSeconds;
    let yMin = Math.floor(y / 60);
    let ySec = y % 60;
    let hours = 0;
    let minutes = 0;
    let seconds = -1;
    let firstRun = true;
    this.intervalID = setInterval(() => {
      if (firstRun) {
        try {
          noSleep.enable();
        } catch (error) {
          console.log(error);
        }
        var elmnt = document.getElementById("activeWorkout");
        elmnt.scrollIntoView();
        this.speakNow(exerciseObj[i].exerciseName);
        this.speakNow(exerciseObj[i].displayText);
        firstRun = false;
      }
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
          this.speakNow(exerciseObj[i].exerciseName);
          this.speakNow(exerciseObj[i].displayText);
        } else if (i === exerciseObj.length - 1 && y === 0) {
          this.speakNow("Excellent job, you're a true fitness champion!");
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
          this.speakNow(ySec);
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
    this.speakNow("Excellent job, you're a true fitness champion!");
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

  enableMirror() {
    let { allowMirror } = this.state;
    allowMirror = !allowMirror;
    this.setState({
      allowMirror
    });
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
      done,
      allowMirror,
      isIos
    } = this.state;
    return (
      <div noValidate>
        <div className="row">
          <div className="icon-block">
            <h3
              id="titleUp"
              className="left-align"
              style={
                allowMirror
                  ? { color: "white", textShadow: "2px 2px black" }
                  : { color: "black" }
              }
            >
              {workoutName}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="center col s4 m3 mirrorBtn">
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
          <div className=" center col s4 m3 mirrorBtn">
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
          <div className=" center  col s4 m3 mirrorBtn">
            <a
              onClick={this.finish}
              className="fitText red waves-effect waves-light btn-large"
            >
              <i className="material-icons right">stop</i>Finish
            </a>

            {/* <button onClick={this.exerciseLoop}>Start Workout</button> */}
          </div>

          <div className="center col s4 m3 mirrorBtn">
            <a
              onClick={this.enableMirror}
              className="fitText waves-effect waves-light btn-large"
            >
              <i className="material-icons right ">accessibility</i>
              Mirror
            </a>
          </div>

          <div className="center col s4 m3 mirrorBtn">
            <a
              onClick={this.scrollToMusic}
              className="fitText blue waves-effect waves-light btn-large"
            >
              <i className="material-icons right ">music_note</i>
              Music
            </a>
          </div>

          {allowMirror && (
            <Webcam
              audio={false}
              muted={true}
              height={"auto"}
              className="background-videoMirror"
              screenshotFormat="image/jpeg"
              width={"auto"}
              videoConstraints={videoConstraints}
            />
          )}
          <div className="col s12 m12 paddingBottom">
            <h2
              id="activeWorkout"
              className="center"
              style={
                allowMirror
                  ? { color: "white", textShadow: "2px 2px black" }
                  : { color: "#8B0000" }
              }
            >
              {exerciseName}
            </h2>
            <br></br>
            <h3
              className="center"
              style={
                allowMirror
                  ? { color: "white", textShadow: "2px 2px black" }
                  : { color: "red" }
              }
              // style={{ color: "red" }}
            >
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
              <h6
                className="col s12 l12 center"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "black" }
                }
              >
                Next exercise:{" "}
              </h6>
              <h4
                className="col s12 l12 center"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "darkgreen" }
                }
              >
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
              <div
                className="center col s4 l2 totalTimeMargin"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "black" }
                }
              >
                <h5>Total time: </h5>{" "}
                {/* <h3 className="center col s3 l4">{totalTime}</h3> */}
              </div>
              <div
                className="left-align col s6 l3"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "black" }
                }
              >
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
              {/* <div
                className="col s12 l6 progress progress-bar-striped"
                style={styles3}
              >
                <div
                  className="determinate"
                  style={{
                    width: totalProgress + "%"
                    // "background-color": "green"
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
            {!isIos && (
              <MusicPlayerComponent
                id="musicPlaylist"
                allowMirror={allowMirror}
              />
            )}
            {!isIos && (
              <div className="center col s12 m12">
                <a
                  onClick={this.scrollToWorkout}
                  className="fitText blue waves-effect waves-light btn-large"
                >
                  <i className="material-icons center ">arrow_upward</i>
                </a>
              </div>
            )}
          </React.Fragment>
        }
      </div>
    );
  }
}

export default WorkoutComponent;
