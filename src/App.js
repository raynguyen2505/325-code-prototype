import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./Map";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

function App() {
    let state = {
        series: [{
            name: 'Capacity',
            data: ["23", "31", "40", "101", "40", "36", "32", "23", "14", "8", "5", "2"]
          }],
          options: {
            colors: [function({ value, seriesIndex, w }) {
                if (value < 50) {
                    return '#4285F4'
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
      <Router>
      <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Gym Tracker</Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/home">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Link to="/map">
                    <Nav.Link href="#map">map</Nav.Link>
                </Link>
            </Nav>
            </Container>
        </Navbar>
        <Switch >
          <Route exact path="/">
            <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="1200"
            height="500"
            align='center'
            />
          </Route>
          <Route path="/map" component={Map}>
            <Map />
          </Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
        </Switch >
        
      </div>
      </Router>
    );
}

export default App;