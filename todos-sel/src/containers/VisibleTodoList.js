import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from "../selectors";

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;

		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed);

		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed);

		default:
			return todos;
	}
};

const mapStateToProps = (state, props) => {
	return {
		// WARNING: THE FOLLOWING SELECTOR DOES NOT CORRECTLY MEMOIZE
		todos: getVisibleTodos(state, props)
	}
};

	const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;