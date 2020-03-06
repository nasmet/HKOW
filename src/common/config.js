const DEVHOST = 'http://service.okleke.com';
const TESTHOST = 'http://service.okleke.com';
const BUILDHOST = 'http://service.okleke.com';
const DEVBASEURL = `${DEVHOST}`;
const TESTBASEURL = `${TESTHOST}`;
const BUILDBASEURL = `${BUILDHOST}`;
export const BASEURL = getBaseUrl();
export const TIMEOUT = 30 * 1000;
export const TOKENKEY = 'Token';
export const LIMIT = 10;

function getBaseUrl() {
	switch (process.env.NODE_ENV) {
		case 'development':
			return BUILDBASEURL;
		case 'production':
			return BUILDBASEURL;
		default:
			return TESTBASEURL;
	}
}