import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import SetComponent from "./SetComponent";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { timerOptions } from "../constants/TimeMap";

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
      uniqueSetList: [
        {
          name: "Warm Up",
          totalTime: 30,
          exerciseList: [
            {
              timeInSeconds: 60,
              displayText: "60 seconds",
              exerciseName: "3 Way V Ups"
            }
          ]
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.addSet = this.addSet.bind(this);
    this.copySet = this.copySet.bind(this);
    this.wow = this.wow.bind(this);
  }

  handleChange(event, index, name) {
    let { setList, uniqueSetList } = this.state;
    console.log(name);
    if (setList[index]) {
      if (name) {
        setList[index].name = name;
      } else {
        setList[index].name = "Circuit";
      }
      let setKeys = Object.values(setList).map(name => name);
      //let unquieSets = Object.values(uniqueSetList).map(name => name);
      let keysArr = [];
      console.log(keysArr);
      for (let i = 0; i < setKeys.length; i++) {
        if (keysArr.indexOf(setKeys[i].name) == -1) {
          keysArr.push(setKeys[i].name);
        }
      }
      console.log(keysArr);
      uniqueSetList = [];
      let repeatedKeys = [];
      for (let j = 0; j < keysArr.length; j++) {
        for (let k = 0; k < setList.length; k++) {
          if (
            setList[k] &&
            setList[k].name === keysArr[j] &&
            repeatedKeys.indexOf(keysArr[j] == -1)
          ) {
            let obj = {
              name: setList[k].name,
              totalTime: setList[k].totalTime,
              exerciseList: setList[k].exerciseList
            };
            repeatedKeys.push(keysArr[j]);
            uniqueSetList.push(obj);
            break;
          }
        }
      }

      console.log(uniqueSetList);
      console.log(setList);

      setList[index].exerciseList = event;
      console.log("SetList");
      console.log(setList);
      this.setState({ setList, uniqueSetList });
    }
  }

  deleteSet(index) {
    let { setList } = this.state;
    if (setList[index]) {
      delete setList[index];
      this.setState({ setList });
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
    let { setList, uniqueSetList } = this.state;
    console.log(event);
    console.log(value);
    var result = uniqueSetList[value];
    //console.log(result);
    // let newSet = {
    //   name: "",
    //   totalTime: 0,
    //   exerciseList: []
    // };
    setList.push(result);
    this.setState({
      setList
    });
  }

  wow() {}

  render() {
    let { setList, uniqueSetList } = this.state;
    return (
      <div>
        <Grid
          container
          justifyContent="center"
          item
          xs={12}
          style={{ marginTop: 10 }}
        >
          {/* <Button onClick={this.addSet}>
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
              Add Set
            </p>
          </Button> */}
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
                      handleChange={this.handleChange}
                      copySet={exercise ? exercise : ""}
                    />
                  </Grid>
                </Grid>
              );
            })}

          {uniqueSetList.length > 0 && (
            <Autocomplete
              id="timeDropdown"
              options={Object.keys(uniqueSetList).map(name => name)}
              getOptionLabel={option => uniqueSetList[option].name}
              onChange={this.copySet}
              style={{ width: isMobile ? 150 : 180, height: 5 }}
              defaultValue={0}
              value={0}
              className="paddingBottom"
              getOptionSelected={(option, value) => option == value}
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
          <div className=" s12 m2">
            <Button onClick={this.addSet} style={{ paddingLeft: 30 }}>
              <AddCircleIcon
                fontSize="large"
                style={{
                  paddingLeft: isMobile ? -10 : 0,
                  marginTop: 45,
                  color: "green"
                }}
              />
              <p
                style={{
                  paddingLeft: isMobile ? 10 : 0,
                  marginTop: 60,
                  color: "green"
                }}
              >
                Create New Circuit
              </p>
            </Button>
          </div>
        </Grid>
      </div>
    );
  }
}

export default SetListComponent;
