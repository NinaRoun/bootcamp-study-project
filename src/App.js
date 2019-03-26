import React, { Component } from 'react';
import style from './stylesheets/main.styl';

import TvshowTable from './containers/TvshowTable'

class App extends Component {
  render() {
    return (
        <div className={style.container}>
            <header>
                <h2>Most recommended TV shows</h2>
            </header>

            <TvshowTable />
        </div>
    );
  }
}

export default App;
