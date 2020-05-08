import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../styles.css'

class UserCredit extends Component {

  setAction(event){
    this.props.setAction(
      event.target.name,
      this.props.credit
     );
  }

  render () {
    return (
      <div className="card mt-3 col-md-12">
        <div className="card-body">
          <p className="card-text"><small><strong>CARD NUMBER: </strong></small>{this.props.credit.number}</p>
          <p className="card-text"><small><strong>NAME ON CARD: </strong></small>{this.props.credit.name}</p>
          <p className="card-text"><small><strong>EXPIRATION DATE: </strong></small>{this.props.credit.expiration}</p>
          <p className="card-text"><small><strong>CVV: </strong></small>{this.props.credit.cvv}</p>
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

export default UserCredit;
