import axios from 'axios';
import * as config from '../config';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = config.TIMEOUT;
axios.defaults.baseURL = config.BASEURL;
// axios.defaults.withCredentials = true;

// http request 拦截器（所有发送的请求都要从这儿过一次），通过这个，我们就可以把token传到后台，我这里是使用sessionStorage来存储token等权限信息和用户信息，若要使用cookie可以自己封装一个函数并import便可使用
axios.interceptors.request.use((configs) => {
	if (configs.method === 'post') {
		configs.data = qs.stringify(configs.data);
		configs.headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			Accept: 'application/json',
		};
	} else {
		configs.data = JSON.stringify(configs.data);
		configs.headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};
	}
	// const token = cookies.get(config.TOKENKEY);
	// if (token) {
	// 	configs.headers.Authorization = lib.decrypt(token);
	// }
	return configs;
}, (err) => {
	return Promise.reject(err);
});

// http response 拦截器（所有接收到的请求都要从这儿过一次）
axios.interceptors.response.use((response) => {
	switch (response.data.resultCode) {
		case 200:
			return response.data.resultData;
		default:
			return Promise.reject(response.data.resultMsg);
	}
}, (error) => {
	return Promise.reject(error.message);
});

const CancelToken = axios.CancelToken;
let cancelRequestTask = () => {};

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params,
			cancelToken: new CancelToken(function executor(c) {
				cancelRequestTask = c;
			}),
		}).then((response) => {
			resolve(response);
		}).catch((err) => {
			if (!err) {
				return;
			}
			reject(err);
		});
	});
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
			cancelToken: new CancelToken(function executor(c) {
				cancelRequestTask = c;
			}),
		}).then((response) => {
			resolve(response);
		}, (err) => {
			if (!err) {
				return;
			}
			reject(err);
		});
	});
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.put(url, data, {
			cancelToken: new CancelToken(function executor(c) {
				cancelRequestTask = c;
			}),
		}).then((response) => {
			resolve(response);
		}, (err) => {
			if (!err) {
				return;
			}
			reject(err);
		});
	});
}

/**
 * delete 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, params = {}) {
	return new Promise((resolve, reject) => {
		axios.delete(url, {
			params,
			paramsSerializer: params => {
				if (typeof params === 'object') {
					return JSON.stringify(params);
				}
				return params;
			},
			cancelToken: new CancelToken(function executor(c) {
				cancelRequestTask = c;
			}),
		}).then((response) => {
			resolve(response);
		}, (err) => {
			if (!err) {
				return;
			}
			reject(err);
		});
	});
}

export function cancelRequest() {
	cancelRequestTask();
}