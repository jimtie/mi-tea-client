import React, { Component } from 'react';
import CreditModel from '../models/credit';
import UserCredit from './UserCredit';
import CreditForm from '../components/CreditForm';

class Credits extends Component{
  state = {
    action: 'close',
    credit: null,
  }

  setAction(action, credit){
    this.setState({
      action,
      credit,
    });
    console.log(credit);
  }

  setActionCreate(){
    this.setState({
      action: 'create',
      credit: {
        id: '',
        number: '',
        name: '',
        expiration: '',
        cvv: '',
      }
    });
  }

  async createCredit(credit){
    await CreditModel.create(credit);
  }

  async editCredit(credit){
    await CreditModel.update(credit);
  }

  async deleteCredit(credit) {
    await CreditModel.delete(credit._id);
  }

  closeForm(){
    this.setState({
      action: 'close',
      credit: null,
    })
    this.props.fetchCredits(this.props.currentUser.id);
    console.log(this.props.currentUser.id)
  }

  creditMethods = {
    create: this.createCredit.bind(this),
    edit: this.editCredit.bind(this),
    delete: this.deleteCredit.bind(this),
    close: this.closeForm.bind(this),
  }

  render(){
    let credits = this.props.credits.map(credit =>
      <UserCredit
        key={credit.id}
        credit={credit}
        setAction={this.setAction.bind(this)}
        />
    );

    let form = <CreditForm
        credit={this.state.credit}
        action={this.state.action}
        creditMethods={this.creditMethods}
        />
    
    return(
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <h4 className="mb-3">
                CREDIT CARD
                <button className='btn fas fa-pen btn-outline-info ml-5 inline float-right' onClick={this.setActionCreate.bind(this)}>
                  Add
                </button>
              </h4>
              <div className="mt-4">
              {form}
              {credits}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Credits;
