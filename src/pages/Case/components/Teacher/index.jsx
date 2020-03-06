import React, {
	Component,
} from 'react';
import { Step } from '@alifd/next';
import styles from './index.module.scss';
import {
	header,
} from './config';

export default function Teacher() {
	return (
		<div className={styles.wrap}>
      		<div className={styles.header}>
      			{
      				header.map((item, index)=>{
      					return(
							<div key={index} className={styles.item}>
								<div className={styles.left}>
									<div className={styles.border}></div>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.content}>
										{
											item.content.map((item, index)=>{
												return(
													<div key={index} className={styles.element}>
														<div className={styles.name}>{item.name}</div>
														<div className={styles.value}>{item.value}</div>
													</div>
												);
											})
										}
									</div>
								</div>
								<div className={styles.right} style={{backgroundImage: `url(${item.img})`}}>
								</div>
							</div>
      					);
      				})
      			}
      		</div>
    	</div>
	);
}