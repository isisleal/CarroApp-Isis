import React, { Component } from 'react';
import './App.css';
import Main from './Pages/Main/Main.js'
import Carro from  './Pages/Carro/Carro.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
  render(){
  return (
    <div className="App">
    <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/carro/:name" component={Carro} />
        </Switch>
      </BrowserRouter>
    <Footer />
    </div>
     

  );
}
}
export default App;
