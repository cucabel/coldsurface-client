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

  handleInput = (e) => {
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
            id="channel"
            name="channel"
            title="channel"
            onSelect={this.handleInput}
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
                <Barchart data={filteredData} />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} />
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
                <Barchart data={filteredData} />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} />
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
                <Barchart data={filteredData} />
              </Col>
              <Col
                className="BarChartCol"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={6}
              >
                <Barchart data={filteredData} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default statistics(Channel);
// <Dashboard
// data={data.filter((el) => el.channel === this.state.channel)}
// />

// <Dashboard data={data.filter((el) => el.channel === this.state.channel)} />;

// <select id="channel" name="channel" onChange={this.handleInput}>
// {channels.map((element) => (
//   <option> {element.name} </option>
// ))}
// </select>

// <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
// </DropdownButton>

// <select id="channel" name="channel" onChange={this.handleInput}>
//   {channels.map((element) => (
//     <option> {element.name} </option>
//   ))}
// </select>

// <Dropdown.Item title={element.name}> {element.name} </Dropdown.Item>

// <select id="channel" name="channel" onChange={this.handleInput}>
// {channels.map((element) => (
//   <option> {element.name} </option>
// ))}
// </select>

// From state: {this.state.channel}
// <br />
// {channels[0].name}
// <br />

// handleInput = (event) => {
//   let { value, name, type } = event.target; //  value="asdfasdf"  name="director"
//   console.log(value, type, name);
//   if (type === "checkbox") {
//     value = event.target.checked;
//   }
//   this.setState({ [name]: value });
//   console.log(name, value);
// };
