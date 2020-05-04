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
        <div className="col-md-4 offset-md-4">
          <h4 className="mb-3">
            Profile <i className='btn fas fa-times float-right'
            onClick={this.props.toggleUpdate}/>
        </h4>
        <form onSubmit={this.props.updateProfile}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control form-control-lg"
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              />
          </div>
          <button
            className="btn btn-primary float-right" type="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
  )
}
}

  export default ProfileUpdate
