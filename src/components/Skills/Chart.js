import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
  render() {
    const options = this.props.option;

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Chart;
