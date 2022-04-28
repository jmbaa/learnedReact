import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
        a: "",
      options: {
        labels: props.labels,
      },
      series: props.series,
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        ...this.state,
        ...this.state.options,
        options: {
            labels: nextProps.labels
        },
        series: nextProps.series
      });
  }

  render() {
    return (
      <div className="pie">
        <Chart
          options={this.state.options}
          series={this.state.series}
          labels={this.state.labels}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
