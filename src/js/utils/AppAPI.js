var AppActions = require('../actions/AppActions');

module.exports = {
	searchMovies: function(movie){
		let apiKey = '';
		switch(movie.type){
			case 'all':
				var type = '';
				var error = 'Nothing Found';
				break;
			case 'movies':
				var type = '&type=movie';
				var error = 'Movies Not Found';
				break;
			case 'series':
				var type = '&type=series';
				var error = 'Series Not Found';
				break;
			case 'games':
				var type = '&type=game';
				var error = 'Games Not Found';
				break;
		}
		$.ajax({
			url: 'http://www.omdbapi.com/?s=' + movie.title + type + '&apikey=' + apiKey,
			dataType: 'json',
			cache: false,
			success: function(data){
				if(data.Response == 'True'){
					AppActions.receiveMovieResults(data.Search);
				}else if(data.Response == 'False'){
					AppActions.receiveError(error);
				}
			}.bind(this),
			error: function(xhr, status, err){
				 console.log(err);
			}.bind(this)
		});
	}
}
