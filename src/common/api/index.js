import {
	cancelRequest,
	post,
	get,
} from './base';

function getNewsList(data = {}) {
	return post('/news/queryNewsList', data);
}

function getNewsDetails(data = {}) {
	return post('/news/queryNews', data);
}

function getEveryTypeFirst(data = {}) {
	return get('/news/everyTypeFirst', data);
}

export default Object.assign({}, {
	cancelRequest,
	getNewsList,
	getNewsDetails,
	getEveryTypeFirst,
});