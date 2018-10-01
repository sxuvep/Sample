import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Main from './components/carriers/Comprehensive/Main';

export default () => (
	<Layout>
		<Route exact path="/carriers/comp/Main" component={Main} />
	</Layout>
);
