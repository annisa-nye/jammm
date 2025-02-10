import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const App = () => {
	const [searchResults, setSearchResults] = useState([
		{ id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
		{ id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
		{ id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
	]);
	const [playlistTracks, setPlaylistTracks] = useState([]); // Initialize as empty array

	return (
		<div className='App'>
			<h1>Jammming</h1>
			<SearchBar />
			<div className='App-content'>
				<SearchResults results={searchResults} />
				<Playlist tracks={playlistTracks} />
			</div>
		</div>
	);
};


export default App;
