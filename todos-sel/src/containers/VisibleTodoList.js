import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import TodoList from '../components/TodoList';
import { makeGetVisibleTodos } from "../selectors";

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

const makeMapStateToProps = (state, props) => {
	const getVisibleTodos = makeGetVisibleTodos();
	const mapStateToProps = (state, props) => {
		return {
			todos: getVisibleTodos(state, props)
		};
	};
	return mapStateToProps;
};

	const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
};

const VisibleTodoList = connect(makeMapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;