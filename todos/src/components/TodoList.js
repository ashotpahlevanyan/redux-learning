import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({todos, onTodoClick}) => (
	<div>
		<h2>List of Todos</h2>
		<ul className="todoList">
			{todos.map((todo, index) => (
				<Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
			))}
		</ul>
	</div>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
