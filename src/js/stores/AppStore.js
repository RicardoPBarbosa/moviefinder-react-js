var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';
var _error = '';

var AppStore = assign({}, EventEmitter.prototype, {
	setMovieResults: function(movies){
		_movies = movies;
	},
	getMovieResults: function(){
		return _movies;
	},
	setError: function(error){
		_error = error;
	},
	getError: function(){
		return _error;
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.SEARCH_MOVIES:
			AppAPI.searchMovies(action.movie);
			AppStore.setError('');
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_MOVIE_RESULTS:
			AppStore.setMovieResults(action.movies);
			AppStore.setError('');
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_ERROR:
			AppStore.setError(action.error);
			AppStore.setMovieResults([]);
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;