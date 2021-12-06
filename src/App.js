import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from "./Map";
import Home from "./Home";
import History from "./History";
import Recommendation from "./Recommendation"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

function App() {
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
                    <Nav.Link href="#map">Map</Nav.Link>
                </Link>
                <Link to="/recommendation">
                    <Nav.Link href="#recommendation">Recommendation</Nav.Link>
                </Link>
            </Nav>
            </Container>
        </Navbar>
        <Switch >
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/map" component={Map}>
            <Map />
          </Route>
          <Route path="/history" component={History}>
            <History />
          </Route>
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/recommendation" component={Recommendation}>
            <Recommendation />
          </Route>
        </Switch >
        
      </div>
      </Router>
    );
}

export default App;