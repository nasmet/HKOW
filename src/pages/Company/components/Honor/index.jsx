import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	first,
	second,
} from './config';

export default function Honor() {
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
				{title('指导专家')}
				<div className={styles.content}>
					{first.map((item, index)=>{
						return(
							<div key={index} className={styles.item}>
								<div className={styles.left} style={{background: `url(${item.icon})`}}>
								</div>
								<div className={styles.right}>
									<div className={styles.title}>{item.title}></div>
									<div className={styles.word}>{item.content}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className={styles.second}>
				{title('专家引领')}
				<div className={styles.top}>
					{second.top.map((item, index)=>{
						return(
							<div key={index} className={styles.item} style={{background: `url(${item.icon})`}}>
								<div className={styles.word}>{item.title}</div>
							</div>
						)
					})}
				</div>
				<div className={styles.bottom}>
					{second.bottom.map((item, index)=>{
						return(
							<div key={index} className={styles.item} style={{background: `url(${item.icon})`}}>
								<div className={styles.word}>{item.title}</div>
							</div>
						)
					})}
				</div>
			</div>
    	</div>
	);
}