// WRITE YOUR CODE BELOW THIS LINE
'use strict';

var favMovies = [{title: "Fight Club", year: 1999, rating: 8.8, description: "thriller",
                  directors: ['David Fincher'], writers: ['Chuck Palahniuk', 'Jim Uhls'],
				   stars: ['Brad Pitt, Edward Norton'], genre: ['Drama'] },
                 {title: "Snatch", year: 2000, rating: 8.2, description: "comedy crime",
				  directors: ['Guy Ritchie'], writers: ['Guy Ritchie'],
				 stars: ['Brad Pitt, Jason Statham'], genre: ['Comedy']},
				 {title: "In Bruges", year: 2008, rating: 7.9, description: "comedy drama",
				 directors: ['Martin Mcdonagh'], writers: ['Martin Mcdonagh'],
				 stars: ['Colin Farrel, Brendan Gleeson'], genre: ['Comedy drama']},
				 {title: "Apocalypse Now", year: 1979, rating: 8.5, description: "drama",
				 directors: ['Francis Ford Coppola'], writers: ['John Milius, Micheal Herr'],
				 stars: ['Martin Sheen, Marlon Brando'], genre: ['drama']}   
];

console.log ("The first movie's title: " + favMovies[0].title)
console.log("The second movie's release year is: " + favMovies[1].year)
console.log("The third movie's IMDB rating is: " + favMovies[2].rating)
console.log("The fourth movie's short description is: " + favMovies[3].description)

var averageRating = (favMovies[0].rating + favMovies[1].rating + favMovies[2].rating + favMovies[3].rating ) / 4;
console.log (averageRating)


var averageAge = (2022 - favMovies[0].year + 2022 - favMovies[1].year + 2022 - favMovies[2].year + 2022 -  favMovies[3].year) / 4;
console.log (averageAge)

console.log (favMovies)

console.log ("The first movie's lead director is: " + favMovies[0].directors)
console.log ("The second movie's lead writer is: " + favMovies[1].writers)
console.log ("The third movie's lead star is: " + favMovies[2].stars)
console.log ( "The fourth movie's main genre is: " + favMovies[3].genre)

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
