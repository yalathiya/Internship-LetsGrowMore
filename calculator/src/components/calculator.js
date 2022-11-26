import React from "react";
import CalculatorTitle from "./calculatorTitle.js";
import OutputScreen from "./outputScreen.js";
import Button from "./button.js";

class Calculator extends React.Component {
  render() {
    // return "LGM Task List : Calculator";
    return (
      <div className="frame">
        <CalculatorTitle value="LGM Task List : Calculator" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label={"clear"} />
            <Button label={"delete"} />
            <Button label={"."} />
            <Button label={"/"} />
          </div>
          <div className="button-row">
            <Button label={"7"} />
            <Button label={"8"} />
            <Button label={"9"} />
            <Button label={"*"} />
          </div>
          <div className="button-row">
            <Button label={"4"} />
            <Button label={"5"} />
            <Button label={"6"} />
            <Button label={"-"} />
          </div>
          <div className="button-row">
            <Button label={"1"} />
            <Button label={"2"} />
            <Button label={"3"} />
            <Button label={"+"} />
          </div>
          <div className="button-row">
            <Button label={"0"} />
            <Button label={"="} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
