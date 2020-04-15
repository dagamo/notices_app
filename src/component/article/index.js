import React from 'react';
import {styles} from './styles'

const article = (props) => {
	const { author, title, description, urlToImage } = props;

	return (
		<div style={styles.articleContainer}>
			<img src={urlToImage} style={styles.image} />
			<div style={styles.header}>
				{author}: <div style={styles.title}>{title}</div> 
			</div>
			<div style={styles.description}>{description}</div>
		</div>
	);
};

export default article;
