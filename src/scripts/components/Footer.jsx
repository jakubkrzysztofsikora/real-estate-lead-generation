import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends React.Component {
	render() {
		return <footer id="website-footer">
			<div className="over-footer" />
			<div className="footer-content">
				<div className="wrap-content">
					<span className="footer-social-element">Follow us</span>
					<a href="#"><FontAwesome className="footer-social-element with-hover-effect" name="facebook-square" size="2x" /></a>
					<a href="#"><FontAwesome className="footer-social-element with-hover-effect" name="twitter-square" size="2x" /></a>
					<a href="#"><FontAwesome className="footer-social-element with-hover-effect" name="instagram" size="2x" /></a>
					<a href="#"><FontAwesome className="footer-social-element with-hover-effect" name="linkedin-square" size="2x" /></a>
				</div>
			</div>
		</footer>;
	}
}