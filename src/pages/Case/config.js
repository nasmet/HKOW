import Research from './components/Research';
import Teacher from './components/Teacher';
import Class from './components/Class';

export default [{
	key: 'researchCase',
	tab: '合作案例',
	Component: Research,
}, {
	key: 'teacherCase',
	tab: '师训案例',
	Component: Teacher,
}, {
	key: 'classCase',
	tab: '课后服务',
	Component: Class,
}];