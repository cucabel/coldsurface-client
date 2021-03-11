// import { Link } from 'react-router-dom';
import { statistics } from "./../../context/statistics-context";

import Barchart from "../../components/Barchart/Barchart";

import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Dropdown, DropdownButton, Row, Col, Container } from "react-bootstrap";
import { RadialBarChart } from "recharts";

class Channel extends Component {
  state = {
    workspace: "",
    channel: "",
  };

  handleWorkSpaceInput = (e) => {
    this.setState({ workspace: e });
    console.log("workspace :", e);
  };

  handleChannelInput = (e) => {
    this.setState({ channel: e });
    console.log("channel :", e);
  };

  render() {
    const data = this.props.statistics.raw;
    if (!data) return <p>Loading...</p>;
    const channels = this.props.statistics.channels;
    const filteredData = data
      .filter((el) => el.channel === this.state.channel)
      .slice(0, 14);

    return (
      <div>
        <Navbar />
        <p>{this.state.channel}</p>
        <div>
          <DropdownButton
            id="workspace"
            name="workspace"
            title="workspace"
            onSelect={this.handleWorkSpaceInput}
          >
            {channels.map((element) => (
              <Dropdown.Item eventKey={element.workspace}>
                {element.workspace}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            id="channel"
            name="channel"
            title="channel"
            onSelect={this.handleChannelInput}
          >
            {channels.map((element) => (
              <Dropdown.Item eventKey={element.channelId}>
                {element.channelId}
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
                <Barchart data={filteredData} dimension="sentiment" />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} dimension="joy" />
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
                <Barchart data={filteredData} dimension="anger" />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} dimension="fear" />
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
                <Barchart data={filteredData} dimension="sadness" />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} dimension="disgust" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default statistics(Channel);
