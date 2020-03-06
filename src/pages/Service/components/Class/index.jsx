import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	header,
	middle,
	footer,
} from './config';

export default function Class() {
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
				{title('服务内容')}
				<div className={styles.word}>
					以课程为核心，为培养学生面向未来的能力提供一整套科学、丰富、可持续性的中小学生课 后服务方案。
					目前，好课乐课自主研发了300余门特色校本课程，为中小学生提供多样化、 个性化的课程选择，
					同时建立学习评估体系，关注学生的学习过程，提升学生的问题解决能 力、创新与创造力等。
				</div>
				<div className={styles.content}>
					<div className={styles.bg}></div>
					<div className={styles.tabWrap}>
						{
							header.map((item, index)=>{
								return(
									<div key={index} className={styles.item} style={item.style}>
										<div className={styles.img} style={{background: `url(${item.icon})`, width: `${item.width?item.width:100}px`,height: `${item.width?item.width:100}px`}}></div>
										{
											item.content.map((item, index)=>{
												return(
													<div key={index}>{item}</div>
												)
											})
										}
									</div>
								);
							})
						}
					</div>
				</div>
			</div>
  			<div className={styles.footer}>
      			{title('课程特色')}
      			<div className={styles.content}>
	      			{
	      				footer.map((item, index)=>{
	      					return(
								<div key={index} className={styles.item} style={{background: `url(${item.icon})`}} >
									<div className={styles.name}>{item.name}</div>
								</div>
	      					)
	      				})
	      			}
      			</div>
      		</div>
    	</div>
	);
}