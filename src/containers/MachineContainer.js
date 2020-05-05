import React, { Component } from 'react';
import MachineModel from '../models/machine';
import MachineIndex from '../components/MachineIndex';

class MachineContainer extends Component {

  state= {
    machines: [],
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    MachineModel.all().then( (res) => {
      console.log(res.data)
      this.setState ({
        machines: res.data,
      })
    })
  }

  render(){
    return (
      <div className='machinesComponent'>
        <MachineIndex
          machines={this.state.machines}
          />
      </div>
    )
  }
}

export default MachineContainer;
