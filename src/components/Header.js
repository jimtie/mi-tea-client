import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Signup from "./Signup";
import Login from "./Login";

import CartScrollBar from "./CartScrollBar";
import EmptyCart from "./EmptyCart";
// import CSSTransitionGroup from "react-transition-group/cjs/CSSTransition";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "../header.scss";


class Header extends Component {
  state = {
      signup: false,
      login: false,
      currentUser: this.props.currentUser,

      showCart: false,
      cart: this.props.cartItems,
    };

  handleCloseSignUp = () => this.setState({signup: false});
  handleSignUp = () => this.setState({signup: true});
  handleCloseLogin = () => this.setState({login: false});
  handleLogin = () => this.setState({login: true});
  handleSwitchSL = () => this.setState({signup: false, login: true});
  handleSwitchLS = () => this.setState({login: false, signup: true});

  handleCloseCart = () => this.setState({showCart: false});
  handleShowCart = () => this.setState({showCart: true});

  handleCart(e) {
    e.preventDefault();
    this.setState({
      showCart: !this.state.showCart
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  


  render(props) {

    let cartItems;
    cartItems = this.state.cart.map(product => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {"QTY: "}{product.quantity}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <div
        >
          {cartItems}
        </div>
      );
    }


    const {signup,login} = this.state;
    return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <Link className="navbar-brand text-dark" to="/">Mi-TEA</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

  ​
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto">

              { this.props.currentUser ?
              <>
            <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-dark ml-3" to="/profile">Profile</NavLink>
              </li>
              
              <li className="nav-item">
                <a className="nav-link btn btn-outline-dark ml-3 mr-4" href="/logout" onClick={this.props.logout}>Logout</a>
              </li>
              </>
            :
            <>
              <li className="nav-item">
                <button className="nav-link btn btn-outline-dark ml-3" onClick={this.handleSignUp}>Signup</button>
              </li>


              <li className="nav-item">
                <button className="nav-link btn btn-outline-dark ml-3 mr-4" onClick={this.handleLogin}>Login</button>
              </li>
            </>
          }

            <li className="nav-item">
              <button className="nav-link btn btn-outline-dark ml-5" onClick={this.handleShowCart}>My Bag({this.props.totalItems})</button>
            </li>

            </ul>

          </div>
        </div>
      </nav>

      {/*Signup Modal*/}
      <Modal show={signup} onHide={this.handleCloseSignUp}>
        <Modal.Body>
          <Signup history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.handleCloseSignUp}/>
        </Modal.Body>
        <Modal.Footer>
          <p>Already have an account?</p>
          <button className="btn text-info" onClick={this.handleSwitchSL}>
            <u>Log in</u>
          </button>
        </Modal.Footer>
      </Modal>

      {/*Login Modal*/}
      <Modal show={login} onHide={this.handleCloseLogin}>
        <Modal.Body>
          <Login history={this.props.history} setCurrentUser={this.props.setCurrentUser} onClick={this.handleCloseLogin}/>
        </Modal.Body>
        <Modal.Footer>
          <p>Not signed up yet?</p>
          <button className="btn text-info" onClick={this.handleSwitchLS}>
            <u>Sign up</u>
          </button>
        </Modal.Footer>
      </Modal>

    {/*Cart Modal*/}
      <Modal show={this.state.showCart} onHide={this.handleCloseCart}>
        <div className={
            this.state.showCart ? "cart-preview active" : "cart-preview"
          }

        >
          <CartScrollBar>{view}</CartScrollBar>
          <div className="action-block">
            <button
              type="button"
              className={this.state.cart.length > 0 ? "btn btn-outline-info" : "disabled"}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </Modal>
    </>
    );
}
}

export default Header;
