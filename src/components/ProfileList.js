import React, { Component } from 'react';

class ProfileList extends Component{

	render(){
	  return (
	  	<>
			<div className="mt-3 shadow-sm list-group text-center">
				<small className="list-group-item"><strong>Welcome {this.props.user.firstName} {this.props.user.lastName}!</strong></small>
			</div>
			<div className="mt-3 shadow-sm list-group">
				<a href="/profile" className="list-group-item list-group-item-action col-md-12">
{/*	        	<img className="teaImage rounded" src={this.state.tea.images.icon.src} />*/}
        	<div className="profilePage"><small>PROFILE</small></div>
      	</a>
      	<a href="/profile/address" className="list-group-item list-group-item-action col-md-12">
        	<div className="profileAddress"><small>ADDRESS</small></div>
      	</a>
      	<a href="/profile/creditcard" className="list-group-item list-group-item-action col-md-12">
        	<div className="profileCredit"><small>CREDIT CARD</small></div>
      	</a>
			</div>
			<div className="mt-3 shadow-sm list-group">
				<a href="/logout" className="list-group-item list-group-item-action col-md-12 btn" onClick={this.props.logout}>
        	<div className="logout"><small>LOGOUT</small></div>
      	</a>
			</div>
			</>
	  );
	}
}

export default ProfileList;
