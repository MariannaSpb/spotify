import React from 'react';
import AuthController from './controllers/AuthController'
import './App.css';

class App extends React.Component {
 
  render() {
    return (
      <div className='container'>
          <AuthController/>
      </div>
    )
  }
}

export default App;