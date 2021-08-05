import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";

//var CanvasJSReact = require('./canvasjs.react');

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {

    const options = this.props.option;

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

export default App;
