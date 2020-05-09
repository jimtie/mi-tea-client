import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class TeaItem extends Component {
  
state = {
  tea: this.props.tea,
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
          <div className="teaPrice col-md-1"><small>${this.state.tea.price}</small></div>
          </div>
        </Link>
      </div>
      <div className="align-self-center">
      <button
        type="submit"
        className="btn btn-outline-info"
        onClick={this.props.handleCloseShow}>
        Buy it!
      </button>
      </div>
      </div>
    </div>
    </>
    )
  }
}

export default TeaItem