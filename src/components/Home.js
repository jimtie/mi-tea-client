import React, {useState} from 'react';
import ItemsCarousel from 'react-items-carousel'
import "../styles.css"


const Home = (props) => {

	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

		return (
			<>
			<div className="backgroundImage">
				{/*<div className="row justify-content-center home-text" >*/}
					{/*<div className="col-md text-light">
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
					</div>*/}
					<div className="text-light home-text d-flex">
					<h1 style={{'font-family': 'Ubuntu,sans-serif'}}>It's all about <br/> taste & fun!</h1>
					</div>
			</div>

			<div className="items-carousel">
		      <ItemsCarousel
		        requestToChangeActive={setActiveItemIndex}
		        activeItemIndex={activeItemIndex}
		        numberOfCards={6}
		        gutter={15}
		        leftChevron={<button>{'<'}</button>}
		        rightChevron={<button>{'>'}</button>}
		        insideChevron
		        chevronWidth={chevronWidth}
		      >
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/jasmine_yin_hao.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Jasmine Yin Hao</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/chamomile.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Chamomile</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/maple_creme_oolong.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Maple Oolong</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/earl_grey_bella_luna.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Earl Grey</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/summer_rose.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Summer Rose</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/masala_chai.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Masala Chai</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/peach_oolong.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Peach Oolong</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/white_eternal_spring.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">White Eternal</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/peach-tea.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Peach Tea</div></div></a>
		        <a href="/teas"><div className="c-tea text-dark" style={{ height:120, 'background-image': 'url("https://www.adagio.com/images5/products_index/chocolate_truffle.jpg")','background-size':'cover', 'background-position':'center',margin:'auto'}}><div className="c-tea-text">Chocolate Truffle</div></div></a>
		      </ItemsCarousel>
		    </div>

		    <div className="about-section">
		    	<a href="/about#s-bg">
			    	<div className="about-left text-light">
			    		<h3 style={{'font-family': 'Ubuntu,sans-serif'}} className="shadow-sm">Tea History</h3>
			    	</div>
		    	</a>

		    	<a href="/about#s-bt">
			    	<div className="about-right text-light">
			    		<h3 style={{'font-family': 'Ubuntu,sans-serif'}} className="shadow-sm">Blended Tea</h3>
			    	</div>
		    	</a>
		    </div>

		    <div className="home-machine">
		    <a href="/machine">
		    <div className="home-machine-img"></div>
		    </a>
		    </div>

		    <div id="contact" className="bg-dark">
		        <h4>CONTACT ME</h4>
		        <div id="contact-form">
		            <form method="POST" action="https://formspree.io/mlepgprw">
		                <input type="hidden" name="_subject" value="Contact request from personal website" />
		                <input type="email" name="_replyto" placeholder="Your email" required className="bg-secondary" />
		                <textarea name="message" placeholder="Your message" required className="bg-secondary"></textarea>
		                <button type="submit">Send</button>
		            </form>
		        </div>
		    </div>

			</>
    );
}

export default Home;
