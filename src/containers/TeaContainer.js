import React, { Component } from 'react';
import TeaModel from '../models/tea';
import TeaIndex from '../components/TeaIndex';
import TeaShow from '../components/TeaShow';

class TeaContainer extends Component {

  state= {
    teas: [],
    cart: this.props.cart,
    totalItems: this.props.totalItems,
    totalAmount: this.props.total,
    cartBounce: this.props.cartBounce,
    quantity: this.props.quantity,
    removeProduct: this.props.removeProduct,
    updateQuantity: this.props.updateQuantity,
    productQuantity: this.props.productQuantity,
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

  render(){
    return (
      <div className='teasComponent'>
        <TeaIndex
          teas={this.state.teas}
          teaId={this.state.teaId}
          show={this.state.show}
          addToCart={this.props.addToCart}
          productQty={this.props.productQuantity}
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
