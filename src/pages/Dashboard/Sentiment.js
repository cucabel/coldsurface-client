// need to rename to workspace

import React, { Component } from "react";

import { statistics } from "../../context/statistics-context";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Navbar from "../../components/Navbar/Navbar";

class Sentiment extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default statistics(Sentiment);
