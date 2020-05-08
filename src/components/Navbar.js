import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles.css'


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
                <NavLink className="nav-link" to="/teas">TEAS</NavLink>
              </li>

              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/machine">MACHINE</NavLink>
              </li>
              
              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/About">ABOUT</NavLink>
              </li>

              <li className="nav-item ml-5 mr-5">
                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
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
