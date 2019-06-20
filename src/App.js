import React, { Component } from 'react';
import './App.css';
import Main from './Pages/Main/Main.js'
import Carro from  './Pages/Carro/Carro.js'
import Layout from './Components/Layout.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render(){
  return (
    <div className="App">
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/carro/:name" component={Carro} />
        </Switch>
      </BrowserRouter>
    </Layout>
    </div>
     

  );
}
}
export default App;
