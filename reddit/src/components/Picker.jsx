import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Picker extends Component {
	render() {
		const { value, onChange, options } = this.props;

		return (
			<div className="picker">
				<h1 className="text-left">{value.toUpperCase()}</h1>
				<div className="form-group">
					<select className="form-control" onChange={e => onChange(e.target.value)} value={value}>
						{options.map( option => (
								<option value={option} key={option}>
									{option}
								</option>
						))}
					</select>
				</div>
			</div>
		)
	}
}

Picker.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};