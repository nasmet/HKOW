import React from 'react';
import {
	Nav,
} from '@alifd/next';
import {
	Link,
} from 'react-router-dom';

export default function fn(nav) {
	if (nav.auth && !nav.auth()) {
		return;
	}
	if (nav.sub && utils.isArray(nav.sub)) {
		return (
			<Nav.SubNav key={nav.key} style={{color: nav.color}} label={word(nav.name)}>
        		{nav.sub.map(fn)}
      		</Nav.SubNav>
		);
	}
	return (
		<Nav.Item key={nav.key}>
      		<Link to={{ pathname: `${nav.path}`, state:{key: `${nav.key}`}}} onClick={nav.onClick} className="ice-menu-link">
        		{word(nav.name)}
      		</Link>
   		</Nav.Item>
	);
};

function word(name) {
	return (
		<span className="ice-menu-item-text">
      		{typeof name==='string'?name:name()}
    	</span>
	);
};