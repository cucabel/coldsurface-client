import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../../context/auth-context';
import {Navbar, Nav} from 'react-bootstrap';
// import logout from './../../images/exit.png';
// import home from './../../images/main.png';
// import perfil from './../../images/profile.png';

class Navbar2 extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      this.props.isLoggedIn ? (
          <Navbar className="navbar2">
            <Navbar.Brand>Coldsurface</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href='/profile'>{this.props.user && this.props.user.username}</Nav.Link>
              <Nav.Link href='/home' id='home-btn'>
                Dahboards
              </Nav.Link>
              <Nav.Link onClick={this.props.logout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar>
        ) : (
          <Navbar className="navbar2">
            <Navbar.Brand>Coldsurface</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/signup'>Sign Up</Nav.Link>
            </Nav>
          </Navbar>
        )
    );
  }
}

export default withAuth(Navbar2);

/* return (
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
    );*/
