import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Grid from "@material-ui/core/Grid";
import SetComponent from "./SetComponent";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
      uniqueSetList: {
        "Warm Up": {
          name: "Warm Up",
          totalTime: 30,
          exerciseList: [
            {
              timeInSeconds: 60,
              displayText: "60 seconds",
              exerciseName: "3 Way V Ups"
            }
          ]
        },
        "Push Up": {
          name: "Push Up",
          totalTime: 30,
          exerciseList: [
            {
              timeInSeconds: 60,
              displayText: "60 seconds",
              exerciseName: "3 Way V Ups"
            }
          ]
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteSet = this.deleteSet.bind(this);
    this.addSet = this.addSet.bind(this);
    this.copySet = this.copySet.bind(this);
    this.wow = this.wow.bind(this);
    this.handleDropdownChoices = this.handleDropdownChoices.bind(this);
  }

  handleChange(event, index, name) {
    let { setList } = this.state;
    //console.log(name);
    if (setList[index]) {
      if (name) {
        setList[index].name = name;
      }
      setList[index].exerciseList = event;
      console.log(event);
      console.log("SetList");
      console.log(setList);
      this.setState({ setList });
    }
  }

  handleDropdownChoices() {
    let { setList, uniqueSetList } = this.state;

    for (let j = 0; j < setList.length; j++) {
      if (setList[j]) {
        if (!uniqueSetList[setList[j].name]) {
          let obj = {
            name: setList[j].name,
            totalTime: setList[j].totalTime,
            exerciseList: setList[j].exerciseList
          };
          uniqueSetList[setList[j].name] = obj;
        }
      }
    }
    this.setState({ uniqueSetList });
    //console.log("from handle dropdown " + JSON.stringify(setList));
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
    this.forceUpdate();
    let { setList, uniqueSetList } = this.state;
    //console.log("inside copyset");
    //console.log(setList);
    //console.log(value);
    for (let i = 0; i < setList.length; i++) {
      if (setList[i] && setList[i].name === value) {
        setList.push(setList[i]);
        this.setState({
          setList
        });
        return;
      }
    }

    if (uniqueSetList[value]) {
      //console.log("copying pre-made set");

      //console.log(uniqueSetList[value].exerciseList);
      //console.log(setList);
      setList.push(uniqueSetList[value]);
      this.setState({
        setList
      });
      return;
    }
  }

  wow() {}

  render() {
    let { setList, uniqueSetList } = this.state;

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
              options={Object.keys(uniqueSetList)}
              disableClearable
              blurOnSelect
              clearOnBlur
              selectOnFocus
              includeInputInList
              onChange={this.copySet}
              //onFocus={this.wow}
              onClick={() => this.setValue(null)}
              style={{ width: isMobile ? 150 : 180, height: 5 }}
              //defaultValue={"Add Circuit"}
              //value={this.option}
              className="paddingBottom"
              getOptionLabel={option => uniqueSetList[option].name}
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
                  marginTop: isMobile ? 80 : 45,
                  color: "green"
                }}
              />
              <p
                style={{
                  paddingLeft: isMobile ? 10 : 0,
                  marginTop: isMobile ? 75 : 60,
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
