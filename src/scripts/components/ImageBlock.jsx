import React from 'react';
import image from '../../images/image1.jpg';

export default class ImageBlock extends React.Component {
	render() {
		return <section className="block image-block">
			<div className="block-title">
				<div className="line-through" />
				<h2 className="wrap-content">{this.props.title} <span>{this.props.subtitle}</span></h2>
			</div>
			<div className="block-content wrap-content righted">
				<img className="big-size image-block-image" src={image} />
			</div>
		</section>;
	}
}