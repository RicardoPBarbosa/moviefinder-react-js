var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie');

var MovieResults = React.createClass({
	render: function(){
		if(this.props.error != ''){
			return(
				<div className="notFound">
					<h2>{this.props.error}</h2>
				</div>
			)
		}else{
			return(
				<div className="resultsList">
					{
						this.props.movies.map(function(movie, i){
							return(
								<Movie movie={movie} key={i} />
							)
						}.bind(this))
					}
				</div>
			)	
		}
	}
});

module.exports = MovieResults;