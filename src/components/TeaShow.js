import React, {Component} from 'react'
import '../styles.css'

class TeaShow extends Component {
  
state = {
  tea: this.props.tea,
}

render() {
  return(
    <>
      <a href="#" className="list-group-item list-group-item-action col-md-12">
        <img className="teaImage rounded" src={this.state.tea.images.icon.src} />
        <div className="teaName col-md-5 offset-1"><small>{this.state.tea.name}</small></div>
        <div className="teaPrice"><small>${this.state.tea.price}</small></div>
      </a>
    </>
    )
  }
}

export default TeaShow