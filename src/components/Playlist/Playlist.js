import React from 'react';
import Tracklist from '../Tracklist/Tracklist'; // Import Tracklist component
import './Playlist.css';

const Playlist = ({ tracks }) => {
	return (
		<div className='Playlist'>
			<h2>My Playlist</h2>
			<Tracklist tracks={tracks} />
			<button>Save to Spotify</button>
		</div>
	);
};

export default Playlist; // Ensure default export
