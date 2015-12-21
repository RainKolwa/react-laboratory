import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Reflux from 'reflux';
import Store from '../stores/store';
import Actions from '../actions/action';

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

const PostItem = React.createClass({
	render() {
		return (
			<li key={this.props.key}>
				<Link to={'/list/' + this.props.id}>{this.props.title}</Link>
			</li>
		)
	}
})

export default PostList;