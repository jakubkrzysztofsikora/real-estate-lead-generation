import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class PostHeader extends React.Component {
	render() {
		return <section id="post-header">
			<div className="wrap-content">
				{this.props.slogans.map(slogan => <p key={slogan}>{slogan}</p>)}
			</div>
			<p className="bottom-post-header-slogan"><span>Let's start</span><FontAwesome className="paragraph-icon" name="angle-double-right" size='2x' /></p> 
		</section>;
	}
}