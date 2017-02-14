import React from 'react'; // 引入react
import { Route, IndexRoute } from 'react-router'; // 引入react路由
import { Equipment, Home } from './containers';

const Wrapper = React.createClass({
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
});

const routes = (
	<Route path="/">
		<IndexRoute component={Equipment} />
		<Route path="equipment" component={Equipment} />
		<Route path="home" component={Home} />
	</Route>
);

module.exports = routes;