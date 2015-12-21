import React from 'react';
import { Link } from 'react-router';

const PostItem = React.createClass({
	render() {
		return (
			<li key={this.props.key}>
				<Link to={'/list/' + this.props.id}>{this.props.title}</Link>
			</li>
		)
	}
})

export default PostItem;