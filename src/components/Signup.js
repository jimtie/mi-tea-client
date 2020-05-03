import React, { Component } from 'react';
import UserModel from '../models/user';
// import './styles.css'

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    UserModel.create(this.state)
    .then(res => {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      })
      console.log(res.data)
      this.props.setCurrentUser(res.data.data)
      this.props.history.push("/profile")
      // this.handleCloseModal();  this isn't working
    })
    .catch(err => console.log(err))
    // add a user error message
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-3"> 
            <h4 className="mb-3">Sign up</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  onChange={this.handleChange}
                  className="form control form-control-lg"
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.firstName}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last Name</label>
                <input
                  onChange={this.handleChange}
                  className="form control form-control-lg"
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.lastName}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.handleChange}
                  className="form control form-control-lg"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.handleChange}
                  className="form control form-control-lg"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.handleChange}
                  className="form control form-control-lg"
                  type="password"
                  id="password2"
                  name="password2"
                  value={this.state.password2}
                  />
              </div>
              <button className="btn btn-primary pull-left" type="submit" onClick={this.props.onClick}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
