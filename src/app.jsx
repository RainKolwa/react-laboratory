import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Test12</h1>
				{this.props.children}
			</div>
		)
	}
})

export default App;