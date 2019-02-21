import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import library from './FontAwesomeLibrary';


const App = () => (
	<div className="container wrapper">
		<h1 className="text-center">Todo Application</h1>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

export default App;