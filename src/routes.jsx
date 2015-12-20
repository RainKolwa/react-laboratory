import React from 'react';
import {Router, Route} from 'react-router';

import App from './app';
import PostList from './views/posts';

const routes = (
	<Router>
		<Route path="/" component={App}>
			<Route path="list" component={PostList} />
		</Route>
	</Router>
)

export default routes;