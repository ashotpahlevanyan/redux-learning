import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({todos, toggleTodo, listId}) => (
	<div>
		<h2>List of Todos</h2>
		<ul className="todoList">
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => toggleTodo(todo.id, listId)}
				/>
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
	toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
