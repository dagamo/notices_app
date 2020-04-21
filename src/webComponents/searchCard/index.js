import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';

//styles
import { styles } from './styles';

class SearchView extends React.Component {
	componentDidMount() {
		const { handleSearch } = this.props;
		const { value } = this.refs.firstName;
		handleSearch(value);
		this.refs.addButton.addEventListener('click', (e) => {
			const { value } = this.refs.firstName;
			if (value.length < 50) {
				return handleSearch(value);
			}
			alert('El texto debe ser menor a 50 caracteres');
		});
	}

	render() {
		return (
			<Paper elevation={2} style={styles.paper}>
				<Grid container direction="row" justify="center">
					<Grid item sm={10}>
						<vaadin-text-field label="Noticia a buscar" ref="firstName" value="" />
						<vaadin-button ref="addButton"> Buscar </vaadin-button>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export default SearchView;
