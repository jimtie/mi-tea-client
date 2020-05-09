import React, {Component} from 'react';


class ProfileUpdate extends Component {
  state = {
    firstName: this.props.user.firstName,
    lastName: this.props.user.lastName,
    email: this.props.user.email,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h4 className="mb-3">
            PROFILE
        </h4>
        <form onSubmit={this.props.updateProfile} className="card mt-4 border-light">
          <div className="card-body">
          <div className="form-group">
            <label htmlFor="firstName"><small><strong>FIRST NAME</strong></small></label>
            <input
              className="form-control form-control-lg"
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="lastName"><small><strong>LAST NAME</strong></small></label>
            <input
              className="form-control form-control-lg"
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label htmlFor="email"><small><strong>EMAIL</strong></small></label>
            <input
              className="form-control form-control-lg"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              disabled
              />
          </div>
          <button className="btn btn-primary float-right" type="submit">
            Save
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
}

  export default ProfileUpdate
