import React, { Component } from 'react';
import AddressModel from '../models/address';
import ProfileList from '../components/ProfileList';
import Addresses from '../components/Addresses';

class AddressContainer extends Component {
  state = {
    user: this.props.currentUser,
    addresses: [],
  }

  componentDidMount(){
    this.fetchAddresses()
  }

  async fetchAddresses(){
    let res = await AddressModel.user(this.props.currentUser.id);
    this.setState({
      addresses: res.data,
    });
    console.log(this.state)
  }

  render(){
      return(
        <div className="addressContainer row">
        <div className="col-lg-3 offset-1">
          <ProfileList
            user={this.state.user}
            logout={this.props.logout}
          />
        </div>
        <div className="col-lg-8">
          <Addresses
            addresses={this.state.addresses}
            currentUser={this.props.currentUser}
            fetchAddresses={this.fetchAddresses.bind(this)}
            />
        </div>
      </div>
      );
    }
  }

export default AddressContainer;

