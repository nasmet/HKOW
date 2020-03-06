import React from 'react';
import Img from '@icedesign/img';
import {
	Link,
} from 'react-router-dom';
import styles from './index.module.scss';
import {
	service,
	caseShare,
	company,
	news,
} from './config';

export default function Footer() {
	const renderItem = (config)=>{
		return (
			<div className={styles.item}>
				<div className={styles.title}>{config.name}</div>
				{config.child.map((item, index)=>{
					return (
						<Link key={index} className={styles.name} to={{ pathname: `${config.path}`, state:{key: `${item.key}`}}}>{item.name}</Link>
					);
				})}
			</div>
		);
	};
	return (
		<div className={styles.wrap}>
			<div className={styles.one}>
				<div className={styles.logo}>
					<img draggable={false} src={model.img.logo} />
				</div>
				<div className={styles.phone}>
					0755-89927699
				</div>
				<Link className={styles.link} to='http://www.chinatcf.com/' onClick={(e)=>{
					e.preventDefault();
    				window.open("http://www.chinatcf.com/")}}>
					未来课程智库
				</Link>
			</div>
			{renderItem(service)}
			{renderItem(caseShare)}
			{renderItem(company)}
			{renderItem(news)}
			<div className={styles.iconWrap}>
				<div className={styles.item} style={{marginRight:'20px'}}>
					<div className={styles.icon} style={{background: `url(${model.img.code1})`}}></div>
					<div>好课乐课公众号</div>
				</div>
				<div className={styles.item}>
					<div className={styles.icon} style={{background: `url(${model.img.code2})`}}></div>
					<div>未来课程智库公众号</div>
				</div>
			</div>
			<div className={styles.version}>版权所有©️好课乐课智慧教育科技（深圳）有限公司
				<Link target="blank" to="http://www.beian.miit.gov.cn/" onClick={(e)=>{
					e.preventDefault();
    				window.open("http://www.beian.miit.gov.cn/")}}>
    				粤ICP13003715号-2
				</Link>
    		</div>
    	</div>
	);
}

