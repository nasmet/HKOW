import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	jiesao,
	services,
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
			<div className={styles.header}>
				{title('介绍')}
				<div className={styles.jiesao}>
					好课乐课通过细致精准的调研分析，聚焦前沿教学研究，辅助学校提炼、梳理教育智慧，将其精准、系统、创造性地转化为科研成果。
				</div>
				<div className={styles.content}>
					{
						jiesao.map((item, index)=>{
							return(
								<div key={index} className={styles.item}>
									<div className={styles.dot}></div>
									<div>{item.name}</div>
								</div>
							);
						})
					}
				</div>
			</div>
			<div className={styles.middle}>
				{title('服务流程','#fff')}
				<div className={styles.content}>
					{
						services.map((item, index)=>{
							return(
								<div key={index} className={styles.item}>
									<div className={styles.title}>{item.title}</div>
									{
										item.content.map((item, index)=>{
											return(
												<div key={index} className={styles.element}>
													<div className={styles.dot}></div>
													<div>{item.name}</div>
												</div>
											);
										})
									}
								</div>
							);
						})
					}
				</div>
			</div>
    	</div>
	);
}