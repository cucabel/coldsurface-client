import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import line from './../../images/line.png';
import bar from './../../images/bar.jpg';
import donut from './../../images/donut.png';

import {Container, Row, Col} from 'react-bootstrap'

function Home() {
  return (
    <div> 
      <Navbar />
      <div className="container">
        <div className="row my-4">

        <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>
        <div class="col-8 col-sm-4 col-md-3 col-xl-2 d-flex flex-row justify-content-center">
          <Link to="/week">
            <img className="lineimg img-fluid" src={line} alt="lineimg" />
            {/* <h1>Link to the stadistics dashboard per workspace, channel and week</h1> */}
          </Link>
          </div>
          <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>

          <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>
          <div class="col-8 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center">
          <Link to="/channel">
            <img className="barimg img-fluid" src={bar} alt="barimg" />
            {/* <h1>Link to the stadistics dashboard per workspace, and channel</h1> */}
          </Link>
          </div>
          <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>

          <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>
          <div class="col-8 col-sm-4 col-md-3 col-xl-2 d-flex justify-content-center">
          <Link to="/sentiment">
            <img className="donutimg img-fluid" src={donut} alt="donutimg" />
            {/* <h1>Link to the sentiment dashboard per workspace, and channel</h1> */}
          </Link>
          </div>
          <div className="col-2 hidden-sm col-md-3 col-lg-4"></div>

        </div>
      </div>
    </div>
  )
}

export default Home;