import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles.css"

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.productQuantity, updateQuantity: this.props.updateQuantity };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    this.setState(
      prevState => ({
        value: Number(prevState.value) + 1
      }),
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
    e.preventDefault();
  }

  decrement(e) {
    e.preventDefault();
    if (this.state.value <= 1) {
      return this.state.value;
    } else {
      this.setState(
        prevState => ({
          value: Number(prevState.value) - 1
        }),
        function() {
          this.props.updateQuantity(this.state.value);
        }
      );
    }
  }

  feed(e) {
    console.log(JSON.stringify(this.props));
    this.setState(
      {
        value: this.refs.feedQty.value
      },
      function() {
        this.props.updateQuantity(this.state.value);
      }
    );
  }

  resetQuantity() {
    this.setState({
      value: 1
    });
  }
  render() {
    return (
      <div className="stepper-input">
        <form>
          <div className="form-group d-flex flex-column">
            <div>
              <a href="#" className="increment" onClick={this.increment}>
                +
              </a>
            </div>
            <div className="col-xs-1">
              <input
                ref="feedQty"
                type="number"
                className="quantity"
                value={this.state.value}
                onChange={this.feed.bind(this)}
              />
            </div>
            <div>
              <a href="#" className="decrement" onClick={this.decrement}>
                –
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number
};

export default Counter;
