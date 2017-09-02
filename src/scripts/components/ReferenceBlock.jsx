import React from 'react';
import fairHousingImg from '../../images/fair-housing.jpg';

export default class ReferenceBlock extends React.Component {
	render() {
		return <section className="block">
				<div className="block-title">
				<div className="line-through" />
				<h2 className="wrap-content">References <span>Certified by</span></h2>
			</div>
			<div className="block-content wrap-content centered">
				<img src={fairHousingImg} />
			</div>
		</section>;
	}
}