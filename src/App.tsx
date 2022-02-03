import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { People } from './models/people';
import List from './components/List';
import AddToList from './components/AddToList';

function App() {
	const [people, setPeople] = useState<People[]>([
		{
			name: 'Lebron james',
			url: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80',
			age: 36,
			note: 'Allergic to saying on the team',
		},
	]);

	return (
		<div className="App">
			<h1>People invited to our party</h1>
			<List people={people} />
			<AddToList people={people} setPeople={setPeople} />
		</div>
	);
}

export default App;
