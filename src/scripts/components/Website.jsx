import React from 'react';
import Header from './Header';
import PostHeader from './PostHeader';
import ImageBlock from './ImageBlock';
import ReferenceBlock from './ReferenceBlock';
import Footer from './Footer';
import Favicon from 'react-favicon';
import favicon from '../../images/favicon.ico';

export default class Website extends React.Component {
	render() {
		return <section id="main-content">
			<Favicon url={favicon} />
			<div className="side-line" />
			<Header 
				slogan="Single Story Central Phoenix Homes"
				captionPart1="If you are here, you are ready to experience the benefits of living in Central Phoenix."
				captionPart2="If you are ready to explore the variety, diversity, and walkability of the city, fill out this form and we will start sending you all single story homes in your price range."
				afterFormStatement="WE'LL GET IN TOUCH!" />
			<PostHeader slogans={[
				'Explore the variety.',
				'Experience the benefits of living in Central Phoenix.',
				'Explore the diversity.']} />
			<ImageBlock title="Discover place" subtitle="make it your home" />
			<ReferenceBlock />
			<Footer />
		</section>;
	}
}