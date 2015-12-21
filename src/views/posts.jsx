import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Store from '../stores/store';
import Actions from '../actions/action';
import PostItem from './PostItem';

const PostList = React.createClass({
	mixins: [Reflux.connect(Store, "list")],
	getInitialState() {
		return {
			list: []
		};
	},
	componentDidMount(){
		Actions.fetchList();
	},
	render() {
		let lists = this.state.list.map(function(data){
			return (
				<PostItem key={data.id} id={data.id} title={data.title} />
			)
		})
		return (
			<ul>
				{lists}
			</ul>
		)
	}	
})

export default PostList;