import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../../context/auth-context';

class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    
    this.props.signup( username, password );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="row justify-content-center my-3">
          <a className="navbar-brand text-center" href="index - Copy.html">
            Sign Up
          </a>
        </div>

        <div className="container mb-4">
          <form onSubmit={this.handleFormSubmit} id="signUpFormId">
            <div className="form-row justify-content-center">
              <div className="col-sm-2 col-md-3 col-lg-4"></div>
              <div className="col-sm-8 col-md-6 col-lg-4">
                <div className="container py-4 mb-4 border">
                  <div className="form-group">
                    <label for="inputEmail">User name:</label>
                    <input type="text" name="username" className="form-control" id="inputName" value={username} onChange={this.handleChange} />
                    <div className="invalid-feedback" id="errorName"></div>
                  </div>
                  {/* <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div> */}

                  {/* <div className="form-group">
                    <label for="inputEmail">Email:</label>
                    <input type="text" name="inputEmail" className="form-control" id="inputEmail" />
                    <div className="invalid-feedback" id="errorEmail"></div>
                  </div> */}

                  <div className="form-group">
                    <label for="inputPassword">Password:</label>
                    <input type="password" name="password" className="form-control" id="inputPassword" value={password} onChange={this.handleChange} />
                    <div className="invalid-feedback" id="errorPassword"></div>
                  </div>

                  <input type="submit" value="Signup" className="btn btn-block btn-warning my-4" />

                  <p className="text-center">Already have an account? <Link to={"/login"}> Login</Link> </p>
     
                </div>
              </div>
              <div className="col-sm-2 col-md-3 col-lg-4"></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;

/*
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link> 
*/