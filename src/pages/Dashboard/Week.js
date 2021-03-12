// import { Link } from 'react-router-dom';
import { statistics } from "./../../context/statistics-context";

<<<<<<< HEAD
import {Container, Row, Col, Dropdown} from 'react-bootstrap'
import Navbar2 from '../../components/Navbar/Navbar';
import KPI from '../../components/KPI/KPI';
=======
<<<<<<< HEAD
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import Navbar from '../../components/Navbar/Navbar';
=======
import Barchart from "../../components/Barchart/Barchart";

import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Dropdown, DropdownButton, Row, Col, Container } from "react-bootstrap";
import { RadialBarChart } from "recharts";

import KPI from "../../components/KPI/KPI";
>>>>>>> 29d394758a4175abff00a28071f8b567c9f9f4e1
>>>>>>> develop

class Week extends Component {
  state = {
    workspace: "Select Workspace",
    channel: "Select Channel",
    channelName: "",
  };

  handleWorkSpaceInput = (e) => {
    this.setState({ workspace: e });
    console.log("workspace :", e);
  };

  handleChannelInput = (e) => {
    const channels = this.props.statistics.channels;
    const channelName = channels.find((el) => el.channelId === e).name;
    this.setState({ channel: e, channelName: channelName });
    console.log("channel :", e);
  };

  getUniqueWorkSpaces = (channels) => {
    // console.log(channels);   // TO BE FIXED
    // const uniqueWPs = channels.filter(
    //   (v, i, a) => a.indexOf(v.workspace) === i
    // );
    // //.map((element) => element.workspace);
    // console.log(uniqueWPs);
    // return uniqueWPs;
    return ["KAGGLE", "ih-bcn-web-jan2021", "ih-bcn-web-oct2020"];
  };

  render() {
    const data = this.props.statistics.raw;
    if (!data) return <p>Loading...</p>;
    console.log(data.slice(0, 2)); // ih-bcn-web-oct2020 channel and workspace
    const channels = this.props.statistics.channels.filter(
      (el) => el.workspace === this.state.workspace
    );
    const filteredData = data.filter((el) => el.channel === this.state.channel);
    // .slice(0, 14);

    return (
      <div>
<<<<<<< HEAD
        <Navbar2 />
=======
        <Navbar />
<<<<<<< HEAD
>>>>>>> develop

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
<<<<<<< HEAD
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
=======
=======
        <div>
          <DropdownButton
            id="workspace"
            name="workspace"
            title={this.state.workspace}
            onSelect={this.handleWorkSpaceInput}
          >
            {this.getUniqueWorkSpaces(channels).map((element) => (
              <Dropdown.Item eventKey={element}>{element}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            id="channel"
            name="channel"
            title={this.state.channelName}
            onSelect={this.handleChannelInput}
          >
            {channels.map((element) => (
              <Dropdown.Item eventKey={element.channelId}>
                {element.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Container fluid>
            <Row className="BarChartRow">
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI
                  data={filteredData}
                  dimension="sentiment"
                  title="sentiment"
                />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI data={filteredData} dimension="joy" title="joy" />
              </Col>
            </Row>
            <Row className="BarChartRow">
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI data={filteredData} dimension="anger" title="anger" />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI data={filteredData} dimension="fear" title="fear" />
              </Col>
            </Row>
            <Row className="BarChartRow">
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI data={filteredData} dimension="sadness" title="sadness" />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <KPI data={filteredData} dimension="disgust" title="disgust" />
              </Col>
            </Row>
          </Container>
        </div>
>>>>>>> 29d394758a4175abff00a28071f8b567c9f9f4e1
>>>>>>> develop
      </div>
    );
  }
}

export default statistics(Week);
