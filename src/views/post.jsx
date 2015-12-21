import React from 'react';

const Post = React.createClass({
	render() {
		return (
			<div>{this.props.params.id}</div>
		)
	}
})

export default Post;