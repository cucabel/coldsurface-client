import React, { Component } from 'react'
import { statistics } from '../../context/statistics-context';

import {Container, Row, Col, Dropdown} from 'react-bootstrap'
import Navbar from '../../components/Navbar/Navbar';

class Week extends Component {
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
        {/* <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default statistics(Week);