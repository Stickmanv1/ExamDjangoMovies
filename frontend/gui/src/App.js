import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import CustomLayout from './containers/Layout';
// import AddMovieLists from './components/FormAddMoviesView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
          </CustomLayout>
          <br></br>
          <BaseRouter />
        </Router>

      </div >
    );
  }
}

export default App;

        // <header className="App-header">
        //   <h1 className="App-Title"> Welcome to React</h1>
        // </header>
        // <p className="App-intro">
        //   to get Started , edit <code>src/App.js</code> and save to reload.
        // </p>