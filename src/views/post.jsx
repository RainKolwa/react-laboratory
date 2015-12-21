import React from 'react';
import Reflux from 'reflux';
import Store from '../stores/store';
import Actions from '../actions/action';

const Post = React.createClass({
	mixins: [Reflux.connect(Store, "baseInfo")],
	getInitialState() {
		return {
			baseInfo: []
		}
	},
	componentDidMount() {
		Actions.fetchBaseInfo(this.props.params.id);
	},
	render() {
		return (
			<div>
				<p>id: {this.props.params.id}</p>
				<p>title: {this.state.baseInfo.title}</p>
			</div>
		)
	}
})

export default Post;