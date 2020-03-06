import icon2 from './img/icon-2.png';
import icon3 from './img/icon-3.png';
import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import {
	middle,
} from './config';


export default function About() {
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
      			{title('企业简介')}
      			<div className={styles.content}>
	      			<div className={styles.word}>好课乐课智慧教育科技（深圳）有限公司于2014年10月创立，坐落在南山留仙大道“金骐智谷大厦”2楼。
	      			公司秉承“以科研为龙头、以智库为支撑以服务为核心”的企业理念，汇聚北京师范大学、东北师范大学、华南师范大学等各大院校1000多名资深专家，
	      			全力为中小学提供科学、先进的综合性服务。项目范围：“科研服务、课程体系、课程开发、教师培训、课后服务”等。
	      			</div>
	      			<div className={styles.word}>
	      				学生是国之未来，教育是立国之本。“好课乐课”深怀教育强国之崇高使命，经过多年的精心研究，集中研发了800多种校本课程，
	      				受到中、小学师生们的热爱！迄今为止，有300多门被评为深圳中小学好课程，100多门被评为广东省中小学特色课程，
	      				获得2项省基础教育成果一等奖。
	      			</div>
	      			<div className={styles.word}>
	      				几年来，“好课乐课”承办了10多次高峰论坛、60多场专题培训等，培训人员达近万人次；先后为300多所学校提供服务，
	      				指导100多名教师进行课程开发；自主研发了500多门科学、丰富的校本课程，应用互联网“华课程”为学生们提供多样化的课程，
	      				并设有即时测评体系。
	      			</div>
	      			<div className={styles.word}>
	      				未来，好课乐课立足深圳、服务粤港澳大湾区，开创未来教育，以先进的教育理念，成熟的服务体系，竭诚为中小学教育事业的变革与创新一路护航。
	      			</div>
      			</div>
      		</div>
      		<div className={styles.middle}>
      			{title('发展历程')}
      			<div className={styles.content}>
      				{
						middle.map((item,index)=>{
							return(
								<div key={index} className={styles.item}>
									<div className={styles.left}>
										<div className={styles.time}>{item.time}</div>
										<div className={styles.dot} style={{height: `${item.content.length*28}px`}}></div>
									</div>
									<div className={styles.right}>	
										{
											item.content.map((item,index)=>{
												return (
													<div key={index} className={styles.element}>
														<div className={styles.time}>{item.time}</div>
														<div>{item.time?'：':''}</div>
														<div className={styles.title}>{item.title}</div>
													</div>
												)
											})
										}
									</div>
								</div>	
							)
						})
      				}
      			</div>
      			<div className={styles.footer}>
      				{title('联系我们')}
      				<div className={styles.content}>
      					<div className={styles.title}>好课乐课智慧教育科技（深圳）有限公司</div>
      					<div className={styles.address}>地址：深圳市南山区塘岭路1号金骐智谷大厦202-203</div>
      					<div className={styles.address} style={{marginBottom: '20px'}}>电话：0755-89927699</div>
      					<div className={styles.iconWrap}>
      						<div className={styles.item} style={{marginRight:'20px'}}>
      							<div className={styles.icon} style={{background: `url(${icon2})`}}></div>
      							<div>好课乐课公众号</div>
      						</div>
      						<div className={styles.item}>
      							<div className={styles.icon} style={{background: `url(${icon3})`}}></div>
      							<div>未来课程智库公众号</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
    	</div>
	);
}