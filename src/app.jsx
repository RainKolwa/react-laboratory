import React from 'react';
import ReactDOM from 'react-dom';
import Waypoint from 'react-waypoint';
import $ from 'jquery';

let boxStyle = {
	padding: 0,
	margin: 0
}

let itemStyle = {
	padding: "60px 10px",
	border: "1px solid blue",
	margin: "10px 20px",
	listStyle: "none"
}

let App = React.createClass({
	getInitialState: function() {
	    // set up list of items ...
	    return {
	    	currentPage: 1,
			loading: false,
	    	items: []
	    };
	},
	_loadMoreItems: function(){
		let that = this;
		let page = that.state.currentPage;
		$.ajax({
			url: 'http://www.xinxinjiazhang.com/api/v1/post',
			type: 'GET',
			dataType: 'json',
			data: {page: page,type: 'article', per_page: 10},
			beforeSend: function(){
				that.setState({ loading: true })
			},
			success: function(result){
				console.log(result);
				let currentItems = that.state.items;
				let currentPage = that.state.currentPage + 1;
				for(let i = 0; i < result.length; i++){
			    	currentItems.push(result[i]);
			    }
				that.setState({
					currentPage: currentPage,
					loading: false,
					items: currentItems
				})
			}
		})
	},
	_renderItems: function(){
		console.log(this.state.items)
		return this.state.items.map(function(obj, index) {
			// ... generate list items here ...
			return (
				<div style={itemStyle} key={index}>
					{obj.title}
				</div>
			)
	    });
	},
	_renderWaypoint: function(){
		if (!this.state.loading) {
	      	return (
	        	<Waypoint
	        		onEnter={this._loadMoreItems}
	        		threshold={0.2} />
	      	);
	    }
	},
	render: function(){
		return (
			<div className="infinite-scroll-example">
		        <div className="infinite-scroll-example__scrollable-parent">
					{this._renderItems()}
					{this._renderWaypoint()}
		        </div>
		    </div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('container'));