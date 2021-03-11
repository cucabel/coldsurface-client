import React, { Component } from 'react'
import { statistics } from '../../context/statistics-context';

import {Container, Row, Col, Dropdown} from 'react-bootstrap'
import Navbar2 from '../../components/Navbar/Navbar';
import KPI from '../../components/KPI/KPI';

class Week extends Component {
  render() {
    return (
      <div>
        <Navbar2 />

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
          <Container fluid>
            <Row className="WeekRow">
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
            </Row>
            <Row className="WeekRow">
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
            </Row>
            <Row className="WeekRow">
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
              <Col className="WeekCol" xs={12} sm={12} md={12} lg={12} xl={6}>
                <KPI />
              </Col>
            </Row>
          </Container>
      </div>
    )
  }
}

export default statistics(Week);