import React, {Component} from 'react';
import "../styles.css"


class Home extends Component {

	render(){

		return (
			<div className="backgroundImage">
				<h2 className="text-center my-4 text-light">Mi-TEA</h2>
				<div className="row justify-content-center" >
					<div className="col-md text-light">
						<h5><strong>How did tea spread around the world?</strong></h5>
						<small>Sea Trade Routes Increase the Spread of Tea Throughout the World. ... The custom of drinking tea spread into France in 1638, then to England in 1645, and into Germany in 1650. Finally in the middle of the 17th century, the Dutch traders introduced tea to North America.</small>
					</div>
					<div className="col-md text-light">
						<h5><strong>Why is blending necessary for tea?</strong></h5>
						<small>The aim of blending is to create a well-balanced flavour using different origins and characters. This also allows for variations in tea leaf quality and differences from season to season to be smoothed out. ... Tea can be flavoured in large blending drums with perfumes, flavourants, or essential oils added.</small>
					</div>
					<div className="col-md text-light">
						<h5><strong>Can you mix herbs together for tea?</strong></h5>
						<small>Mixing your own herbs for tea is as easy as choosing the scents that appeal to you and blending up your favorite choices. ... After mixing up your favorite blend of herb tea, keep it in a glass jar in a dark place. Use at least one teaspoon of dried herbs per cup of water, more to taste.</small>
					</div>
				</div>
			</div>
    );
	}
}

export default Home;
