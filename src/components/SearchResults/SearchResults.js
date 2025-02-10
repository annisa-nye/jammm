import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({ results }) => {
	return (
		<div className='SearchResults'>
			<h2>Results</h2>
			<Tracklist tracks={results} />
		</div>
	);
};

export default SearchResults;
