import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Routes from './config/routes'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UserModel from './models/user'
import TeaModel from './models/tea'

class App extends Component {
  state = {
    currentUser: JSON.parse(localStorage.getItem("user")),
  }

  setCurrentUser = (user) => {
    this.setState({ currentUser: user })
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("uid", user.id)
  }

  logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("user")
    UserModel.logout()
      .then(res => {
        this.setState({ currentUser: null })
        this.props.history.push("/")
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          logout={this.logout}
          history={this.props.history}
          setCurrentUser={this.setCurrentUser}
        />
        <Navbar />
        <div className="container">
          <Routes
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            logout={this.logout}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
