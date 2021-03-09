// import { Link } from 'react-router-dom';
import { statistics } from "./../../context/statistics-context";

import Dashboard from "../../components/Dashboard/Dashboard";

import React, { Component } from "react";

class Channel extends Component {
  state = {
    workspace: "KAGGLE",
  };

  handleInput = (event) => {
    let { value, name, type } = event.target; //  value="asdfasdf"  name="director"
    if (type === "checkbox") {
      value = event.target.checked;
    }
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    const data = this.props.statistics;
    return (
      <div>
        <div>
          <label htmlFor="Workspace">Channel:</label>
          <select id="workspace" name="workspace" onChange={this.handleInput}>
            <option value="KAGGLE">KAGGLE</option>
            <option value="ih-bcn-web-oct2020">ih-bcn-web-oct2020</option>
            <option value="ih-bcn-web-jan2021">ih-bcn-web-jan2021</option>
          </select>
          <Dashboard
            data={data.filter((el) => el.workspace === this.state.workspace)}
          />
        </div>
      </div>
    );
  }
}

export default statistics(Channel);
