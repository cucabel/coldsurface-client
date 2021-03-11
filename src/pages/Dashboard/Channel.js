// import { Link } from 'react-router-dom';
import { statistics } from "./../../context/statistics-context";

import Barchart from "../../components/Barchart/Barchart";

import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Dropdown, DropdownButton, Row, Col, Container } from "react-bootstrap";
import { RadialBarChart } from "recharts";

class Channel extends Component {
  state = {
    workspace: "Select Workspace",
    channel: "Select Channel",
  };

  handleWorkSpaceInput = (e) => {
    this.setState({ workspace: e });
    console.log("workspace :", e);
  };

  handleChannelInput = (e) => {
    this.setState({ channel: e });
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
        <Navbar />
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
            title={this.state.channel}
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
