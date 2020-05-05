import React, { Component } from 'react';
import MachineShow from './MachineShow'

class MachineIndex extends Component {

  render() {
    let machines = this.props.machines.map((machine) =>{
    return (
      <MachineShow
        key={machine._id}
        machine={machine}
        />
      );
    })
    return (
        <div className="col-lg-6 offset-3 list-group">
          {machines}
        </div>
    )
  }
}

export default MachineIndex;