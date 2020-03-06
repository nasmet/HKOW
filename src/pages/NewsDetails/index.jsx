import React, {
	Component,
	useEffect,
	useState,
} from 'react';
import {
	Loading,
} from '@alifd/next';
import styles from './index.module.scss';

export default function NewsDetails({
	location,
}) {
	const id = location.state && location.state.id ? location.state.id : 0;
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({
		title: '',
		content: '',
		createTime: '',
	});

	useEffect(() => {
		setLoading(true);
		api.getNewsDetails({
			id,
		}).then(res => {
			setData(res);
		}).catch(e => {
			model.log(e);
		}).finally(() => {
			setLoading(false);
		});

		return api.cancelRequest;
	}, []);

	return (
		<div className={styles.wrap}>
			<Loading visible={loading} inline={false}>
				<div className={styles.content}>
					<div className={styles.name}>{data.title}</div>
					<div className={styles.time}>{data.createTime}</div>
					<div className={styles.line}></div>
					<div dangerouslySetInnerHTML={{__html: `${data.content}`}} />
				</div>
			</Loading>
    	</div>
	);
}