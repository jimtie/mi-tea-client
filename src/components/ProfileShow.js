import React, {Component} from 'react';

class ProfileShow extends Component {
  state = {
    user: this.props.user,
  };

  render() {
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-3">
              PROFILE
              <button className='btn fas fa-pen float-right btn-outline-info ml-5 inline' onClick={this.props.toggleUpdate}>
              Edit
              </button>
            </h4>
            <form className="card mt-4">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="firstName"><small><strong>FIRST NAME</strong></small></label>
                  <div className="form-control form-control-lg border-0">
                    {this.state.user.firstName}
                  </div>
                  <label htmlFor="lastName"><small><strong>LAST NAME</strong></small></label>
                  <div className="form-control form-control-lg border-0">
                    {this.state.user.lastName}
                  </div>
                  <label htmlFor="email"><small><strong>EMAIL</strong></small></label>
                  <div className="form-control form-control-lg border-0">
                    {this.state.user.email}
                  </div>
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
