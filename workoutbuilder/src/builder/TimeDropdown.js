import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { timerOptions } from "../constants/TimeMap";
import { isMobile } from "react-device-detect";

/*eslint-disable */
type Props = {
  selectedTime: String,
  handleInput: Function,
  addOnBlur: Function
};

class TimeDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 30 };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleChange(event, value) {
    let { handleInput } = this.props;
    handleInput("time", {
      timeInSeconds: value ? value : 30,
      displayText: value ? timerOptions[value].text : "30 seconds"
    });
    this.setState({ value: event.target.value });
  }

  handleOnBlur(event, value) {
    let { handleInput } = this.props;
    handleInput("save", {
      timeInSeconds: value ? value : 30,
      displayText: value ? timerOptions[value].text : "30 seconds"
    });
    this.setState({ value: event.target.value });
  }

  render() {
    let { selectedTime } = this.props;
    return (
      <Autocomplete
        id="timeDropdown"
        options={Object.keys(timerOptions).map(name => name)}
        getOptionLabel={option => timerOptions[option].text}
        onChange={this.handleChange}
        onBlur={this.handleOnBlur}
        style={{ width: isMobile ? 120 : 180, height: 5 }}
        defaultValue={30}
        value={selectedTime ? selectedTime : 30}
        getOptionSelected={(option, value) => option == value}
        renderInput={params => (
          <TextField
            id="timeChoices"
            xs={6}
            sm={3}
            {...params}
            label="Time"
            variant="outlined"
          />
        )}
      />
    );
  }
}

export default TimeDropdown;
/*eslint-enable */
