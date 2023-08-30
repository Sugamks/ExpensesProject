import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxMonth = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxMonth}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
