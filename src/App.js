import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
//components
import SearchView from './containers/index';

const { store, persistor } = configureStore({});

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<SearchView />
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
