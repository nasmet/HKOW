import React, {
	Component,
} from 'react';
import Img from '@icedesign/img';
import styles from './index.module.scss';
import {
	header,
	middle,
	footer,
	develop,
} from './config';

export default function Develop() {
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
      		<div className={styles.middle}>
      			<div className={styles.first}>
					{title('课程委托开发')}
					<div className={styles.develop}>
						<div className={styles.left}>
							课程委托开发是学校教育哲学的 还原，
							以学校为主体对课程进行 设计、规划、开发、实施以及资 源整合的课程建设，
							既是学校发 展的一种内在需求，也是课程改 革的一大趋势。
						</div>
						<div className={styles.right}>
							<div className={styles.center}></div>
							{
								develop.map((item,index)=>{
									return(
										<div key={index} className={styles.item} style={item.style}>
											<div className={styles.title}>{item.title}</div>
											{
												item.content.map((item,index)=>{
													return(
														<div key={index} className={styles.element}>
															<div className={styles.dotWrap}>
																<div className={styles.dot}></div>
															</div>
															<div style={item.style}>{item.name}</div>
														</div>
													)
												})
											}
										</div>
									)
								})
							}
						</div>
					</div>
					{title('课程分类')}
					<div className={styles.img}></div>
      			</div>
      			<div className={styles.second}>
      				{title('课程指导开发')}
      				<div className={styles.word}>课程指导开发旨在通过指导教师进行课程的开发、组织、实施和管理，
      				转变教育观、课程观和教学方式，促进教师专业成长。</div>
					<div className={styles.tabWrap}>
						{
							middle.map((item, index)=>{
								return (
									<div key={index} className={styles.item}>
										<div className={styles.icon} style={{background: item.color}}></div>
										{
											item.content.map((item, index)=>{
												return <div key={index} className={styles.name}>{item}</div>
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
				{title('服务流程', '#fff')}
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