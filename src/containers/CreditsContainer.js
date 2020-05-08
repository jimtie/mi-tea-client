import React, { Component } from 'react';
import CreditModel from '../models/credit';
import ProfileList from '../components/ProfileList';
import Credits from '../components/Credits';

class CreditsContainer extends Component {
  state = {
    user: this.props.currentUser,
    credits: [],
  }

  componentDidMount(){
    this.fetchCredits()
  }

  async fetchCredits(){
    let res = await CreditModel.user(this.props.currentUser.id);
    this.setState({
      credits: res.data,
    });
    console.log(this.state)
  }

  render(){
      return(
        <div className="creditContainer row">
        <div className="col-lg-3 offset-1">
          <ProfileList
            user={this.state.user}
            logout={this.props.logout}
          />
        </div>
        <div className="col-lg-8">
          <Credits
            credits={this.state.credits}
            currentUser={this.props.currentUser}
            fetchCredits={this.fetchCredits.bind(this)}
            />
        </div>
      </div>
      );
    }
  }

export default CreditsContainer;

