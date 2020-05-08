import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css'

class UserAddress extends Component {

  setAction(event){
    this.props.setAction(
      event.target.name,
      this.props.address
     );
  }

  render () {
    return (
      <div className="card mt-3 col-md-12">
        <div className="card-body">
          <p className="card-text"><small><strong>ADDRESS: </strong></small>{this.props.address.address1}</p>
          <p className="card-text"><small><strong>SUITE: </strong></small>{this.props.address.address2}</p>
          <p className="card-text"><small><strong>CITY: </strong></small>{this.props.address.city}</p>
          <p className="card-text"><small><strong>ZIPCODE: </strong></small>{this.props.address.zipcode}</p>
        </div>
        <div className="btn-group float-right mb-3">
          <button
            className="btn btn-outline-secondary"
            name='edit'
            onClick={this.setAction.bind(this)}
            >Edit</button>
          <button
            className="btn btn-outline-danger"
            name='delete'
            onClick={this.setAction.bind(this)}
            >Delete
          </button>
          </div>
        </div>
      );
    }
  }

export default UserAddress;
