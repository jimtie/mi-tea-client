import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import EditAddressForm from './EditAddressForm';
import DeleteAddressForm from './DeleteAddressForm';

class AddressForm extends Component {

	state = {
		addressForm: (<div/>),
		address: this.props.address,
	};

	componentDidUpdate(prevProps, prevState) {
	  if (this.state.address !== this.props.address){
			this.setState({
				address: this.props.address
			});console.log(this.state.address)
		}
	}

	buildForm(){
		let form = <div/>;
		if(this.state.address){
			switch (this.props.action){
				case 'create':
				case 'edit':
				form = <EditAddressForm
					address={this.state.address}
					onInputChange={this.onInputChange.bind(this)}
					/>
				break;
				case 'delete':
				form = <DeleteAddressForm
					address={this.state.address}
					/>
				break;
				default:
			}
		}
		return(form);
	}

	onInputChange = (event) => {
		let address = this.state.address;
		address[event.target.name]= event.target.value;

		this.setState({
			address
		});
	}

	async submitForm(event){
		event.preventDefault();
		await this.props.addressMethods[this.props.action](
			this.state.address
		);
		this.closeForm();
	}

	closeForm(){
		this.props.addressMethods.close();
	}

	render() {
		return (
			<Modal show={this.props.action !== 'close'} onHide={this.closeForm.bind(this)}>
				{this.buildForm()}
				<Modal.Footer>
					<button
						className="btn text-secondary float-right"
						onClick={this.closeForm.bind(this)}>
						Cancel
					</button>

					{/*{ this.buildForm()?

					<button
						type="submit"
						className="btn btn-outline-danger float-right"
						onClick={this.submitForm.bind(this)}>
						Delete
					</button>
					</>
					:*/}
					
					<button
						type="submit"
						className="btn btn-outline-info float-right"
						onClick={this.submitForm.bind(this)}>
						Confirm
					</button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default AddressForm;
