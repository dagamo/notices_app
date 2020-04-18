import { all } from 'redux-saga/effects';
import notices from './notices';

export default function* rootSaga() {
	yield all([ notices() ]);
}
