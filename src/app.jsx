import React from 'react';
import ReactDOM from 'react-dom';

let App = React.createClass({
	render: function(){
		return (
			<div>Hello, world</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('container'));