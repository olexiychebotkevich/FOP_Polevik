import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/home';
import Videosurveillance from './components/videosurveillance'
import skm from './components/skm'
import mom from './components/mom'
import designing from './components/designing'


function App() {
  return (
    <Layout>

      <HashRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/videosurveillance' component={Videosurveillance} />
        <Route exact path='/skm' component={skm} />
        <Route exact path='/mom' component={mom} />
        <Route exact path='/designing' component={designing} />
        
      </HashRouter>

    </Layout>
  );
}

export default App;
