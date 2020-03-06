import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	header,
	middle,
	footer,
} from './config';

export default function System() {
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
      			{
      				header.map((item, index)=>{
      					return(
							<div key={index} className={styles.item}>
								<div className={styles.left}>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.line} style={{width: `${item.title.length*30}px`}}></div>
									<div className={styles.word}>{item.content}</div>
								</div>
								<div className={styles.right}>
									<div className={styles.img} style={item.style}></div>
								</div>
							</div>
      					);
      				})
      			}
      		</div>
      		<div className={styles.middle}>
      			{title('服务内容')}
				<div className={styles.top}>
					{
						middle.top.map((item, index)=>{
	      					return(
								<div key={index} className={styles.item}>
									<div className={styles.title}>{item.title}</div>
									{
										item.content.map((item, index)=>{
											return(
												<div key={index} className={styles.word}>{item}</div>
											);
										})
									}
								</div>
	      					);
	      				})
					}
				</div>
				<div className={styles.amid}>
					<div className={styles.step} style={{background: `url(${model.img.step})`}}></div>
				</div>
				<div className={styles.top} style={{justifyContent: 'flex-end'}}>
					{
						middle.bottom.map((item, index)=>{
	      					return(
								<div key={index} className={styles.item}>
									<div className={styles.title}>{item.title}</div>
									{
										item.content.map((item, index)=>{
											return(
												<div key={index} className={styles.word}>{item}</div>
											);
										})
									}
								</div>
	      					);
	      				})
					}
				</div>
      		</div>
      		<div className={styles.footer}>
      			{title('服务流程','#fff')}
				<div className={styles.content}>
					{
						footer.map((item, index)=>{
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