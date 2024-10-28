import React, { useEffect } from "react";
import Chart from "react-google-charts";
import { useState } from "react";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
    console.log("datacopy", dataCopy);
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      legendToggle
      //   formatters={[
      //     {
      //       column: 0,
      //       type: "DateFormat",
      //       options: {
      //         timeZone: 0,
      //       },
      //     },
      //   ]}
    />
  );
};

export default LineChart;
