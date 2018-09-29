import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import ReactSvg from './components/reactsvg';
import comprehensive from './components/carriers/comprehensive';
import SamplePreparation from './components/samplePreparation';
import RenderSvg from './components/carriers/rendersvg';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/reactsvg' component={ReactSvg}/>
    <Route exact path='/carriers/comprehensive' component={comprehensive}/>
    <Route exact path='/samplePreparation' component={SamplePreparation}/>
    <Route exact path='/carriers/rendersvg' component={RenderSvg}/>
  </Layout>
);
