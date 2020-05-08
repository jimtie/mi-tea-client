import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import '../styles.css'

class TeaItem extends Component {
  
state = {
  tea: this.props.tea,
}

render() {
  return(
    <>
      <Link to={`/teas/${this.state.tea._id}`} className="list-group-item list-group-item-action col-md-12" onClick={this.props.handleShow}>
        <img className="teaImage rounded" src={this.state.tea.images.icon.src} />
        <div className="teaName col-md-5 offset-1"><small>{this.state.tea.name}</small></div>
        <div className="teaPrice"><small>${this.state.tea.price}</small></div>
      </Link>
      <button
        type="submit"
        className="btn btn-outline-info float-right inline"
        onClick={this.props.handleCloseShow}>
        Buy it!
      </button>
    </>
    )
  }
}

export default TeaItem