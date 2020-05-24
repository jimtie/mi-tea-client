import React, { Component } from 'react';
import '../contact.css'

class About extends Component {
	render() {
		return (
			<div id="contact">
        		<h5 className="text-dark"><strong>CONTACT ME</strong></h5>
        		<div id="contact-form">
            		<form method="POST" action="https://formspree.io/mlepgprw">
		                <input type="hidden" name="_subject" value="Contact request from personal website" />
		                <input type="email" name="_replyto" placeholder="Your email" className="border border-secondary" required />
		                <textarea name="message" placeholder="Your message" className="border border-secondary" required></textarea>
		                <button type="submit" className="btn btn-outline-dark">Send</button>
		            </form>
		        </div>
    		</div>
		);
	}
}

export default About