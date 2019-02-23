import React, { Component } from 'react';
import './App.module.css';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/' component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
