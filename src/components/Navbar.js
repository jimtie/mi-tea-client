import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";


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
            <ul className="navbar-nav ml-auto col-md-12">

              <li className= "nav-item col-1 offset-2">
                <NavLink className="nav-link" to="/teas">Teas</NavLink>
              </li>

              <li className="nav-item col-1 offset-1">
                <NavLink className="nav-link" to="/machine">Machine</NavLink>
              </li>
              
              <li className="nav-item col-1 offset-1">
                <NavLink className="nav-link" to="/About">About</NavLink>
              </li>

              <li className="nav-item col-1 offset-1">
                <NavLink className="nav-link" to="/contact">contact</NavLink>
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
