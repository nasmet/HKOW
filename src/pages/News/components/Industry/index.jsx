import React, {
	Component,
	useState,
	useEffect,
} from 'react';
import {
	Loading,
	Button,
} from '@alifd/next';
import Img from '@icedesign/img';
import styles from './index.module.scss';

export default function Industry({
	type,
}) {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [curPage, setCurPage] = useState(1);

	useEffect(() => {
		setLoading(true);
		api.getNewsList({
			type,
			pageSize: config.LIMIT,
			pageNum: curPage,
		}).then(res => {
			setData([...data, ...res]);
		}).catch(e => {
			model.log(e);
		}).finally(() => {
			setLoading(false);
		});
		return api.cancelRequest;
	}, [curPage]);

	const pageChange = () => {
		setCurPage(pre => pre + 1);
	};
	
	const getIcon = (content)=>{
		const srcReg= /<img.+src=\"?(.+\.(jpg|jpeg|gif|bmp|bnp|png))\"?.+>/i;
		let src = content.match(srcReg);
		if(!src){
			return '';
		}
		return src[1];
	}

	return (
		<div className={styles.wrap}>
			<Loading visible={loading} inline={false}>
				<div className={styles.content}>
					{
						data.map((item, index)=>{
							return(
								<div key={item.id} className={styles.item} onClick={()=>{
									model.history.push({pathname:'/newsdetails',state:{id: item.id}});
								}}>
									<div className={styles.left}>
										<img draggable={false} src={getIcon(item.content)} />
									</div>
									<div className={styles.right}>
										<div className={styles.title}>{item.title}</div>
										<div className={styles.time}>{item.createTime}</div>
									</div>
								</div>
							);
						})
					}
					<div className={styles.btn}> 
						<Button type="primary" onClick={pageChange}>更多</Button>
					</div>
				</div>
			</Loading>
    	</div>
	);
}