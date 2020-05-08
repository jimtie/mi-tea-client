import React, { Component } from 'react';
import CreditCardsModel from '../models/creditCard';
import ProfileList from '../components/ProfileList';
import CreditCards from '../components/CreditCards';

class CreditCardsContainer extends Component {
  state = {
    user: this.props.currentUser,
    creditCards: [],
  }

  componentDidMount(){
    this.fetchCreditCards()
  }

  async fetchCreditCards(){
    let res = await CreditCardsModel.user(this.props.currentUser.id);
    this.setState({
      creditCards: res.data,
    });
    console.log(this.state)
  }

  render(){
      return(
        <div className="creditCardContainer row">
        <div className="col-lg-3 offset-1">
          <ProfileList
            user={this.state.user}
            logout={this.props.logout}
          />
        </div>
        <div className="col-lg-8">
          <CreditCards
            creditCards={this.state.creditCards}
            currentUser={this.props.currentUser}
            fetchCreditCards={this.fetchCreditCards.bind(this)}
            />
        </div>
      </div>
      );
    }
  }

export default CreditCardsContainer;

