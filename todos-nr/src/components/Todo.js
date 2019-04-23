import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Todo = ({ onClick, completed, text }) => (
	<li
		className={completed ? "completed" : ''}
		onClick={onClick}
		>
		{text}
		{completed ?
			<FontAwesomeIcon className="faicon" icon="check-circle"/>
			:
			<FontAwesomeIcon className="faicon" icon="circle"/>
		}

	</li>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
};

export default Todo;