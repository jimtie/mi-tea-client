import React, { Component } from 'react';
import AddressModel from '../models/address';
import UserAddress from './UserAddress';
import AddressForm from '../components/AddressForm';

class Addresses extends Component{
  state = {
    action: 'close',
    address: null,
  }

  setAction(action, address){
    this.setState({
      action,
      address,
    });
    console.log(address);
  }

  setActionCreate(){
    this.setState({
      action: 'create',
      address: {
        id: '',
        address1: '',
        address2: '',
        city: '',
        zipcode: '',
      }
    });
  }

  async createAddress(address){
    await AddressModel.create(address);
  }

  async editAddress(address){
    await AddressModel.update(address);
  }

  async deleteAddress(address) {
    await AddressModel.delete(address._id);
  }

  closeForm(){
    this.setState({
      action: 'close',
      address: null,
    })
    this.props.fetchAddresses(this.props.currentUser.id);
    console.log(this.props.currentUser.id)
  }

  addressMethods = {
    create: this.createAddress.bind(this),
    edit: this.editAddress.bind(this),
    delete: this.deleteAddress.bind(this),
    close: this.closeForm.bind(this),
  }

  render(){
    let addresses = this.props.addresses.map(address =>
      <UserAddress
        key={address.id}
        address={address}
        setAction={this.setAction.bind(this)}
        />
    );

    let form = <AddressForm
        address={this.state.address}
        action={this.state.action}
        addressMethods={this.addressMethods}
        />
    
    return(
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <h4 className="mb-3">
                ADDRESS
                <button className='btn fas fa-pen btn-outline-primary ml-5 inline float-right' onClick={this.setActionCreate.bind(this)}>
                  Add
                </button>
              </h4>
              <div className="mt-4">
              {form}
              {addresses}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Addresses;
