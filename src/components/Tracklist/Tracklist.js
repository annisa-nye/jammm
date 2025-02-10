import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = ({ tracks }) => {
	return (
		<div className='Tracklist'>
			{tracks.map((track) => (
				<Track
					key={track.id} // Unique key
					name={track.name}
					artist={track.artist}
					album={track.album}
				/>
			))}
		</div>
	);
};

export default Tracklist;
