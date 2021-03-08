// import { Link } from 'react-router-dom';
import { statistics } from './../../context/statistics-context'

// import Dashboard from '../../components/Dashboard/Dashboard';

import React, { Component } from 'react'

class Channel extends Component {
  render() {
    return (
      <div>
        <p>{this.props.statistics[0].day}</p>
      </div>
    )
  }
}

export default statistics(Channel);