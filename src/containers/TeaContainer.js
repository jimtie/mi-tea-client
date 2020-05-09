import React, { Component } from 'react';
import TeaModel from '../models/tea';
import TeaIndex from '../components/TeaIndex';
import TeaShow from '../components/TeaShow';
// import teaRoutes from '../config/teaRoutes'

class TeaContainer extends Component {

  state= {
    teas: [],
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    cartBounce: false,
    quantity: 1,
    teaId: '',
    tea: '',
    show: false,
  };

  handleCloseShow = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    TeaModel.all().then( (res) => {
      this.setState ({
        teas: res.data,
      })
      console.log(this.state.tea)
      console.log(this.props)
    })
  }

  componentDidUpdate() {
    let teaId = this.props.match.params.id
    if(teaId !== this.state.teaId){
      this.setState({
        teaId,
        tea: this.state.teas.find( tea =>
            tea._id === teaId
          ),
      });
    }
  }

  // Add to Cart
  handleAddToCart(selectedTeas) {
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

  render(){
    return (
      <div className='teasComponent'>
        <TeaIndex
          teas={this.state.teas}
          teaId={this.state.teaId}
          show={this.state.show}
          addToCart={this.handleAddToCart}
          teaQty={this.state.quantity}
          updateQty={this.updateQuantity}
          handleCloseShow={this.handleCloseShow}
          handleShow={this.handleShow}
          />
        <TeaShow
          tea={this.state.tea}
          teaId={this.state.teaId}
          show={this.state.show}
          handleCloseShow={this.handleCloseShow}
          handleShow={this.handleShow}
          />
      </div>
    )
  }
}

export default TeaContainer;
