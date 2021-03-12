// import { Link } from 'react-router-dom';
import { statistics } from "./../../context/statistics-context";

import Barchart from "../../components/Barchart/Barchart";

import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Dropdown, DropdownButton, Row, Col, Container } from "react-bootstrap";
import { RadialBarChart } from "recharts";

class Sentiment extends Component {
  state = {
    workspace: "Select Workspace",
  };

  handleWorkSpaceInput = (e) => {
    this.setState({ workspace: e });
    console.log("workspace :", e);
  };

  getUniqueWorkSpaces = () => {
    return ["KAGGLE", "ih-bcn-web-jan2021", "ih-bcn-web-oct2020"];
  };

  render() {
    const data = this.props.statistics.raw;
    const channels = this.props.statistics.channels;

    if (!data) return <p>Loading...</p>;

    const workSpaceData = data.filter(
      (el) => el.workspace === this.state.workspace
    );

    const channelWS = channels.filter(
      (el) => el.workspace === this.state.workspace
    );

    const generalData = workSpaceData.filter(
      (el) =>
        el.channel === channelWS.find((obj) => obj.name == "general").channelId
    );
    const randomData = workSpaceData.filter(
      (el) =>
        el.channel === channelWS.find((obj) => obj.name == "random").channelId
    );
    const helpData = workSpaceData.filter(
      (el) =>
        el.channel === channelWS.find((obj) => obj.name == "help").channelId
    );

    return (
      <div>
        <Navbar />
        <div>
          {this.state.workspace}
          <DropdownButton
            id="workspace"
            name="workspace"
            title={this.state.workspace}
            onSelect={this.handleWorkSpaceInput}
          >
            {this.getUniqueWorkSpaces().map((element) => (
              <Dropdown.Item eventKey={element}>{element}</Dropdown.Item>
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
                <Barchart
                  data={workSpaceData}
                  dimension="numberOfMessages"
                  title="Total Work Space"
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
                <Barchart
                  data={workSpaceData}
                  dimension="sentiment"
                  title="Total Work Space"
                />
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
                <Barchart
                  data={generalData}
                  dimension="numberOfMessages"
                  title="general channel"
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
                <Barchart
                  data={generalData}
                  dimension="sentiment"
                  title="general channel"
                />
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
                <Barchart
                  data={randomData}
                  dimension="numberOfMessages"
                  title="random"
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
                <Barchart
                  data={randomData}
                  dimension="sentiment"
                  title="random"
                />
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
                <Barchart
                  data={helpData}
                  dimension="numberOfMessages"
                  title="help"
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
                <Barchart data={helpData} dimension="sentiment" title="help" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default statistics(Sentiment);
