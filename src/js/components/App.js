var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Intro = require('./Intro');
var SearchForm = require('./SearchForm');
var MovieResults = require('./MovieResults');

function getAppState(){
	return {
		movies: AppStore.getMovieResults(),
		error:  AppStore.getError()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		if(this.state.movies == ''){
			if(this.state.error != ''){
				var movieResults = <MovieResults error={this.state.error} />
			}else{
				var movieResults = '';
			}
		}else{
			var movieResults = <MovieResults movies={this.state.movies} error={this.state.error} />
		}
		return(
			<div>
				<Intro />
				<div className="searchResults">
					<SearchForm />
					{movieResults}
				</div>
			</div>
		)
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;