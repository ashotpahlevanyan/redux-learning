import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

render(
	<Root/>,
	document.getElementById('root')
);