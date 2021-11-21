import React, { Component } from "react";
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import Chart from "react-apexcharts";
import { logDOM } from "@testing-library/dom";


function App() {
    const [state1, setState] = useState('idle');

    const onClickHandler1 = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

    const onClickHandler2 = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);
    }
    let state2 = {
        series: [{
            name: 'Capacity',
            data: ["23", "31", "40", "101", "40", "36", "32", "23", "14", "8", "5", "2"]
          }],
          options: {
            colors: [function({ value, seriesIndex, w }) {
                if (value < 50) {
                    return '#4169E1'
                } else {
                    return '#DB4437'
                }
            }],
            chart: {
              height: 350,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val;
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
            
            xaxis: {
              categories: ["1pm", "2pm", "3pm", "NOW", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"],
              position: 'bottom',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val;
                }
              }
            
            },
          },
    };

    return (
      <div>
        <Chart
            options={state2.options}
            series={state2.series}
            type="bar"
            width="1200"
            height="500"
            align='center'
        />
        <ReactiveButton
            style={
                {
                    borderRadius: '10px',
                    left: '400px',
                }
            }
            shadow
            size="large"
            color="#4169E1"
            buttonState={state1}
            idleText='More Info'
        />
        <ReactiveButton
            style={
                {
                    borderRadius: '10px',
                    left: '800px',
                }
            }
            shadow
            color="#4169E1"
            buttonState={state1}
            idleText='History'
            size='large'
        />
      </div>
    );
}

export default App;