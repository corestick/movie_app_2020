import React from 'react';
import PropTypes from 'prop-types';

function App() {
	return (
	<div>
		<h1>Hello World</h1>
		{movieILike.map(movie => (
			<Movie key={movie.key} name={movie.name} pic={movie.img} rating={movie.rating}/>
		))}
	</div>
  );
}

const movieILike = [
	{
		key : 1,
		name : "엑시트",
		img : "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82012/82012_1000.jpg",
		rating : 4.0
	},
	{
		key : 2,
		name : "명기",
		img : "http://www.hancinema.net/photos/photo545187.jpg",
		rating : 2.4
	},
	{
		key : 3,
		name : "덫",
		img : "http://www.hancinema.net/photos/photo725679.jpg",
		rating : 1.1
	}
];

function Movie({name, pic, rating})
{
	return (
		<div>
			<h2>I like {name}</h2>
			<img src ={pic} alt={name}></img>
			<h4>{rating}/5.0</h4>
		</div>

	)
}

Movie.propTypes = {
	name : PropTypes.string.isRequired,
	pic : PropTypes.string.isRequired,
	rating : PropTypes.number.isRequired,
};

export default App;
