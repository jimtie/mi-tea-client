import React, { Component } from 'react';
import TeaModel from '../models/tea';
import TeaIndex from '../components/TeaIndex';

class TeaContainer extends Component {

  state= {
    teas: [],
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    TeaModel.all().then( (res) => {
      this.setState ({
        teas: res.data,
      })
    })
  }

  render(){
    return (
      <div className='teasComponent'>
        <TeaIndex
          teas={this.state.teas}
          />
      </div>
    )
  }
}

export default TeaContainer;
