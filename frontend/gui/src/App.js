import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import CustomLayout from './containers/Layout';
import AddMovieList from './containers/FormAddMoviesView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
        </CustomLayout>
        <br></br>
        <AddMovieList />

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