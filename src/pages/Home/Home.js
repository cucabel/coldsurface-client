import React from 'react'

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div> 
      <h1>Home Page</h1>
      <Link to="/week">
        <h1>Link to the stadistics dashboard per workspace, channel and week</h1>
      </Link>
      <Link to="/channel">
        <h1>Link to the stadistics dashboard per workspace, and channel</h1>
      </Link>
      <Link to="/sentiment">
        <h1>Link to the sentiment dashboard per workspace, and channel</h1>
      </Link>
    </div>
  )
}

export default Home;