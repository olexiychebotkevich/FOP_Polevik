import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/home';
import Videosurveillance from './components/videosurveillance'
import skm from './components/skm'
import mom from './components/mom'
import designing from './components/designing'
import ScrollToTopRoute from './components/ScrollToTopRoute'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap/dist/react-bootstrap.js';


function App() {
  return (
    <Layout>

      <HashRouter>

        <Route exact path='/' component={Home} />
        <ScrollToTopRoute exact path="/videosurveillance" component={Videosurveillance} />
        <ScrollToTopRoute exact path="/skm" component={skm} />
        <ScrollToTopRoute exact path="/mom" component={mom} />
        <ScrollToTopRoute exact path="/designing" component={designing} />
      </HashRouter>

    </Layout>
  );
}

export default App;
