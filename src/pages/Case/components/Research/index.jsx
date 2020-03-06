import React, {
	Component,
	useState,
} from 'react';
import {
	Tab,
} from '@alifd/next';
import styles from './index.module.scss';
import {
	first,
	five,
} from './config';
import icon15 from './img/icon-15.png';

export default function Research() {
	const [curGradeKey, setCurGradeKey] = useState('1');
	const active = `url(${icon15}) 100% 100% no-repeat`;

	const onGradeChange = key => {
		setCurGradeKey(key);
	};

	const CustomTabItem = ({
		title
	}) => {
		return (
			<div className={styles.tabItem}>
				{title}
		    </div>);
	}

	const title = (word, color = '#333333') => (
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
				{title('科研案例')}
				<div className={styles.content}>
					{first.map((item, index)=>{
						return(
							<div key={index} className={styles.item} style={{background: `url(${item.icon})`}}>
							</div>
						)
					})}
				</div>
			</div>
			<div className={styles.second}>
				{title('课程体系案例')}
				<div className={styles.word}>
					好课乐课资深专家团队为80多所学校课程体系建设服务，在2019年服务20项中有10项获课程体系奖。
				</div>
				<div className={styles.word} style={{margin: '30px 0 20px 0',color: '#333333'}}>
					“创感教育”课程体系
				</div>
				<div className={styles.content}>
					<div className={styles.left}>
						<div>
							创感教育”课程体系根据学校“向生活求教为未来育人的办学理念，
							强调从人的感受出发创造美好的教育生活体验培养走向世界完整而有创造力的现代人。
						</div>
						<div>
							“创感教育”基于信息时代的“高概念、高 感性”认知特点，其中“创”主要由创新意识创新品质构成；
							“感”则突出了人的感性认识，感受表达。
						</div>
					</div>
					<div className={styles.right}></div>
				</div>
			</div>
			<div className={styles.four}>
				{title('课程开发案例')}
  				<div className={styles.word}>系列校本课程首创“观察分析—尝试解决—论证交流—反思提问”的探究性学习方 式，
  				并建构完整的学习评价体系。课程引导学生细心观察，发现生活中的数学问题，并积极 探究解决问题，
  				引导学生建构有趣味、有意义的数学认知。</div>
  				<div>
	  				<Tab shape='text' tabRender={(key, props)=><CustomTabItem key={key} {...props} />}  
	  					navClassName={styles.tab} defaultActiveKey="1" onChange={onGradeChange}
	  				>
				        <Tab.Item style={{background: curGradeKey==1?`${active}`:' #292C34'}} title="一年级" key="1">
				        	<div className={styles.item}>
				        		<div className={styles.name}>主题一：认识乐高</div>
				        		<div className={styles.name}>主题二：动物世界</div>
				        		<div className={styles.name}>主题三：户外天地</div>
				        	</div>
				        </Tab.Item>
				        <Tab.Item style={{background: curGradeKey==2?`${active}`:' #292C34'}} title="二年级" key="2">
				       	 	<div className={styles.item}>
				        		<div className={styles.name}>主题一：快乐运动</div>
				        		<div className={styles.name}>主题二：美味食物</div>
				        	</div>
				        </Tab.Item>
				        <Tab.Item style={{background: curGradeKey==3?`${active}`:' #292C34'}} title="三年级" key="3">
				        	<div className={styles.item}>
				        		<div className={styles.name}>第一单元：动物园</div>
				        		<div className={styles.name}>第二单元：时光旅行</div>
				        		<div className={styles.name}>第三单元：趣味社团</div>
				        		<div className={styles.name}>第四单元：超市总动员</div>
				        	</div>
				        </Tab.Item>
				        <Tab.Item style={{background: curGradeKey==4?`${active}`:' #292C34'}} title="四年级" key="4">
				        	<div className={styles.item}>
				        		<div className={styles.name}>第一单元：我爱教室</div>
				        		<div className={styles.name}>第二单元：我爱社区</div>
				        		<div className={styles.name}>第三单元：我爱我家</div>
			        			<div className={styles.name}>第四单元：我爱伙伴</div>
				        	</div>
				        </Tab.Item>
			          	<Tab.Item style={{background: curGradeKey==5?`${active}`:' #292C34'}} title="五年级" key="5">
			          		<div className={styles.item}>
				        		<div className={styles.name}>第一单元：我是小店长</div>
				        		<div className={styles.name}>第二单元：迎新年</div>
				        		<div className={styles.name}>第三单元：小小快递员</div>
				        		<div className={styles.name}>第四单元：小小统计员</div>
				        	</div>
			          	</Tab.Item>
			           	<Tab.Item style={{background: curGradeKey==6?`${active}`:' #292C34'}} title="六年级" key="6">
			           		<div className={styles.item}>
				        		<div className={styles.name}>第一单元：奥运会</div>
				        		<div className={styles.name}>第二单元：图书馆</div>
				        		<div className={styles.name}>第三单元：游乐场</div>
				        		<div className={styles.name}>第四单元：我爱农园</div>
				        	</div>
			           	</Tab.Item>
				    </Tab>
			    </div>					
			</div>
			<div className={styles.five}>
  				<div className={styles.word} style={{marginBottom: '32px',color: '#333333'}}>问题解决系列课程：”观-试-论-问“学生自主学习流程</div>	
  				<div className={styles.img}>
  					{
						five.map((item,index)=><div key={index} className={styles.item} style={item.style}>{item.name}</div>)
					}
  				</div>			
			</div>
    	</div>
	);
}