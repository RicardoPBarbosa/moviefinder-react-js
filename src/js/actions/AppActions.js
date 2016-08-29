var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	searchMovies: function(movie){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SEARCH_MOVIES,
			movie: movie
		});
	},

	receiveMovieResults: function(movies){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
			movies: movies
		});
	},

	receiveError: function(error){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ERROR,
			error: error
		});
	}
}

module.exports = AppActions;