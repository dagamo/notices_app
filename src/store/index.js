import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import reduxSaga from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootSaga from './../sagas/index';

const persistConfig = {
	key: 'root',
	storage: storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = reduxSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
  let store = {...createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(middleware))),
    runSaga: middleware.run(rootSaga)
  };
	let persistor = persistStore(store);
	return { store, persistor };
};
// export default { persistor, store };
