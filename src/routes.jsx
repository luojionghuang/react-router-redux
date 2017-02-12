import React from 'react'; // 引入react
import { Route, IndexRoute } from 'react-router'; // 引入react路由
import { Equipment } from './containers'; // 引入各容器组件

const routes = (
	<Route path="/" component={Equipment} />
);

module.exports = routes;