import React, {
	Component,
	useState,
	useEffect,
} from 'react';
import {
	Tab,
} from '@alifd/next';
import tabConfig from './config';
import styles from './index.module.scss';

export default function Case({
	location,
}) {
	const defaultKey = location.state && location.state.key ? location.state.key : 'researchCase';
	const [key, setKey] = useState(defaultKey);

	useEffect(() => {
		setKey(defaultKey);
	}, [defaultKey]);

	const onChange = key => {
		setKey(key);
	};

	const CustomTabItem = ({ tab }) => {
	    return (
	    	<div className={styles.content}>
				{tab}
		    </div>);
	}

	return (
		<div className={styles.wrap}>
      		<Tab shape='pure' tabRender={(key, props)=><CustomTabItem key={key} {...props} />} navClassName={styles.tab} activeKey={key} onChange={onChange} >
				{
					tabConfig.map(item => {
						const {
							Component,
							key,
							tab,
						} = item;
						return (
							<Tab.Item key={key} {...item} >
								<Component />            		
							</Tab.Item>
						);
					})
				}	    		
			</Tab>
    	</div>
	);
}