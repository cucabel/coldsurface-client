import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import line from './../../images/line.png';
import bar from './../../images/bar.jpg';
import donut from './../../images/donut.png';

import {Container, Row, Col} from 'react-bootstrap'

function Home() {
  return (
    <div className="home"> 
      <Navbar />

      <Container className="homecontainer">

        <Row className="rowcontainer">

          <Col xs={12} sm={12} md={4} >
          <Link to="/week">
            <img className="lineimg img-fluid" src={line} alt="lineimg" />
            <p>See which is the sentiment of the different channels of the different workspaces on your slack</p>
          </Link>
          </Col>

          <Col xs={12} sm={12} md={4}>
          <Link to="/channel">
            <img className="barimg img-fluid" src={bar} alt="barimg" />
            <p>The different sentiments of the workspaces' channels of your slack</p>
          </Link>
          </Col>

          <Col  xs={12} sm={12} md={4}>
          <Link to="/sentiment">
            <img className="donutimg img-fluid" src={donut} alt="donutimg" />
            <p>Compare the sentiment of the different channels on your slack on the graphs</p>
          </Link>
          </Col>

        </Row>

      </Container>
    </div>
  )
}

export default Home;