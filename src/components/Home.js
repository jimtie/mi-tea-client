import React, {Component} from 'react';

class Home extends Component {

	render(){

		return (
			<div>
				<h2 className="text-center my-4">Mi-TEA</h2>
				<div className="row justify-content-center">
					<div className="col-md">
						<h4>ABC</h4>
						<p>Ready for your next adventure but not sure where to go or what to do when you get there? Enter Wayfarer. Explore cities and read posts to get ready for your best trip yet.</p>
					</div>
					<div className="col-md">
						<h4>DEF</h4>
						<p>Know of an awesome hike? Eat the best meal of your life? Your Wayfarer community wants to know! Hit us with a post and keep the travel vibes vibing.</p>
					</div>
					<div className="col-md">
						<h4>GHI</h4>
						<p>After you tell us all about your latest trip, start planning your next great adventure right here on Wayfarer. We can't wait for you to start the journey with us.</p>
					</div>
				</div>
			</div>
    );
	}
}

export default Home;
