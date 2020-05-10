import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TeaItem extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    tea: this.props.tea,
    selectedProduct: {},
    isAdded: false,
  }
}

addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          // image: this.props.tea.images.icon.src,
          // name: this.props.tea.name,
          // price: this.props.tea.price,
          // id: this.props.teaId,
          // quantity: this.props.productQty,
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
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
        }, 2000);
      }
    );
  }

render() {
  return(
    <>
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-10">
          <Link to={`/teas/${this.state.tea._id}`} onClick={this.props.handleShow} className="list-group-item-action">
          <div>
            <img className="teaImage rounded" src={this.state.tea.images.icon.src} />
            <div className="teaName col-md-5 offset-1"><small>{this.state.tea.name}</small></div>
            <div className="teaPrice col-md-2 offset-2"><small>${Number(this.state.tea.price*this.props.productQty).toFixed(2)}</small></div>
            </div>
          </Link>
        </div>
        <div className="align-self-center">
          <button
            type="button"
            className={!this.state.isAdded ? "btn btn-outline-info" : "btn btn-info"}
            onClick={()=>this.addToCart()}
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