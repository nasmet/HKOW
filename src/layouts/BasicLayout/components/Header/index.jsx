import React, {
	useEffect,
	useState,
} from 'react';
import {
	Nav,
	Slider,
} from '@alifd/next';
import Img from '@icedesign/img';
import {
	Link,
} from 'react-router-dom';
import {
	headerMenuConfig,
} from '../../config';
import styles from './index.module.scss';

export default function Header() {
	const word = (nav) => {
		return (
			<span className="ice-menu-item-text" style={{color: `${nav.color}`,fontSize: '20px'}}>
      			{typeof nav.name==='string'?nav.name:nav.name()}
    		</span>
		);
	};

	const fn = (nav) => {
		if (nav.auth && !nav.auth()) {
			return;
		}
		if (nav.sub && utils.isArray(nav.sub)) {
			return (
				<Nav.SubNav key={nav.key} label={word(nav)} onClick={()=>{model.history.push(nav.path)}}>
        		{nav.sub.map(fn)}
      		</Nav.SubNav>
			);
		}
		return (
			<Nav.Item key={nav.key}>
      		<Link to={{ pathname: `${nav.path}`, state:{key: `${nav.key}`}}} className="ice-menu-link">
        		{word(nav)}
      		</Link>
   		</Nav.Item>
		);
	};

	const {
		pathname,
	} = location;

	const defaultPath = pathname === '/' ? '/home' : pathname;
	const [path, setPath] = useState(defaultPath);

	useEffect(() => {
		setPath(defaultPath);
	}, [defaultPath]);

	const slides = [{
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner1.jpg',
	}, {
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner2.jpg',
	}, {
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner3.jpg',
	}, {
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner4.jpg',
	}, {
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner5.jpg',
	}, {
		url: 'https://okleke-web-photo.oss-cn-beijing.aliyuncs.com/%E9%A6%96%E9%A1%B5-banner6.jpg',
	}, ];

	const itemNodes = slides.map((item, index) =>
		<div key={index} className={styles.icon}>
			<img draggable={false} src={item.url} />
		</div>
	);

	const onSelect = paths => {
		setPath(paths[0]);
	};

	return (
		<div className={styles.wrap}>
    		<div className={styles.slideWrap}>
    			<Slider animation='fade' autoplay arrows={false}>{itemNodes}</Slider>
    		</div>
    		<div className={styles.tabWrap}>
    			<Nav
    				selectedKeys={[path]}
				 	triggerType="hover"
    				activeDirection={null}
		    		direction='hoz'
		    		type='line'
		    		onSelect={onSelect}
		  		>
		    		{headerMenuConfig.map(fn)}
		  		</Nav>
    		</div>
    		<div className={styles.logo}>
    			<img draggable={false} src={model.img.logo} />
    		</div>
    	</div>
	);
}