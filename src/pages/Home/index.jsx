import React, {
	Component,
	useEffect,
	useState,
} from 'react';
import {
	Link,
} from 'react-router-dom';
import {
	Loading,
} from '@alifd/next';
import Img from '@icedesign/img';
import styles from './index.module.scss';
import {
	services,
	news,
} from './config';

export default function Home() {
	const {
		response,
		loading,
	} = hooks.useRequest(api.getEveryTypeFirst,{},[]);
	console.log(response);

	return (
		<div className={styles.wrap}>
			<div className={styles.header}>
				<div className={styles.titleWrap}>
					<div className={styles.icon}>
						<img draggable={false} src={model.img.arrowLeft} />
					</div>
					<div className={styles.title}>服务项目</div>
					<div className={styles.icon}>
						<img draggable={false} src={model.img.arrowRight} />
					</div>
				</div>
				<div className={styles.tabWrap}>
					{
						services.map((item, index)=>{
							return (
								<div key={index} className={styles.item} onClick={()=>{model.history.push({ pathname: '/service', state:{key: `${item.key}`}})}}>
									<div className={styles.icon}>
										<img draggable={false} src={item.icon} />
									</div>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.content}>{item.content}</div>
									<div className={styles.linkWrap}>
										<Link className={styles.link} to={{ pathname: '/service', state:{key: `${item.key}`}}}>了解更多</Link>
									</div>
								</div>
							);
						})
					}
				</div>
			</div>
			<div className={styles.middle}>
				<div className={styles.titleWrap}>
					<div className={styles.icon}>
						<img draggable={false} src={model.img.arrowLeft} />
					</div>
					<div className={styles.title}>新闻动态</div>
					<div className={styles.icon}>
						<img draggable={false} src={model.img.arrowRight} />
					</div>
				</div>
				<Loading visible={loading} inline={false}>
				<div className={styles.tabWrap}>
					
					{
						response.map((item, index)=>{
							return (
								<div key={index} className={styles.item} onClick={()=>{model.history.push({ pathname: '/news', state:{key: `${news[index].key}`}})}}>
									<div className={styles.icon} style={{background: news[index].color}}></div>
									<div className={styles.name} style={{color: news[index].color}}>{news[index].name}</div>
									<div className={styles.title2} >{item.title}</div>
									<div className={styles.content} dangerouslySetInnerHTML={{__html: `${item.content}`}}></div>
									<div className={styles.linkWrap}>
										<Link className={styles.link} to={{ pathname: '/news', state:{key: `${news[index].key}`}}}>更多</Link>
									</div>
								</div>
							);
						})
					}
				</div>
				</Loading>
			</div>
    	</div>
	);
}