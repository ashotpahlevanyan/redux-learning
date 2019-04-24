import React from 'react';
import FilterHeader from './FilterHeader';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import library from './FontAwesomeLibrary';


const App = ({match: {params}}) => (
	<div className="container wrapper">
		<h1 className="text-center">Todo Application</h1>
		<AddTodo />
		<FilterHeader />
		<VisibleTodoList listId="1" filter={params.filter || 'SHOW_ALL'}/>
		<VisibleTodoList listId="2" filter={params.filter || 'SHOW_ALL'}/>
		<VisibleTodoList listId="3" filter={params.filter || 'SHOW_ALL'}/>
	</div>
);

export default App;