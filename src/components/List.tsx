import React from 'react';
import { IPorps } from '../models/people';

const List: React.FC<IPorps> = ({ people }) => {
	const renderList = (): JSX.Element[] => {
		return people.map((person, index) => (
			<li className="List" key="index">
				<div className="List-header">
					<img src={person.url} alt="" className="List-img" />
					<h2>{person.name}</h2>
				</div>
				<p>{person.age} years old</p>
				<p className="List-note">{person.note}</p>
			</li>
		));
	};

	return <ul>{people.length > 0 ? renderList() : 'No user found'}</ul>;
};

export default List;
