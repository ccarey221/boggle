import React from 'react';
import { connection } from './../GameBoard/GameBoardModel.jsx';

class CurrentWord extends React.Component {
  constructor(props) {
    super(props);
    this.submitWord = this.submitWord.bind(this);
  }

  scoreUpdate(wordLength) {
    if (wordLength < 3) {return 0;}
    if (wordLength <= 4) {return 1;}
    if (wordLength === 5) {return 2;}
    if (wordLength === 6) {return 3;}
    if (wordLength === 7) {return 5;}
    return 11;
  }

  submitWord() {
    this.props.updateCurrentScore(this.scoreUpdate(this.props.currentWord.length));
    this.props.updateSubmittedWords(this.props.currentWord);
    this.props.resetCurrentWord();
    this.props.resetClickedLetters();
  }

  render() {
    return (
      <div className='currentWord'>
        <b>Current Word:</b> {this.props.currentWord}
        <button onClick={this.submitWord}>Submit Word</button>
      </div>
    );
  }
}

export default connection(CurrentWord);
