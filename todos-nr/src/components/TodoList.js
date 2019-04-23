import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({todos, onTodoClick}) => (
	<div>
		<h2>List of Todos</h2>
		<ul className="todoList">
			{todos.map((todo) => (
				<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
			))}
		</ul>
	</div>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
