import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@material-ui/core';

//styles
import { styles } from './styles';

const SearchView = (props) => {
	const { handleSearch } = props;
	const [ text, setText ] = useState('');

	const handleOnChangeText = (event) => {
		const { target: { value } } = event;
		setText(value);
	};

	useEffect(()=>{
		handleSearch(text)
	}, [])

	return (
		<Paper elevation={2} style={styles.paper}>
			<Grid container direction="row" justify="center">
				<Grid item sm={10}>
					{' '}
					<TextField
						id="outlined-basic"
						style={styles.input}
						value={text}
						onChange={handleOnChangeText}
						label="Buscar"
						variant="outlined"
					/>
				</Grid>
				<Grid item sm={2}>
					<Button
						style={styles.button}
						variant="contained"
						color="primary"
						onClick={() => handleSearch(text)}
					>
						Buscar
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SearchView;
