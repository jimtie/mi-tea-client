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
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    cartBounce: false,
    quantity: 1,
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


    // Add to Cart
  handleAddToCart=(selectedTeas)=>{
    let cartItem = this.state.cart;
    let teaID = selectedTeas.id;
    let teaQty = selectedTeas.quantity;
    if (this.checkTea(teaID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == teaID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(teaQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedTeas);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveTea(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  checkTea(teaID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === teaID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }

  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }


  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          logout={this.logout}
          history={this.props.history}
          setCurrentUser={this.setCurrentUser}

          addToCart={this.handleAddToCart}
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveTea}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.quantity}
        />
        <Navbar />
        <div className="container">
          <Routes
            currentUser={this.state.currentUser}
            setCurrentUser={this.setCurrentUser}
            logout={this.logout}

            addToCart={this.handleAddToCart}
            cartBounce={this.state.cartBounce}
            total={this.state.totalAmount}
            totalItems={this.state.totalItems}
            cartItems={this.state.cart}
            removeProduct={this.handleRemoveTea}
            updateQuantity={this.updateQuantity}
            productQuantity={this.state.quantity}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
