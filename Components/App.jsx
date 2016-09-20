import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store.jsx';
import BoggleContainer from './GameBoard/BoggleContainer.jsx';
import CurrentWord from './CurrentWord/CurrentWord.jsx';
import ScoreTable from './ScoreTable/ScoreTable.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className='appContainer'>
        <div className="header"></div>
        <BoggleContainer />
        <CurrentWord />
        <ScoreTable />
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));