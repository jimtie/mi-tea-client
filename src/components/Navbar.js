import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Signup from "./Signup";
import Login from "./Login";
// import '../styles.css';

import "bootstrap/dist/css/bootstrap.min.css";


class Navbar extends Component {
  state = {
      signup: false,
      login: false,
      currentUser: this.props.currentUser
    };

  handleCloseSignUp = () => this.setState({signup: false});
  handleSignUp = () => this.setState({signup: true});
  // handleCloseLogin = () => this.setState({login: false});
  // handleLogin = () => this.setState({login: true});
  // handleSwitchSL = () => this.setState({signup: false, login: true});
  // handleSwitchLS = () => this.setState({login: false, signup: true});

  render(props) {
    const {signup,login} = this.state;
    return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand"  to="/">Wayfarer</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

  ​
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">

            <li className="nav-item">
                {/*<NavLink className="nav-link">My Bag</NavLink>*/}
            </li>

              { this.props.currentUser ?
              <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/logout" onClick={this.props.logout}>Logout</a>
              </li>
              </>
            :
            <>
              <li className="nav-item">
                <button className="nav-link btn" onClick={this.handleSignUp}>Login & Register</button>
              </li>

            </>
          }
            </ul>
          </div>
        </div>
      </nav>

      {/*Signup Modal*/}
      <Modal show={signup} onHide={this.handleCloseSignUp} className="row">
        <div className="card col-md-6">
          <Signup history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.handleCloseSignUp}/>
        </div>

        <div className="card col-md-6">
      {/*Login Modal*/}
          <Login history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.handleCloseLogin}/>
        </div>
      </Modal>
    </>
    );
}
}

export default Navbar;
