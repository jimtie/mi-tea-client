import React, {Component} from 'react';

class ProfileShow extends Component {
  state = {
    user: this.props.user,
  };

  render() {
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">
              Profile <button className='btn fas fa-pen float-right'
              onClick={this.props.toggleUpdate}>Edit</button>
            </h4>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <div className="form-control form-control-lg border-0">
                {this.state.user.firstName}
              </div>
              <label htmlFor="lastName">Last Name</label>
              <div className="form-control form-control-lg border-0">
                {this.state.user.lastName}
              </div>
              <label htmlFor="email">Email</label>
              <div className="form-control form-control-lg border-0">
                {this.state.user.email}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default ProfileShow;
