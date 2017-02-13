import React from 'react'; // 引入react
import { Route, IndexRoute } from 'react-router'; // 引入react路由
import { Equipment } from './containers'; // 引入各容器组件

const wrapper = (
	<div>{this.props.children}</div>
);

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
	<Route path="/" component={Wrapper}>
		<IndexRoute component={Equipment} />
		<Route path="/equipment" component={Equipment} />
	</Route>
);

module.exports = routes;