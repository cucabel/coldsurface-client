import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import line from "./../../images/line.png";
import number from "./../../images/Porcentaje.png";
import donut from "./../../images/donut.png";

import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <Container className="homecontainer">
        <Row className="rowcontainer">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to="/week">
              <div className="article-image">
                <img className="lineimg img-fluid" src={line} alt="lineimg" />
              </div>
            </Link>
            <div className="article-text">
              <p>Sentiment and emotion scorecard by workplace & channel.</p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to="/channel">
              <div className="article-image">
                <img
                  className="numberimg img-fluid"
                  src={number}
                  alt="numberimg"
                />
              </div>
            </Link>
            <div className="article-text">
              <p>
                Analyse key metrics (sentimment, emotions) with a channel
                deep-dive.
              </p>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to="/sentiment">
              <div className="article-image">
                <img
                  className="donutimg img-fluid"
                  src={donut}
                  alt="donutimg"
                />
              </div>
            </Link>
            <div className="article-text">
              <p>
                Compare the sentiment and number of messages with a workplace
                deep-dive.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
