import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

let AddTodo = ({dispatch}) => {
	let input;

	return(
		<div className="">
			<form className="form row"
			onSubmit={e => {
				e.preventDefault();
				if(!input.value.trim()) {
					return;
				}

				dispatch(addTodo(input.value));
				input.value='';
			}}
			>
				<div className="form-group col-sm-8">
					<input className="form-control"
						ref={node => {
							input = node
						}}
					/>
				</div>
				<div className="form-group col-sm-4">
					<button className="btn btn-success add" type="submit">Add Todo</button>
				</div>
			</form>
		</div>
	);
};

AddTodo = connect()(AddTodo);

export default AddTodo;