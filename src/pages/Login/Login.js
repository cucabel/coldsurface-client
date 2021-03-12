import React, { Component } from "react";
import { withAuth } from './../../context/auth-context';
import { Link } from 'react-router-dom';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    // Call function coming from AuthProvider ( via withAuth )
    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="frozenbackground">
        <div className="row justify-content-center my-4">
          <Link className="navbar-brand text-center" to={"/"} ><b>Coldsurface</b></Link>
        </div>

        <Container>

          <Row className="row justify-content-center">

            <Col xs={8} sm={8} md={6} lg={4} className="border border-light">

              <Form onSubmit={this.handleFormSubmit}>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="my-2">Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter name" value={username} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                </Form.Group>

                <Button id="loginbutton" variant="light" type="submit">Login</Button>

                <p className="text-center my-3">Sign Up
                  <Link type="button" class="btn btn-block btn-light my-3" role="button" to={"/signup"}>Create your account</Link> 
                </p>

              </Form>

            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}

export default withAuth(Login);
<<<<<<< HEAD
=======

>>>>>>> develop
