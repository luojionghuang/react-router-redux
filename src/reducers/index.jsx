import { combineReducers } from 'redux'; // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux'; // 将routerReducer一起合并管理
import { equipment } from './equipment/equipment';
import { home } from './home/home';

module.exports = combineReducers({
	equipment,
    home,
    routing: routerReducer
});