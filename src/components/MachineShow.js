import React, {Component} from 'react'
import '../styles.css'

class MachineShow extends Component {
  
state = {
  machine: this.props.machine,
}

render() {
  return(
    <>
      <a href="#" className="list-group-item list-group-item-action col-md-12">
        <img className="machineImage rounded" src={this.state.machine.images.icon.src} />
        <div className="machineName col-md-5 offset-1"><small>{this.state.machine.name}</small></div>
        <div className="machinePrice"><small>${this.state.machine.price}</small></div>
      </a>
    </>
    )
  }
}

export default MachineShow