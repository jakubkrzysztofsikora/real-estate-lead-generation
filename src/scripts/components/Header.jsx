import React from 'react';
import logo from '../../images/logo.png';

export default class Header extends React.Component {
	render() {
		return <section id="website-header">
			<div id="header-background" />
			<section className="header-top">
				<a href="http://metrorealtyphx.com/"><img src={logo} /></a>
			</section>
			<section className="wrap-content">
				<section className="header-content">
					<div className="content-background" />
					<div className="lead-form">
						<div className="description">
							<h2>{this.props.slogan.toUpperCase()}</h2>
							<p>{this.props.captionPart1}</p>
							<p>{this.props.captionPart2}</p>
						</div>
						<div className="lead-form-content">
							<input type="text" placeholder="Your name" />
							<input type="email" placeholder="Your email" />
							<button>I'm ready!</button>
							<p className="afterFormStatement">{this.props.afterFormStatement}</p>
						</div>
					</div>
				</section>
			</section>
		</section>;
	}
}