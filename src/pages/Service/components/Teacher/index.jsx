import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	header,
	middle,
	footer,
} from './config';

export default function Teacher() {
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
				<div className={styles.word}>
					新时代教育发展对教师队伍建设提出了新要求，建设高素质、专业化、创新型教师队伍是推进基础教育高质量发展的重要支持，
					需要科学、系统的教师培训体系。好课乐课以专业的培训服务团队，权威的教育专家资源，精致的会务服务为各教育单位提供专业的教师培训服务。
				</div>
				<div className={styles.content}>
					<div className={styles.icon}></div>
					<div className={styles.title}>服务内容</div>
					<div className={styles.tabWrap}>
						{
							header.map((item, index)=>{
								return(
									<div key={index} className={styles.item} style={item.style}>
										<div className={styles.img} style={{background: `url(${item.icon})`}}></div>
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
			<div className={styles.middle}>
				{title('教师培训课程体系')}
				<div className={styles.content}>
					{
						middle.map((item, index)=>{
							return(
								<div key={index} className={styles.item} style={{background: `url(${item.bg})`}}>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.line}></div>
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
									{item.name}
								</div>
							);
						})
					}
				</div>
      		</div>
    	</div>
	);
}