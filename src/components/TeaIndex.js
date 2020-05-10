import React, { Component } from 'react';
import TeaItem from './TeaItem'

class TeaIndex extends Component {

  render() {
    let teas = this.props.teas.map((tea) =>{
    return (
      <TeaItem
        key={tea._id}
        tea={tea}
        show={this.props.show}
        handleCloseShow={this.props.handleCloseShow}
        handleShow={this.props.handleShow}
        addToCart={this.props.addToCart}
        productQty={this.props.productQty}
        updateQty={this.props.updateQty}

        name={tea.name}
        image={tea.images.icon.src}
        id={tea._id}
        price={tea.price}
        />
      );
    })
    return (
      <div>
        <div className="col-lg-8 mx-auto list-group">
          {teas}
        </div>
        </div>
    )
  }
}

export default TeaIndex;