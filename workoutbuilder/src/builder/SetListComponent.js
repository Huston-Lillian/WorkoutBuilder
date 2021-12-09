import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import SetComponent from "./SetComponent";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useLocation } from "react-router-dom";
import { prebuiltSets } from "../constants/prebuiltSets";

/*eslint-disable */
type Props = {
  exerciseName: String,
  handleInput: Function
};
/*eslint-enable */

class SetListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      setList: [
        {
          name: "",
          totalTime: 0,
          exerciseList: []
        }
      ],
      uniqueSetList: prebuiltSets,
      // uniqueSetList: {
      //   "Warm Up": {
      //     name: "Warm Up",
      //     totalTime: 30,
      //     exerciseList: [
      //       {
      //         timeInSeconds: 60,
      //         displayText: "60 seconds",
      //         exerciseName: "3 Way V Ups"
      //       }
      //     ]
      //   },
      //   "Push Up": {
      //     name: "Push Up",
      //     totalTime: 30,
      //     exerciseList: [
      //       {
      //         timeInSeconds: 60,
      //         displayText: "60 seconds",
      //         exerciseName: "Push Ups"
      //       }
      //     ]
      //   }
      // },
      dropdwonList: [
        "Warm Up",
        "Warm Up 2",
        "Low Impact Warm Up",
        "Stretches",
        "Rest",
        "HIIT Cardio 1",
        "HIIT Transition Set",
        "HIIT Cardio 2",
        "HIIT Cardio 3",
        "HIIT Cardio 4",
        "HIIT Cardio 5",
        "HIIT Cardio 6",
        "HIIT Cardio 7",
        "HIIT Cardio 8",
        "Low Impact Cardio 1",
        "Low Impact Cardio 2",
        "Low Impact Cardio 3",
        "Low Impact Cardio 4",
        "Triceps",
        "Abs 1",
        "Abs 2",
        "Abs 3"
      ],
      workoutObj: {},
      totalWorkOutTime: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.addSet = this.addSet.bind(this);
    this.copySet = this.copySet.bind(this);
    this.wow = this.wow.bind(this);
    this.handleDropdownChoices = this.handleDropdownChoices.bind(this);
    this.buildWorkout = this.buildWorkout.bind(this);
    this.calculateWorkoutTime = this.calculateWorkoutTime.bind(this);
  }

  handleChange(event, index, name, task, deleteAtIndex) {
    let { setList } = this.state;
    // console.log("setList handle change, name and index");
    // console.log(event);
    if (task === "delete") {
      console.log("will i see this on deletion of an exercise??");
      console.log(index);
      console.log(name);
      console.log(event);
      console.log(deleteAtIndex);
      this.calculateWorkoutTime();
      for (let i = 0; i < setList.length; i++) {
        if (setList[i] && setList[i].name === name && i === deleteAtIndex) {
          setList[i].exerciseList = event;
        }
      }
      return;
    }
    if (name && setList[index]) {
      if (name) {
        setList[index].name = name;
      }
      setList[index].exerciseList = event;
      console.log(setList[index]);
      console.log(setList[index].exerciseList);
      //console.log(event);
      //console.log("SetList");
      //console.log(setList);
      this.setState({ setList });
      console.log("handle input, event:");
      console.log(event);
      console.log("handle input, index:");
      console.log(index);
      console.log(setList[index]);
      console.log("from handle change");
      this.calculateWorkoutTime();
    }
  }

  handleDropdownChoices(setName) {
    let { setList, uniqueSetList, dropdwonList } = this.state;
    let uniqueSetListKeys = Object.keys(uniqueSetList);
    // this.buildWorkout();
    // let setListKeys = setList.map((set) => set.name)

    // console.log(dropdwonList);
    // console.log(setList);
    // console.log(uniqueSetList);

    setList.forEach(element => {
      if (
        dropdwonList.indexOf(element.name) === -1 &&
        element.name.length > 0
      ) {
        dropdwonList.push(element.name);
      }
    });

    // console.log(dropdwonList);

    uniqueSetListKeys.forEach(element => {
      if (dropdwonList.indexOf(element) === -1 && element.length > 0) {
        dropdwonList.push(element);
      }
    });

    // console.log(dropdwonList);
    dropdwonList.forEach(name => {
      if (!uniqueSetList[name]) {
        let wantedSet = setList.filter(set => set.name === setName)[0];
        uniqueSetList[name] = wantedSet;
      } else {
        let wantedSet = setList.filter(set => set.name === setName)[0];
        // console.log("editing a copy of existing set");
        // console.log(wantedSet);
        // console.log(setName);
        uniqueSetList[setName] = wantedSet;
        return;
      }
    });

    // console.log(JSON.stringify(uniqueSetList));
    // for (let j = 0; j < setList.length; j++) {
    //   if (setList[j]) {
    //     if (!uniqueSetList[setList[j].name]) {
    //       let obj = {
    //         name: setList[j].name,
    //         totalTime: setList[j].totalTime,
    //         exerciseList: setList[j].exerciseList
    //       };
    //       uniqueSetList[setList[j].name] = obj;
    //     }
    //   }
    // }
    this.setState({ ...uniqueSetList });
    console.log(JSON.stringify(uniqueSetList));
    console.log("Set list dropdown choices");

    console.log(setList);
    //console.log("from handle dropdown " + JSON.stringify(setList));
  }

  deleteSet(index) {
    let { setList } = this.state;
    if (setList[index]) {
      delete setList[index];
      this.setState({ setList });
      console.log("from delete set");

      this.calculateWorkoutTime();
    }
  }

  addSet() {
    let { setList } = this.state;
    let newSet = {
      name: "",
      totalTime: 0,
      exerciseList: []
    };
    setList.push(newSet);
    this.setState({
      setList
    });
  }

  copySet(event, value) {
    // this.forceUpdate();
    let { setList, uniqueSetList } = this.state;
    //console.log(value);
    // console.log("inside copyset");
    // console.log(setList);
    // console.log(JSON.stringify(uniqueSetList));

    //console.log(value);
    // for (let i = 0; i < setList.length; i++) {
    //   if (setList[i] && setList[i].name === value) {
    //     setList.push(setList[i]);
    //     this.setState({
    //       setList
    //     });
    //     return;
    //   }
    // }

    if (uniqueSetList[value]) {
      console.log("copying pre-made set");
      //let wantedSet = setList.filter(set => set.name === value);
      //console.log(uniqueSetList[value].exerciseList);
      // console.log(uniqueSetList[value]);
      //uniqueSetList[value] = wantedSet;
      let obj = {
        name: uniqueSetList[value].name,
        totalTime: uniqueSetList[value].totalTime
        //exerciseList: uniqueSetList[value].exerciseList
      };

      let exercises = [];

      uniqueSetList[value].exerciseList.forEach(exercise => {
        exercises.push(exercise);
      });

      obj.exerciseList = exercises;
      // console.log(obj);
      setList.push(obj);
      console.log("Set list copy set");

      console.log(setList);

      this.setState({
        setList
      });

      console.log("from copy set");

      this.calculateWorkoutTime();
      return;
    }
  }

  wow() {}

  buildWorkout() {
    let { setList } = this.state;
    if (setList.length === 0) {
      return;
    } else {
      console.log("building working out");
      console.log(setList);
      let totalTimeInSeconds = 0;
      let workOutExercises = [];
      for (let i = 0; i < setList.length; i++) {
        if (setList[i]) {
          if (!setList[i].name) {
            continue;
          }
          for (let j = 0; j < setList[i].exerciseList.length; j++) {
            if (setList[i].exerciseList[j]) {
              totalTimeInSeconds += parseInt(
                setList[i].exerciseList[j].timeInSeconds
              );
              setList[i].exerciseList[j].timeInSeconds = parseInt(
                setList[i].exerciseList[j].timeInSeconds
              );
              workOutExercises.push(setList[i].exerciseList[j]);
            }
          }
        }
      }

      if (workOutExercises.length === 0) {
        return;
      }
      console.log("total time in seconds " + totalTimeInSeconds);
      console.log("total list of exercises ");
      console.log(workOutExercises);
      let workoutObj = {
        totalTime: totalTimeInSeconds,
        name: "Custom Circuit Workout",
        exerciseList: workOutExercises
      };
      this.setState({
        workoutObj: workoutObj
      });

      console.log(workoutObj);
      //return workoutObj
      // const navigate = useNavigation();
      // navigate("#/customWorkoutScreen/:" + workoutObj);
      //this.props.history.push("#/customWorkoutScreen/:" + workoutObj);
      //<Redirect to={"#/customWorkoutScreen/:" + workoutObj} />;
      window.location.href =
        "#/customWorkoutScreen/" +
        encodeURIComponent(JSON.stringify(workoutObj));
    }
  }

  calculateWorkoutTime() {
    let { setList } = this.state;
    if (setList.length === 0) {
      this.setState({
        totalWorkOutTime: ""
      });
      return;
    } else {
      console.log("calculating working out time");
      console.log(setList);
      let totalTimeInSeconds = 0;
      for (let i = 0; i < setList.length; i++) {
        if (setList[i]) {
          for (let j = 0; j < setList[i].exerciseList.length; j++) {
            if (setList[i].exerciseList[j]) {
              totalTimeInSeconds += parseInt(
                setList[i].exerciseList[j].timeInSeconds
              );
            }
          }
        }
      }
      let yMin = Math.floor(totalTimeInSeconds / 60);
      let ySec = totalTimeInSeconds % 60;
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
      console.log(value);
      this.setState({
        totalWorkOutTime: value
      });
    }
  }

  render() {
    let {
      setList,
      uniqueSetList,
      dropdwonList,
      workoutObj,
      totalWorkOutTime
    } = this.state;

    return (
      <div id="toClickAway">
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          style={{ marginTop: 10 }}
        >
          {setList.length > 0 &&
            setList.map((exercise, index) => {
              return (
                <Grid
                  container
                  justifyContent="center"
                  direction="row"
                  key={index}
                >
                  <Grid item>
                    <SetComponent
                      deleteSet={this.deleteSet}
                      index={index}
                      setListIndex={index}
                      handleChange={this.handleChange}
                      handleDropdownChoices={this.handleDropdownChoices}
                      copySet={exercise ? exercise : ""}
                    />
                  </Grid>
                </Grid>
              );
            })}

          {Object.keys(uniqueSetList).length > 0 && (
            <Autocomplete
              id="timeDropdown"
              options={dropdwonList}
              disableClearable
              blurOnSelect
              clearOnBlur
              selectOnFocus
              includeInputInList
              onChange={this.copySet}
              onClick={() => this.setValue(null)}
              style={{ width: isMobile ? 150 : 180, height: 5 }}
              value={option => uniqueSetList[option].name}
              className="paddingBottom"
              renderInput={params => (
                <TextField
                  id="circuitChoices"
                  xs={6}
                  sm={3}
                  {...params}
                  label="Select Circuit"
                  variant="outlined"
                />
              )}
            />
          )}
          <div className=" s12 m2 alignButton">
            <Button onClick={this.addSet} style={{ paddingLeft: 30 }}>
              <AddCircleIcon
                fontSize="large"
                style={{
                  paddingLeft: isMobile ? -10 : 0,
                  marginTop: isMobile ? 45 : 45,
                  color: "green"
                }}
              />
              <p
                style={{
                  paddingLeft: isMobile ? 10 : 0,
                  marginTop: isMobile ? 60 : 60,
                  color: "green"
                }}
              >
                Create New Circuit
              </p>
            </Button>
          </div>
        </Grid>

        <div className="container">
          <div className="row center">
            <div className="header col l12 s12 light paddingBottom">
              <h5>{totalWorkOutTime}</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row center">
            <div className="header col l12 s12 light">
              {workoutObj && (
                <button
                  onClick={this.buildWorkout}
                  // href={
                  //   "#/customWorkoutScreen/:" +
                  //   encodeURIComponent(JSON.stringify(workoutObj))
                  // }
                  id="download-button"
                  className="btn btn-large waves-effect waves-light teal lighten-1"
                >
                  Start Workout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SetListComponent;
