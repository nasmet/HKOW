import React, {
	Component,
} from 'react';
import {
	Tab,
} from '@alifd/next';
import styles from './index.module.scss';
import {
	first,
} from './config';

export default function Research() {
	const title = (word, color='#333333') =>(
		<div className={styles.titleWrap}>
			<div className={styles.icon}>
				<img draggable={false} src={model.img.arrowLeft} />
			</div>
			<div className={styles.title} style={{color: `${color}`}}>{word}</div>
			<div className={styles.icon}>
				<img draggable={false} src={model.img.arrowRight} />
			</div>
		</div>
	);
	return (
		<div className={styles.wrap}>
  			<div className={styles.first}>
				{title('部分课后服务课程')}
				<div className={styles.content}>
					{first.map((item, index)=>{
						return(
							<div key={index} className={styles.item}>
								<div className={styles.icon} style={{background: `url(${item.icon})`}}>
								</div>
								<div className={styles.word}>
									{
										item.content.map((item, index)=>{
											return <div key={index}>{item}</div>
										})
									}
								</div>
							</div>
						)
					})}
				</div>
			</div>
    	</div>
	);
}