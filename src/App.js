import React, { Component } from 'react';
import './App.css';

import TvshowTable from './containers/TvshowTable'

class App extends Component {
  render() {
    return (
        <div className="container">
            <header>
                <h2>Most recommended TV shows</h2>
            </header>

            <TvshowTable />
        </div>
    );
  }
}

export default App;
