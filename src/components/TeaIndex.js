import React, { Component } from 'react';
import TeaShow from './TeaShow'

class TeaIndex extends Component {

  render() {
    let teas = this.props.teas.map((tea) =>{
    return (
      <TeaShow
        key={tea._id}
        tea={tea}
        />
      );
    })
    return (
        <div className="col-lg-6 offset-3 list-group">
          {teas}
        </div>
    )
  }
}

export default TeaIndex;