import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Counter from "./Counter";

class TeaItem extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    tea: this.props.tea,
    teaId: this.props.key,
    selectedProduct: {},
    isAdded: false,
  }
}

addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity,
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 1000);
      }
    );
  };

render() {
  let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQty;
  return(
    <>
    <div className="list-group-item">
      <div className="row article">
        <div className="col-md-10">
          <Link to={`/teas/${this.state.tea._id}`} onClick={this.props.handleShow} className="list-group-item-action">
          <div>
            <img className="teaImage rounded" src={this.state.tea.images.icon.src} />
            <div className="teaName col-md-5"><small>{this.state.tea.name}</small></div>
            <div className="teaPrice col-md-2 offset-3"><small>${Number(this.state.tea.price*this.props.productQty).toFixed(2)}</small></div>
            </div>
          </Link>
          {/*<Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQty}
          resetQuantity={this.resetQuantity}
          />*/}
        </div>
        <div className="align-self-center">
          <button
            type="button"
            className={!this.state.isAdded ? "btn btn-outline-info" : "btn btn-info"}
            onClick={this.addToCart.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          >
            {!this.state.isAdded ? "Add to Bag" : "✔ Added"}
          </button>
        </div>
      </div>
    </div>
    </>
    )
  }
}

export default TeaItem