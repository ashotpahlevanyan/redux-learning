import React from 'react';
import PropTypes from 'prop-types';


const Link = ({active, children, onClick}) => {
		return (
			<a className={ active ? "btn btn-danger" : "btn btn-info"}
				href=""
			  onClick={e => {
			  	e.preventDefault();
				  onClick();
			  }}
			>
				{children}
			</a>
		);
};

Link.propTypes = {
	active : PropTypes.bool.isRequired,
	children : PropTypes.node.isRequired,
	onClick : PropTypes.func.isRequired
};

export default Link;