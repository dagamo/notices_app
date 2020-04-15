import React, { useState, useEffect } from 'react';
import axios from './../utils/Api';
import { api_key } from './../constants/notices_api';
import moment from 'moment';
//components
import Notice from './../component/article';
//styles
import {styles} from './styles'

const SearchView = (props) => {
	const [ text, setText ] = useState('');
	const [ isLoading, setLoading ] = useState(false);
	const [ notices, setNotices ] = useState([]);

	const handleOnChangeText = (event) => {
		const { target: { value } } = event;
		setText(value);
	};

	const handleSearch = () => {
		let date = moment().format('YYYY-MM-DD');
		setLoading(true);
		let url = `everything?q=${text}&from=${date}&sortBy=publishedAt&apiKey=${api_key}`;
		axios
			.get(url)
			.then(({ data: { articles } }) => {
        setLoading(false)
				setNotices(articles);
			})
			.catch((error) => {
        setLoading(false)
				console.log(error);
			});
	};

	const renderNotices = () =>
		notices.map((not, i) => {
			const { author, title, description, urlToImage } = not;
			const noticeProps = {
				author,
				title,
				description,
				urlToImage
			};
			return <Notice {...noticeProps} />;
		});

	return (
		<div>
			<input type="text" value={text} onChange={handleOnChangeText} />
			<button onClick={() => handleSearch()}>Buscar</button>
			{isLoading && 'Buscando....'}
			<div style={styles.noticeContainer}>
      {notices.length !== 0 && renderNotices()}
      </div>
		</div>
	);
};

export default SearchView;
