var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Movie = React.createClass({
	render: function(){
		var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;
		switch(this.props.movie.Type){
			case 'movie':
				var type = <i className="fa fa-film" aria-hidden="true"></i>;
				break;
			case 'series':
				var type = <i className="fa fa-television" aria-hidden="true"></i>;
				break;
			case 'game':
				var type = <i className="fa fa-gamepad" aria-hidden="true"></i>;
				break;
		}
		return(
			<div className="result">
				<div className="resInfo"><span id="typeResult">{type} {this.props.movie.Type}</span><a id="visitUrl" target="_blank" href={link}>IMDB</a></div>
				<p id="movieTitle">{this.props.movie.Title}</p>
				<p><b>{this.props.movie.Year}</b></p>
				<img src={this.props.movie.Poster}/>
			</div>
		)
	}
});

module.exports = Movie;