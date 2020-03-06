// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import React from 'react';

import BasicLayout from './layouts/BasicLayout';

import Home from './pages/Home';

const Service = React.lazy(() =>
	import ('./pages/Service'));
const Case = React.lazy(() =>
	import ('./pages/Case'));
const News = React.lazy(() =>
	import ('./pages/News'));
const Company = React.lazy(() =>
	import ('./pages/Company'));
const About = React.lazy(() =>
	import ('./pages/About'));

const NewsDetails = React.lazy(() =>
	import ('./pages/NewsDetails'));

import NotFound from './common/components/NotFound';

const routerConfig = [
	// 分组路由，children 里的路由会将父节点的 component 作为布局组件
	{
		id: '1000',
		path: '/',
		component: BasicLayout,
		children: [{
			id: '1001',
			path: '/home',
			component: Home,
			exact: true,
		}, {
			id: '1002',
			path: '/service',
			component: Service,
			exact: true,
		}, {
			id: '1003',
			path: '/case',
			component: Case,
			exact: true,
		}, {
			id: '1004',
			path: '/news',
			component: News,
			exact: true,
		}, {
			id: '1005',
			path: '/company',
			component: Company,
			exact: true,
		}, {
			id: '1006',
			path: '/about',
			component: About,
			exact: true,
		}, 	{
			id: '1007',
			path: '/newsdetails',
			component: NewsDetails,
		},{
			id: '10000',
			path: '/',
			// 重定向
			redirect: '/home',
		}, {
			id: '10001',
			// 404 没有匹配到的路由
			component: NotFound,
		}]
	},
];

export default routerConfig;