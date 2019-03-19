import React, { Component } from 'react';
import './App.css';
import FormTvshowTable from './containers/FormTvshowTable'

class App extends Component {
  render() {
    return (
        <div className="container">
            <header>
                <h2>Most recommended TV shows</h2>
            </header>

            <FormTvshowTable />
        </div>
    );
  }
}

export default App;
