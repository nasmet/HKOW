import Research from './components/Research';
import System from './components/System';
import Develop from './components/Develop';
import Teacher from './components/Teacher';
import Class from './components/Class';

export default [{
	key: 'research',
	tab: '科研服务',
	Component: Research,
}, {
	key: 'system',
	tab: '课程体系',
	Component: System,
}, {
	key: 'develop',
	tab: '课程开发',
	Component: Develop,
}, {
	key: 'teacher',
	tab: '教师培训',
	Component: Teacher,
}, {
	key: 'class',
	tab: '课后服务',
	Component: Class,
}];