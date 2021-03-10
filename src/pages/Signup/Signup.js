import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../../context/auth-context';

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
      <div className="frozenlog">
        <div className="row justify-content-center my-3">
          <Link className="navbar-brand text-center" to={"/"} ><b>Coldsurface</b></Link>
        </div>

        <div className="container mb-4">
          <form onSubmit={this.handleFormSubmit} id="signUpFormId">
            <div className="form-row justify-content-center">
              <div className="col-sm-2 col-md-3 col-lg-4"></div>
              <div className="col-sm-8 col-md-6 col-lg-4">
                <div className="container py-4 mb-4 border border-light">
                  <div className="form-group">
                    <label for="inputName">User name:</label>
                    <input type="text" name="username" className="form-control" id="inputName" placeholder="Enter name" value={username} onChange={this.handleChange} />
                    <div className="invalid-feedback" id="errorName"></div>
                  </div>

                  <div className="form-group">
                    <label for="inputEmail">Email:</label>
                    <input 
                      type="email" 
                      name="email"
                       className="form-control" 
                       id="inputEmail" 
                       placeholder="Enter email" 
                       value={email}
                        onChange={this.handleChange}

                        />
                    <div className="invalid-feedback" id="errorEmail"></div>
                  </div>

                  <div className="form-group">
                    <label for="inputPassword">Password:</label>
                    <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Enter password" value={password} onChange={this.handleChange} />
                    <div className="invalid-feedback" id="errorPassword"></div>
                  </div>

                  <input type="submit" value="Signup" className="btn btn-block btn-light my-4" />

                  <p className="text-center"> Already have an account? <Link to={"/login"}><b>Login</b></Link> </p>
     
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