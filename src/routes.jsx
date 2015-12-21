import React from 'react';
import {Router, Route} from 'react-router';

import App from './app';
import PostList from './views/posts';
import Post from './views/post';

const routes = (
	<Router>
		<Route path="/" component={App}>
			<Route path="list" component={PostList} />
			<Route path="list/:id" component={Post} />
		</Route>
	</Router>
)

export default routes;