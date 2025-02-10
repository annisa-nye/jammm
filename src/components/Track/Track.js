import React from 'react';
import './Track.css';

const Track = ({ name, artist, album }) => {
	return (
		<div className='Track'>
			<p>
				<strong>{name}</strong> - {artist} ({album})
			</p>
			<button>+</button>
		</div>
	);
};

export default Track;
