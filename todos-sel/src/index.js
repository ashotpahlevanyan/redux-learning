import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

import store from './store/store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

render(
	<Root store={store}/>,
	document.getElementById('root')
);