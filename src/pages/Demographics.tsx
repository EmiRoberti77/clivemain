import React, { Component, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { render } from "react-dom";
import Paper from "@mui/material/Paper";
import Chart from "react-apexcharts";
import "./css/demographics.css";

const data = [
  { year: "1950", population: 2.525 },
  { year: "1960", population: 3.018 },
  { year: "1970", population: 3.682 },
  { year: "1980", population: 4.44 },
  { year: "1990", population: 5.31 },
  { year: "2000", population: 6.127 },
  { year: "2010", population: 6.93 },
];

const demographics = () => {
  function AgeDropDown() {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value);
    };

    return (
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select value={age} onChange={handleChange} displayEmpty>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

  // Chart

  interface StateType {
    options: {
      colors: string[];
      chart: {
        id: string;
      };
      xaxis: {
        categories: string[];
      };
    };
    series: {
      name: string;
      data: number[];
    }[];
  }

  function MainChart(): JSX.Element {
    const [state, setState] = useState<StateType>({
      options: {
        colors: ["#2F6EBA", "#F1A2FA"],
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [
            "0 - 16",
            "17 - 23",
            "24-30",
            "31-36",
            "37 - 43",
            "44 - 50",
            "51 - 60",
            "61+",
          ],
        },
      },
      series: [
        {
          name: "Male",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
        {
          name: "Female",
          data: [3, 60, 35, 80, 49, 70, 20, 81],
        },
      ],
    });

    return (
      <div className="Chart_main">
        <div className="row">
          <div className="col-4">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="950"
            />
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="top-content">
          <div className="Title">
            <span className="title-demographic">Demographics</span>
          </div>
        </div>
      </div>

      <div className="DropDownContainer">
        <div className="AgeDD">
          <AgeDropDown />
        </div>
        <div className="AgeDD">
          <AgeDropDown />
        </div>
        <div className="AgeDD">
          <AgeDropDown />
        </div>
        <div className="AgeDD">
          <AgeDropDown />
        </div>
        <div className="AgeDD">
          <AgeDropDown />
        </div>
      </div>
      {/* Chart */}
      <div className="Chart_Container">
        <div className="charttitle">
          <h3>Age & Gender Split</h3>
        </div>
        <div className="bar_chart_first">
          <MainChart />
        </div>
      </div>
    </div>
  );
};

export default demographics;
