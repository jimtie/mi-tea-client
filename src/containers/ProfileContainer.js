import React, {Component} from 'react';
import ProfileShow from '../components/ProfileShow';
import ProfileUpdate from '../components/ProfileUpdate';
import ProfileList from '../components/ProfileList';
// import profileRoutes from '../config/profileRoutes';
import UserModel from '../models/user';

class ProfileContainer extends Component {
	state={
		user: this.props.currentUser,
		update: false,
	}

	updateProfile = (event) => {
		event.preventDefault();
		let data = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
		};

		UserModel.update(data)
		.then((res) => {
			this.props.setCurrentUser(res.data)
			this.setState({
				user: res.data,
				update: false,
			});
		});
	}

	toggleUpdate = () => {
		this.setState({
			update: !this.state.update,
		});
	}

	render() {
		let form = null;
		if (this.state.update){
			form = (
				<ProfileUpdate
					user={this.state.user}
					toggleUpdate={this.toggleUpdate}
					updateProfile={this.updateProfile}
					/>
			);
		}
		else {
			form = (
				<ProfileShow
					user={this.state.user}
					toggleUpdate={this.toggleUpdate}
					/>
			);
		}
		return (
			<div className="cityContainer row">
        <div className="col-lg-3 offset-2">
          <ProfileList
            user={this.state.user}
            logout={this.props.logout}
          />
        </div>
        <div className="col-lg-7">
          {form}
        </div>
     	</div>
		)
	}
}

export default ProfileContainer
