import React, {Component} from 'react';


class AddressUpdate extends Component {
  state = {
    address1: this.props.address.address1,
    address2: this.props.address.address2,
    city: this.props.address.city,
    zipcode: this.props.address.zipcode,
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
        <div className="col-md-4 offset-md-2">
          <h4 className="mb-3">
            Address
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
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control form-control-lg"
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              disabled
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

  export default AddressUpdate
