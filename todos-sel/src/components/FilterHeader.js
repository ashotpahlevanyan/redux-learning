import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions/actions';

const FilterHeader = () => (
	<div className="footer">
		<div className="show">Show :</div>
		<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		{', '}
		<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
	</div>
);

export default FilterHeader;