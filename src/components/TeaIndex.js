import React, { Component } from 'react';
import TeaItem from './TeaItem'

class TeaIndex extends Component {

  render() {
    let teas = this.props.teas.map((tea) =>{
    return (
      <TeaItem
        key={tea._id}
        tea={tea}
        teaId={this.props.teaId}
        show={this.props.show}
        handleCloseShow={this.props.handleCloseShow}
        handleShow={this.props.handleShow}
        />
      );
    })
    return (
      <div>
        <div className="col-lg-6 mx-auto list-group">
          {teas}
        </div>
        </div>
    )
  }
}

export default TeaIndex;