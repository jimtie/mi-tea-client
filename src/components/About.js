import React, { Component } from 'react';
import '../about.css'
import Background from '../paul-vincent-roll-c61jL_NpAn8-unsplash.jpg';

class About extends Component {
	render() {
		return (
			<>
			<section id="s-bg">
			<div className="background">
			</div>
			<h4 className="centered">
			TEA HISTORY
			</h4>
			<div className="history-text">
				<article className="history">
					<p><small>
						The history of tea dates back to ancient China, almost 5,000 years ago. According to legend, in 2732 B.C. Emperor Shen Nung discovered tea when leaves from a wild tree blew into his pot of boiling water. He was immediately interested in the pleasant scent of the resulting brew, and drank some.
					</small></p>
				</article>
			</div>
			</section>

			<section id="s-bt">
			<div className="blend">
			</div>
			<h4 className="side">
			Blended <br/>
			Tea
			</h4>
			<div className="history-text">
				<article className="history">
					<p><small>
						Tea blending is the blending of different teas together to produce a final product. This occurs chiefly with black tea that is blended to make most tea bags but can also occur with such teas as Pu-erh, where leaves are blended from different regions before being compressed.
					</small></p>
				</article>
			</div>
			</section>
			</>
		);
	}
}

export default About