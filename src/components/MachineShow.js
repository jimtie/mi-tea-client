import React, {Component} from 'react'
import '../styles.css'

class MachineShow extends Component {
  
state = {
  machine: this.props.machine,
}

render() {
  return(
    <>
      <a href="#" className="card container">
        <img className="machineImage rounded card-img-top" src={this.state.machine.images.icon.src} />
        <div className="bottom-left text-secondary">
          <div className="machineName"><h4><strong>{this.state.machine.name}</strong></h4></div>
          <div className="machinePrice inline"><h4><strong>${this.state.machine.price}</strong></h4></div>
        </div>
      </a>
    </>
    )
  }
}

export default MachineShow