import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'

import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import BuildIcon from '@material-ui/icons/Build';
import EcoIcon from '@material-ui/icons/Eco';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';



class Header extends Component {
  state = {
      signup: false,
      login: false,
      currentUser: this.props.currentUser
    };

  render(props) {
    const {signup,login} = this.state;
    return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse row" id="navbarsExample04">
            <ul className="navbar-nav ml-auto col-md-12 d-flex justify-content-md-center">

              <li className= "nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/teas"><div className="nav-icon"><EcoIcon className="ml-auto"/></div>TEAS</NavLink>
              </li>

              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/machine"><div className="nav-icon"><BuildIcon /></div>MACHINE</NavLink>
              </li>
              
              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/About"><div className="nav-icon"><InfoIcon /></div>ABOUT</NavLink>
              </li>

              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/contact"><div className="nav-icon"><EmailIcon /></div>CONTACT</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
    );
}
}

export default Header;
