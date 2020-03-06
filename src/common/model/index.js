import history from './history';
import log from './log';
import traverse from './traverse';
import * as context from './context';
import onFire from './onfire';
import * as img from './img';

export default Object.assign({
	history,
	log,
	traverse,
	onFire,
	img,
}, context,)