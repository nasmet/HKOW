import React, {
	useEffect,
} from 'react';
import Layout from '@icedesign/layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import './index.scss';

export default function BasicLayout({
	children,
}) {	
	useEffect(()=>{
		document.getElementById('main').scrollTop=0;
	});

	return (
		<Layout className="ice-design-layout" fixable={true}>
			<Scroll />
	 		<Layout.Section id='main' scrollable>
		 		<Layout.Header>
	        		<Header />
	      		</Layout.Header>
	   	 		<Layout.Main>
	        		<div>{children}</div>
	    		</Layout.Main>
	    		<Layout.Footer>
		        	<Footer />
	       	 	</Layout.Footer>
	  		</Layout.Section>
    	</Layout>
	);
}