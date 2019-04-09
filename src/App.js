import React, { Component } from 'react';
import TvshowTable from './containers/TvshowTable'
import style from './stylesheets/main.styl';

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
