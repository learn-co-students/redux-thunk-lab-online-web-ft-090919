// write your CatList component here
// write your CatList component here

import React from 'react';

const renderCatPics = catPics =>
	catPics.map(cat => (
		<li>
			<img src={cat.url} />
		</li>
	));

const CatList = ({ catPics }) => {
	return (
		<div>
			<ul>{renderCatPics(catPics)}</ul>
		</div>
	);
};

export default CatList;