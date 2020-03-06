import React, {
	Component,
} from 'react';
import styles from './index.module.scss';
import content from './config';

export default function Expert() {
	return (
		<div className={styles.wrap}>
			<div className={styles.img}></div>
			<div className={styles.content}>
				{
					content.map((item,index)=>{
						return(
							<div key={index} className={styles.item} style={{background: `url(${item.icon})`}}>
							</div>
						);
					})
				}
			</div>
    	</div>
	);
}