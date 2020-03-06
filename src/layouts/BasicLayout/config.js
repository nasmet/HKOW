// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
const size_1= '22px';
const size_2= '12px';
const color_1= '#fff';
const color_2= '#666';

const headerMenuConfig = [{
	name: () => '首页',
	path: '/home',
	key: '/home',
	color: color_1,
	size: size_1,
}, {
	name: () => '服务项目',
	key: '/service',
	path: '/service',
	color: color_1,
	size: size_1,
	sub: [{
		key: 'research',
		path: '/service',
		name: '科研服务',
		color: color_2,
		size: size_2,
	}, {
		key: 'system',
		path: '/service',
		name: '课程体系',
		color: color_2,
		size: size_2,
	}, {
		key: 'develop',
		path: '/service',
		name: '课程开发',
		color: color_2,
		size: size_2,
	}, {
		key: 'teacher',
		path: '/service',
		name: '教师培训',
		color: color_2,
		size: size_2,
	}, {
		key: 'class',
		path: '/service',
		name: '课后服务',
		color: color_2,
		size: size_2,
	}]
}, {
	name: () => '案例分享',
	path: '/case',
	key: '/case',
	color: color_1,
	size: size_1,
	sub: [{
		key: 'researchCase',
		path: '/case',
		name: '合作案例',
		color: color_2,
		size: size_2,
	}, {
		key: 'teacherCase',
		path: '/case',
		name: '师训案例',
		color: color_2,
		size: size_2,
	}, {
		key: 'classCase',
		path: '/case',
		name: '课后服务',
		color: color_2,
		size: size_2,
	}]
}, {
	name: () => '新闻资讯',
	key: '/news',
	path: '/news',
	color: color_1,
	size: size_1,
	sub: [{
		key: 'industry',
		path: '/news',
		name: '行业新闻',
		color: color_2,
		size: size_2,
	}, {
		key: 'company',
		path: '/news',
		name: '公司新闻',
		color: color_2,
		size: size_2,
	}, {
		key: 'realtime',
		path: '/news',
		name: '实时新闻',
		color: color_2,
		size: size_2,
	}]
}, {
	name: () => '企业优势',
	path: '/company',
	key: '/company',
	color: color_1,
	size: size_1,
	sub: [{
		key: 'honor',
		path: '/company',
		name: '专家团队',
		color: color_2,
		size: size_2,
	}, {
		key: 'expert',
		path: '/company',
		name: '资质荣誉',
		color: color_2,
		size: size_2,
	}, {
		key: 'cooperation',
		path: '/company',
		name: '合作单位',
		color: color_2,
		size: size_2,
	}]
}, {
	name: () => '关于我们',
	path: '/about',
	key: '/about',
	color: color_1,
	size: size_1,
}];

export {
	headerMenuConfig,
};