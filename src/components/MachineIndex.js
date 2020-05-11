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
        <>
          {machines}
        </>
    )
  }
}

export default MachineIndex;