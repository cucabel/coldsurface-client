import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../../context/auth-context';
import logout from './../../images/exit.png';
import home from './../../images/main.png';
import perfil from './../../images/profile.png';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar2">
        <h4 className="navbar-brand"><i>Coldsurface</i></h4>
        {this.props.isLoggedIn ? (
          <>
            <Link className="profile" to={'/profile'}>{this.props.user && this.props.user.username}</Link>
            <Link to={'/home'} id='home-btn'>
              <button className="navbar-button"><img id="homeicon" src={home} alt="homeicon"></img></button>{' '}
            </Link>
            <Link onClick={this.props.logout}>
            <button className="navbar-button"><img id="logouticon" src={logout} alt="logouticon"></img></button>{' '}
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
