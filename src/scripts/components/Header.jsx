import React from 'react';
import logo from '../../images/logo.png';

export default class Header extends React.Component {
	render() {
		return <section id="website-header">
			<div id="header-background" />
			<section className="header-top">
				<img src={logo} />
			</section>
			<section className="wrap-content">
				<div className="side-line" />
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
							<select>
								<option disabled defaultValue>Prefered day of week</option>
								<option value="0">Monday</option>
								<option value="1">Thusday</option>
								<option value="2">Wednesday</option>
								<option value="3">Thursday</option>
								<option value="4">Friday</option>
								<option value="5">Saturday</option>
								<option value="6">Sunday</option>
							</select>
							<input type="time" name="time" id="time" placeholder="Appointment time" />
							<button>Book my visit</button>
							<p className="afterFormStatement">{this.props.afterFormStatement}</p>
						</div>
					</div>
				</section>
			</section>
		</section>;
	}
}