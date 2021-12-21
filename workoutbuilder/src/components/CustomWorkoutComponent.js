import React, { Component } from "react";
import NoSleep from "nosleep.js";
import Webcam from "react-webcam";
import MusicPlayerComponent from "./musicPlayer";
import $ from "jquery";
import { timesToSpeak } from "./../constants/TimesToSpeak";

type Props = {
  workoutObj: any
};

const videoConstraints = {
  facingMode: "user"
};

const audioConstraints = {
  audio: false,
  muted: true
};

const styles3 = {
  height: `25px`,
  backgroundColor: "lightgreen"
};

const styles2 = {
  height: `25px`,
  backgroundColor: "pink"
};

var noSleep = new NoSleep();

class CustomWorkoutComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isIos: false,
      allowMirror: false,
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
    this.enableMirror = this.enableMirror.bind(this);
    this.scrollToMusic = this.scrollToMusic.bind(this);
    this.scrollToWorkout = this.scrollToWorkout.bind(this);
    this.speakNow = this.speakNow.bind(this);
    this.handleOnUserMedia = this.handleOnUserMedia.bind(this);
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

  handleOnUserMedia = () => {
    this.webcam.current.stream.addEventListener("inactive", target => {
      console.log("Webcam was stopped");
      console.log({ target });
    });
  };

  scrollToWorkout() {
    var elmnt = document.getElementById("titleUp");
    elmnt.scrollIntoView();
  }

  scrollToMusic() {
    var elmnt = document.getElementById("musicPlaylist");
    elmnt.scrollIntoView();
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
        //this.speakNow(exerciseObj[i].displayText);
        this.speakNow(timesToSpeak[exerciseObj[i].displayText].text);
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
          this.speakNow(timesToSpeak[exerciseObj[i].displayText].text);
          //this.speakNow(exerciseObj[i].displayText);
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
        if (yMin === 0 && ySec <= 3 && ySec > 0) {
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
          </div>
          <div className=" center  col s4 m3 mirrorBtn">
            <a
              onClick={this.finish}
              className="fitText red waves-effect waves-light btn-large"
            >
              <i className="material-icons right">stop</i>Finish
            </a>
          </div>
          {/* {!isIos && ( */}
          <div className="center col s4 m3 mirrorBtn">
            <a
              onClick={this.enableMirror}
              className="fitText waves-effect waves-light btn-large"
            >
              <i className="material-icons right ">accessibility</i>
              Mirror
            </a>
          </div>
          {/* )} */}
          {!isIos && (
            <div className="center col s4 m3 mirrorBtn">
              <a
                onClick={this.scrollToMusic}
                className="fitText blue waves-effect waves-light btn-large"
              >
                <i className="material-icons right ">music_note</i>
                Music
              </a>
            </div>
          )}
          {allowMirror && (
            <Webcam
              id="webcamVideo"
              audio={false}
              muted={true}
              height={"auto"}
              className="background-videoMirror"
              screenshotFormat="image/jpeg"
              width={"auto"}
              videoConstraints={videoConstraints}
              audioConstraints={audioConstraints}
              ref={e => (this.webcam = e)}
              onUserMedia={this.handleOnUserMedia}
            />
          )}
          {/* <a id="speakingDiv" className="hidden"></a> */}
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
            >
              {timeRemaining}
            </h3>
            {!done && (
              <React.Fragment>
                <div className="col l4"></div>
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
                </div>
                <div className="col l2"></div>
              </React.Fragment>
            )}
            <br></br>
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
          {
            <React.Fragment>
              <div className="center col s1 m1 l4"></div>
              <div
                className="center col s4 m4 l2 totalTimeMargin"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "black" }
                }
              >
                <h5>Total time: </h5>{" "}
              </div>
              <div
                className="left-align col s7 m7 l3"
                style={
                  allowMirror
                    ? { color: "white", textShadow: "2px 2px black" }
                    : { color: "black" }
                }
              >
                <h3>{totalTime ? totalTime : "0: 0: 0"}</h3>
              </div>
              {/* <div className="center col s1 l3"></div> */}
            </React.Fragment>
          }
        </div>
        {
          <React.Fragment>
            <div className="row">
              <div className="col l3"></div>
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
              </div>
              {!isIos && <MusicPlayerComponent allowMirror={allowMirror} />}
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
            </div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default CustomWorkoutComponent;
