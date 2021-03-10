import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <h4 className="navbar-brand"><i>Coldsurface</i></h4>
        {this.props.isLoggedIn ? (
          <>
            <Link to={'/home'} id='home-btn'>
              <h4>Main Page</h4>
            </Link>
            <p>username: <Link to={'/profile'}>{this.props.user && this.props.user.username}</Link></p>
            <Link onClick={this.props.logout}>
              <button className="navbar-button">Logout</button>{' '}
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{' '}
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);

{/* <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul> */}
