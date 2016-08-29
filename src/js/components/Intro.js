var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Intro = React.createClass({
	render: function(){
		return(
			<div className="introPage">
				<h1 className="text-center">MOVIE FINDER</h1>
				<div id="hr"></div>
				<p className="text-center">App where you can search for<br/> <span id="cats">movies, series,</span> & <span id="cats">games</span> <br/> using <a target="_blank" href="http://www.omdbapi.com/">OMDb API</a></p>
				<div className="customBtn" onClick={this.openSearch}>SEARCH</div>
				<div className="customBtn2"><a target="_blank" href="https://github.com/RicardoPBarbosa"><i className="fa fa-github" aria-hidden="true"></i> Visit My GitHub</a></div>
			</div>
		)
	},

	openSearch: function(e){
		e.preventDefault();
		$(".introPage").css('display', 'none');
		$(".searchResults").css('display', 'block');
		$(".searchResults input").focus();
		$(".searchResults").removeClass('slideOutDown');
		$(".searchResults").addClass('animated slideInUp');
		$("#app").css('background', 'url(img/back.png)');
	}
});

module.exports = Intro;