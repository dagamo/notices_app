import React, { useState, useEffect } from 'react';
import { Container, Grid, CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
//actions
import { startGetNotices } from './../actions/notices';
//components
import Notice from './../component/noticeCard/index';
import SearchCard from './../component/searchCard/index';
//styles
import { styles } from './styles';

const SearchView = (props) => {
	const { notice: { notices, isLoading } } = props;
	
	const handleSearch = (text) => {
		const { startGetNotices } = props;
		startGetNotices({text});
	};


	const renderNotices = () =>
		notices.map((not, i) => {
			const { author, title, description, urlToImage, publishedAt, content } = not;
			const noticeProps = {
				author,
				title,
				description,
				urlToImage,
				publishedAt,
				content
			};
			return <Notice {...noticeProps} />;
		});
		console.log('notices', notices)
	return (
		<div style={styles.container}>
			<Container>
				<Grid container direction="column">
					<Grid item sm={12}>
						<SearchCard handleSearch={handleSearch} />
					</Grid>
					<Grid item sm={12} />
				</Grid>
				{isLoading && (
					<Grid item sm={12}>
						<CircularProgress color="secondary" />
					</Grid>
				)}
				<Grid  container direction="row" style={styles.noticeContainer}>{notices && notices.length !== 0 && renderNotices()}</Grid>
			</Container>
		</div>
	);
};

const mapDispatchToProps = {
	startGetNotices
};

const mapStateToProps = (state) => {
	console.log(state)
	return {
		notice: state.notices
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
