import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";

class TeaShow extends Component {
	state={
		tea: this.props.tea,
	}

	componentDidUpdate() {
		if(this.state.tea !== this.props.tea){
      		this.setState({
        	tea: this.props.tea,
      })
	}
}

	render() {

		return (
			<div>
				{(this.state.tea) && 
				<Modal show={this.props.show} onHide={this.props.handleCloseShow}>
					<img src={this.state.tea.images.header.src} className="tea-modal-image card-img-top"/>
					<Modal.Header className="card-body">
						<small className="block">{this.state.tea.name}</small>
						<small className="block">${this.state.tea.price}</small>
						<small className="block">{this.state.tea.description}</small>
					</Modal.Header>
					<Modal.Footer>
						<button
							className="btn text-secondary float-right"
							onClick={this.props.handleCloseShow}>
							Close
						</button>
						<button
							type="submit"
							className="btn btn-outline-info float-right"
							onClick={this.props.handleCloseShow}>
							Buy it!
						</button>
					</Modal.Footer>
			</Modal>
		}
			</div>
		);
	}
}

export default TeaShow