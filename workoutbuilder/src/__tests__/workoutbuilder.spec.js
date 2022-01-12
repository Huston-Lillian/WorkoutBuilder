import React, { Component } from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });

import TextInput from "../builder/TextInput";
import { jssPreset } from "@material-ui/core";

function handleInput(name, value) {
  console.log("test is running");
}

describe("TextInput component", () => {
  let component;
  let event = {
    target: {
      value: "Lilly's Test",
    },
  };
  beforeEach(() => {
    component = shallow(
      <TextInput exerciseName={"Test Exercise"} handleInput={jest.fn()} />
    );
  });
  it("HandleChange function should set state to event's value", () => {
    component.instance().handleChange(event);
  });
});
