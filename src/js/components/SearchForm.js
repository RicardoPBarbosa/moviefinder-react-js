var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
	getInitialState: function(){
		return {
      		selectedOption: 'all'
    	}
	},

	resetSelectedOption: function(){
		this.setState({selectedOption: 'all'});
	},

	render: function(){
		return(
			<div className="searchForm">
				<form onSubmit={this.onSubmit}>
					<span><img  onClick={this.closeSearch} src="img/left.png" /></span>
					<input type="text" ref="title" placeholder="Enter the title ..." />
					<button className="enterSearch">SEARCH</button>
					<div className="inputBorder"></div>
					<ul>
						<li>
							<input type='radio' value='all' name='radio' ref='type' id="all" checked={this.state.selectedOption === 'all'} onChange={this.handleOptionChange} />
        					<label htmlFor='all'>All</label>
						</li>
						<li>
							<input type='radio' value='movies' name='radio' ref='type' id="movies" checked={this.state.selectedOption === 'movies'} onChange={this.handleOptionChange} />
        					<label htmlFor='movies'>Movies</label>
						</li>
						<li>
							<input type='radio' value='series' name='radio' ref='type' id="series" checked={this.state.selectedOption === 'series'} onChange={this.handleOptionChange} />
        					<label htmlFor='series'>Series</label>
						</li>
						<li>
							<input type='radio' value='games' name='radio' ref='type' id="games" checked={this.state.selectedOption === 'games'} onChange={this.handleOptionChange} />
        					<label htmlFor='games'>Games</label>
						</li>
					</ul>
				</form>
			</div>
		)
	},

	handleOptionChange: function (changeEvent) {
	  this.setState({selectedOption: changeEvent.target.value});
	},

	closeSearch: function(){
		$(".searchResults").removeClass('slideInUp');
		$(".searchResults").addClass('slideOutDown');
		$(".searchResults input").val('');
		$("#app").css('background', 'url(img/back1.png)');
		window.setTimeout( function(){
            $(".searchResults").css('display', 'none');
			$(".introPage").css('display', 'block');
        }, 400);
		this.resetSelectedOption();
	},

	onSubmit: function(e){
		e.preventDefault();
		if(this.refs.title.value.trim() != ''){
			var movie = {
				title: this.refs.title.value.trim(),
				type: this.state.selectedOption
			}

			AppActions.searchMovies(movie);
		}
	}
});

module.exports = SearchForm;