import React from 'react';
import styles from './index.module.scss';

export default function Scroll() {	
	return (
		<div>
			<div className={styles.icon} style={{ bottom: '140px',
			right: '0',background: `url(${model.img.arrowTop})`,}}
			onClick={()=>{document.getElementById('main').scrollTop=0}}
			></div>
			<div className={styles.icon} style={{bottom: '40px',
			right: '-6px',background: `url(${model.img.arrowTop})`,transform: 'rotate(180deg)'}}
			onClick={()=>{document.getElementById('main').scrollTop= 9999}}
			></div>
		</div>
	);
}