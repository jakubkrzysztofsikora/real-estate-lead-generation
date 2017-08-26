import React from 'react';
import Header from './Header';
import PostHeader from './PostHeader';
import ImageBlock from './ImageBlock';
import ReferenceBlock from './ReferenceBlock';

export default class Website extends React.Component {
	render() {
		return <section id="main-content">
			<Header 
				slogan="looking for urban"
				captionPart1="Centrally located in Phoenix, we have represented buyers and sellers for both residential and commercial properties for over 10 years."
				captionPart2="We have seen changes in the real estate market these past few years from Chandler to Phoenix and want to share our market knowledge with you."
				afterFormStatement="WE'LL GET IN TOUCH!" />
			<PostHeader slogans={[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				'Suspendisse semper, magna eu sodales elementum, libero urna cursus ligula, quis fermentum lacus dolor at mi.',
				'Nunc aliquam quam sed efficitur viverra.']} />
			<ImageBlock title="Discover your new place" />
			<ReferenceBlock />
		</section>;
	}
}