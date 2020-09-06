import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AuthController from './controllers/AuthController'
import Home from './components/Home';
// import SearchForm from './components/SearchForm';
import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/' component = {AuthController} />
            <Route exact path='/home' component={Home} />
          </Switch>
      </div>

     </BrowserRouter>
    )
  }
}

export default App;

//<Route exact path='/search' component={SearchForm} />