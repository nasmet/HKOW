import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import content from './config';

export default function Cooperation() {
	return (
		<div className={styles.wrap}>
			<div className={styles.content}>
				{
					content.map((item, index)=>{
						return(
							<div key={index} className={styles.item}>
								<div className={styles.icon} style={{background: `url(${item.icon})`}}></div>
								<div className={styles.title}>{item.title}</div>
							</div>
						);
					})
				}
			</div>
    	</div>
	);
}