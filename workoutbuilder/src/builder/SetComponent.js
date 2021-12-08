import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "@fontsource/roboto";
import ExerciseComponent from "./ExerciseComponent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { isMobile } from "react-device-detect";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/*eslint-disable */
type Props = {
  deleteSet: Function,
  index: Number,
  setListIndex: Number,
  handleChange: Function,
  handleDropdownChoices: Function,
  copySet: any
};
/*eslint-enable */

class SetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hack: false,
      name: this.props.copySet ? this.props.copySet.name : "",
      expanded: false,
      totalTime:
        this.props.copySet &&
        this.props.copySet.exerciseList &&
        this.props.copySet.exerciseList.length > 0
          ? this.calculateTotalTime(this.props.copySet.exerciseList)
          : "0 min 0 secs",
      exerciseList:
        this.props.copySet &&
        this.props.copySet.exerciseList &&
        this.props.copySet.exerciseList.length > 0
          ? this.props.copySet.exerciseList
          : [
              {
                timeInSeconds: 30,
                displayText: "30 seconds",
                exerciseName: ""
              }
            ]
    };
    this.handleName = this.handleName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addNewExercise = this.addNewExercise.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.deleteTheSet = this.deleteTheSet.bind(this);
    this.calculateTotalTime = this.calculateTotalTime.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.addOnBlur = this.addOnBlur.bind(this);
  }

  handleInput(value, index) {
    let { handleChange } = this.props;
    this.setState(prevState => {
      let exerciseList = Object.assign([], prevState.exerciseList);
      exerciseList[index] = value;
      let totalTime = this.calculateTotalTime(exerciseList);
      //console.log("am I here");

      //console.log(value);
      handleChange(exerciseList, index, value.name);
      return { exerciseList, totalTime };
    });
  }

  addOnBlur() {
    let { handleChange, index } = this.props;
    let { exerciseList, name, hack } = this.state;
    // exerciseList.push({
    //   timeInSeconds: 30,
    //   displayText: "30 seconds",
    //   exerciseName: ""
    // });
    //console.log(name);
    handleChange(exerciseList, index, name);
    this.setState({
      name,
      exerciseList,
      totalTime: this.calculateTotalTime(exerciseList)
    });
  }

  addNewExercise() {
    let { handleChange, index } = this.props;
    let { exerciseList, name } = this.state;

    exerciseList.push({
      timeInSeconds: 30,
      displayText: "30 seconds",
      exerciseName: ""
    });
    // console.log("I am being called for all my sets");
    // console.log(exerciseList);
    // console.log(name);
    // console.log(index);
    handleChange(exerciseList, index, name);
    this.setState({
      name,
      exerciseList,
      totalTime: this.calculateTotalTime(exerciseList)
    });
  }

  deleteExercise(index) {
    let { handleChange, setListIndex } = this.props;
    let { exerciseList, name } = this.state;
    delete exerciseList[index];
    handleChange(exerciseList, index, name, "delete", setListIndex);
    this.setState({
      exerciseList,
      totalTime: this.calculateTotalTime(exerciseList)
    });
  }

  handleName(event) {
    let { exerciseList } = this.state;
    let { handleChange, index } = this.props;
    handleChange(exerciseList, index, event.target.value, "name");
    this.setState({ name: event.target.value });
  }

  handleDropdown(event) {
    let { handleDropdownChoices } = this.props;
    let { name } = this.state;
    handleDropdownChoices(name);
  }

  deleteTheSet() {
    let { deleteSet, index } = this.props;
    deleteSet(index);
  }

  calculateTotalTime(exerciseList) {
    let seconds = exerciseList.reduce(function(a, b) {
      return a + parseInt(b.timeInSeconds);
    }, 0);
    let yMin = Math.floor(seconds / 60);
    let ySec = seconds % 60;
    let value = "";
    if (yMin <= 1) {
      value = yMin + " min  " + ySec + " secs";
    } else if (yMin >= 60) {
      let hr = Math.floor(yMin / 60);
      let min = yMin % 60;
      value = hr + " hr " + min + " mins  " + ySec + " secs";
    } else {
      value = yMin + " mins  " + ySec + " secs";
    }
    return value;
  }

  render() {
    let { exerciseList, name, totalTime } = this.state;
    return (
      <div>
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          style={{ marginTop: 10 }}
        >
          <Grid container justifyContent="center" direction="row" spacing={2}>
            <Accordion
              style={{
                marginBottom: 10
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
              >
                <Grid
                  container
                  justifyContent="center"
                  direction="row"
                  spacing={3}
                >
                  <Grid item xs={4} sm={5}>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={event => event.stopPropagation()}
                      onFocus={event => event.stopPropagation()}
                      control={
                        <TextField
                          onChange={this.handleName}
                          onBlur={this.handleDropdown}
                          onFocus={this.handleName}
                          id="outlined-basic"
                          label="Circuit Name"
                          variant="outlined"
                          value={name ? name : ""}
                          style={{
                            width: isMobile ? 110 : "auto",
                            paddingLeft: isMobile ? 10 : 0
                          }}
                        />
                      }
                      label=""
                    />
                  </Grid>
                  <Grid item xs={5} sm={5}>
                    <Typography
                      style={{
                        marginTop: 15,
                        paddingLeft: isMobile ? 20 : 0
                      }}
                    >
                      {totalTime}{" "}
                    </Typography>{" "}
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <FormControlLabel
                      aria-label="Acknowledge"
                      onClick={event => event.stopPropagation()}
                      onFocus={event => event.stopPropagation()}
                      control={
                        <Button onClick={this.deleteTheSet}>
                          <DeleteIcon
                            fontSize="small"
                            style={{
                              marginTop: 10,
                              paddingLeft: isMobile ? -10 : 0,
                              color: "red"
                            }}
                          />
                        </Button>
                      }
                      label=""
                    />
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Grid item xs={12} style={{ marginTop: 10 }}>
                  <Grid>
                    {/* <TextField
                      onChange={this.handleName}
                      onBlur={this.handleName}
                      id="outlined-basic"
                      label="Set Name"
                      variant="outlined"
                      value={name ? name : ""}
                      style={{ width: isMobile ? 150 : 200 }}
                    /> */}

                    {exerciseList.length > 0 &&
                      exerciseList.map((exercise, index) => {
                        return (
                          <Grid
                            container
                            justifyContent="center"
                            direction="row"
                            key={index}
                          >
                            <Grid item>
                              <ExerciseComponent
                                deleteExercise={this.deleteExercise}
                                index={index}
                                addExercise={this.handleInput}
                                addOnBlur={this.addOnBlur}
                                copyExercise={exercise ? exercise : ""}
                              />
                            </Grid>
                          </Grid>
                        );
                      })}
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    spacing={1}
                  >
                    <Grid item xs={9} sm={9}>
                      <Button
                        id="addExerciseButton"
                        onClick={this.addNewExercise}
                        disableFocusRipple={true}
                      >
                        <AddCircleIcon
                          fontSize="large"
                          style={{
                            paddingLeft: isMobile ? -10 : 0,
                            marginTop: 15,
                            color: "green"
                          }}
                        />
                        <p
                          style={{
                            paddingLeft: isMobile ? 10 : 0,
                            marginTop: 30,
                            color: "green"
                          }}
                        >
                          Add Exercise
                        </p>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SetComponent;
