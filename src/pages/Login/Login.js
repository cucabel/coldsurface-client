import React, { Component } from "react";
import { withAuth } from './../../context/auth-context';
import { Link } from 'react-router-dom';

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
      <div className="frozenlog">
          <div className="row justify-content-center my-4">
            <Link className="navbar-brand text-center" to={"/"} ><b>Coldsurface</b></Link>
          </div>

          <div className="container mb-4">
            <form onSubmit={this.handleFormSubmit} id="signInFormId">
              <div className="form-row justify-content-center">
                <div className="col-sm-2 col-md-3 col-lg-4"></div>
                <div className="col-sm-8 col-md-6 col-lg-4">
                  <div className="container py-4 mb-4 border border-light">
                    <div className="form-group">
                      <label for="inputEmail">Username:</label>
                      <input type="text" name="username" className="form-control" id="inputEmail2" placeholder="Enter name" value={username} onChange={this.handleChange} />
                      <div className="invalid-feedback" id="errorEmail"></div>
                    </div>

                    <div className="form-group">
                      <label for="inputPassword">Password:</label>
                      <input type="password" name="password" className="form-control mb-4" id="inputPassword" placeholder="Enter password" value={password} onChange={this.handleChange} />
                      <div className="invalid-feedback" id="errorPassword"></div>
                    </div>

                    <input type="submit" value="Login" className="btn btn-block btn-light" />
                  </div>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4"></div>

                <div class="col-sm-2 col-md-3 col-lg-4"></div>
                  <div class="col-sm-8 col-md-6 col-lg-4">
                    <p className="text-center">Already have an account?
                    <br></br>
                    <br></br>
                    <Link type="button" class="btn btn-block btn-light" role="button" to={"/signup"}>Sign Up</Link> </p>
                  </div>
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default withAuth(Login);

    {/* // return (
    //   <div>
    //     <h1>Login</h1>

    //     <form onSubmit={this.handleFormSubmit}>
          
    //       <label>Username:</label>
    //       <input type="text" name="username" value={username} onChange={this.handleChange}/>

    //       <label>Password:</label>
    //       <input type="password" name="password" value={password} onChange={this.handleChange} />

    //       <input type="submit" value="Login" />
    //     </form>
    //   </div>
    // ); */}