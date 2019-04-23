import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

import store from './store/store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);