import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "@fontsource/roboto";
import TextInput from "./TextInput";
import TimeDropdown from "./TimeDropdown";
import CancelIcon from "@material-ui/icons/Cancel";
import { isMobile } from "react-device-detect";

/*eslint-disable */
type Props = {
  addExercise: Function,
  deleteExercise: Function,
  index: Number,
  copyExercise: any,
  addOnBlur: Function
};
/*eslint-enable */

class ExerciseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseObj: {
        timeInSeconds: this.props.copyExercise
          ? this.props.copyExercise.timeInSeconds
          : 30,
        displayText: this.props.copyExercise
          ? this.props.copyExercise.displayText
          : "30 seconds",
        exerciseName: this.props.copyExercise
          ? this.props.copyExercise.exerciseName
          : ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
  }

  handleInput(key, value) {
    let { addExercise, index, addOnBlur } = this.props;
    if (key === "save") {
      addOnBlur();
      return;
    }
    this.setState(prevState => {
      let exerciseObj = Object.assign({}, prevState.exerciseObj);
      if (key === "time") {
        exerciseObj.timeInSeconds = value.timeInSeconds;
        exerciseObj.displayText = value.displayText;
      } else {
        exerciseObj.exerciseName = value.exerciseName;
      }
      console.log("checking what Imn adding + index");
      console.log(index);
      //console.log(exerciseObj[index]);
      console.log(exerciseObj);
      addExercise(exerciseObj, index);
      return { exerciseObj };
    });
  }

  removeExercise() {
    let { deleteExercise, index } = this.props;
    deleteExercise(index);
  }

  render() {
    let { exerciseObj } = this.state;
    return (
      <div>
        <Grid item xs={12} style={{ marginTop: 10 }}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            style={{ marginTop: isMobile ? -10 : 0 }}
          >
            <Grid item>
              <TextInput
                exerciseName={exerciseObj.exerciseName}
                handleInput={this.handleInput}
              />
            </Grid>
            <Grid item>
              <TimeDropdown
                selectedTime={exerciseObj.timeInSeconds}
                handleInput={this.handleInput}
              />
            </Grid>
            <Grid item>
              <CancelIcon
                id="deletebutton"
                onClick={this.removeExercise}
                style={{ marginTop: 15, color: "red" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExerciseComponent;
