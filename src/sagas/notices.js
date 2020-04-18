import { put, call, takeLatest } from 'redux-saga/effects';
import { SET_NOTICES, FETCH_START_NOTICES, FETCH_ERROR_NOTICES } from './../constants/actionTypes';
import moment from 'moment';
import axios from './../utils/Api';
import { api_key } from './../constants/notices_api';

function* getNotices({ text }) {
	try {
		if (text.trim() === '') {
			yield put({ type: SET_NOTICES, payload: [] });
		} else {
			const date = moment().format('YYYY-MM-DD');
			const url = `everything?q=${text}&from=${date}&sortBy=publishedAt&apiKey=${api_key}`;
			const result = yield call(axios.get(url));
			yield put({ type: SET_NOTICES, payload: result.data.data.articles });
		}
	} catch (error) {
		yield put({ type: FETCH_ERROR_NOTICES });
	}
}

//Watchers
export default function*() {
	yield takeLatest(FETCH_START_NOTICES, getNotices);
}
