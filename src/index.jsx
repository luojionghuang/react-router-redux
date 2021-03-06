import React from 'react';  // 引入React
import ReactDOM from 'react-dom'; // 引入render方法
import { Provider } from 'react-redux'; // 利用Provider可以使我们的 store 能为下面的组件所用
import { Router, browserHistory, hashHistory } from 'react-router'; // Browser history 是由 React Router 创建浏览器应用推荐的 history
import { syncHistoryWithStore } from 'react-router-redux'; // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件

import finalCreateStore from './store';  //引入store配置
import reducer from './reducers';  // 引入reducers集合
import routes from './routes';   // 引入路由配置

// 给增强后的store传入reducer
const store = finalCreateStore(reducer);

// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('root')
);