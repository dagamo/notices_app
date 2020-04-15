import axios from 'axios';

export default axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/', //YOUR_API_URL HERE
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		
		//'Content-Type': 'application/x-www-form-urlencoded'
	}
});