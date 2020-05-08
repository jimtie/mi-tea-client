import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import EditAddressForm from './EditAddressForm';
import DeleteAddressForm from './DeleteAddressForm';

class CreditForm extends Component {

	state = {
		creditForm: (<div/>),
		credit: this.props.credit,
	};

	componentDidUpdate(prevProps, prevState) {
	  if (this.state.credit !== this.props.credit){
			this.setState({
				credit: this.props.credit
			});console.log(this.state.credit)
		}
	}

	buildForm(){
		let form = <div/>;
		if(this.state.credit){
			switch (this.props.action){
				case 'create':
				case 'edit':
				form = <EditAddressForm
					credit={this.state.credit}
					onInputChange={this.onInputChange.bind(this)}
					/>
				break;
				case 'delete':
				form = <DeleteAddressForm
					credit={this.state.credit}
					/>
				break;
				default:
			}
		}
		return(form);
	}

	onInputChange = (event) => {
		let credit = this.state.credit;
		credit[event.target.name]= event.target.value;

		this.setState({
			credit
		});
	}

	async submitForm(event){
		event.preventDefault();
		await this.props.creditMethods[this.props.action](
			this.state.credit
		);
		this.closeForm();
	}

	closeForm(){
		this.props.creditMethods.close();
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

export default CreditForm;
