import './general.css';
import 'normalize.css';
import Courses from './pages/courses';
import Home from './pages/Home';
import Events from './pages/events';
import Layout from './components/layout';
import React from 'react';
import Store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export default () => {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="/">
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/cursos" component={Courses} />
            <Route exact path="/eventos" component={Events} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
