import React from 'react';
import FilterHeader from './FilterHeader';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import library from './FontAwesomeLibrary';


const App = () => (
	<div className="container wrapper">
		<h1 className="text-center">Todo Application</h1>
		<AddTodo />
		<FilterHeader />
		<VisibleTodoList />
	</div>
);

export default App;