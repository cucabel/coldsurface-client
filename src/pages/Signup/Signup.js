import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../../context/auth-context';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

class Signup extends Component {
  state = { username: "", email: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password } = this.state;
    
    this.props.signup( username, email, password );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <div className="frozenbackground">
        <div className="row justify-content-center my-3">
          <Link className="navbar-brand text-center" to={"/"} ><b>Coldsurface</b></Link>
        </div>

        <Container>

          <Row className="row justify-content-center">

            <Col xs={8} sm={8} md={6} lg={4} className="border border-light">

              <Form onSubmit={this.handleFormSubmit}>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="my-2">Username</Form.Label>
                  <Form.Control type="text" name="username" placeholder="Enter name" placeholder="Enter name" value={username} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">   
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                </Form.Group>

                <Button className="my-3" id="loginbutton" variant="light" type="submit">Signup</Button>

                <p className="text-center my-2"> Already have an account? <Link to={"/login"}><b>Login</b></Link> </p>

              </Form>

            </Col>

          </Row>

        </Container>

      </div>
    );
  }
}

export default withAuth(Signup);
