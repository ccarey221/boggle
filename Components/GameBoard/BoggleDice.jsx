import React from 'react';
import { connection } from './GameBoardModel.jsx';

class BoggleDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.onClick = this.onClick.bind(this);
    this.adjacencyCheck = this.adjacencyCheck.bind(this);
  }

  componentDidMount() {
    this.setState({
      clicked: this.props.clickedLetters.includes(this.props.publicKey),
    })
  }

  lowerMatrixCheck(currentDice, lastDice) {
    var lowerNum = currentDice - lastDice;
    if (lowerNum === 6 || lowerNum === 5 || lowerNum === 4) {
      return true;
    }
    return false;
  }

  upperMatrixCheck(currentDice, lastDice) {
    var upperNum = lastDice - currentDice;
    if (upperNum === 6 || upperNum === 5 || upperNum === 4) {
      return true;
    }
    return false;
  }

  sideMatrixCheck(currentDice, lastDice) {
    var sideNum = lastDice - currentDice;
    if (sideNum === 1 || sideNum === -1) {
      return true;
    }
    return false;
  }

  adjacencyCheck(index) {
    var lastIndex = this.props.clickedLetters.length - 1;
    if (this.lowerMatrixCheck(index, this.props.clickedLetters[lastIndex]) || 
        this.upperMatrixCheck(index, this.props.clickedLetters[lastIndex]) || 
        this.sideMatrixCheck(index, this.props.clickedLetters[lastIndex])) {
      return true;
    }
    return false;
  }

  onClick() {
    var numOfClickedLetters = this.props.clickedLetters.length;
    // allows users to deselect the most recently clicked letter
    if (this.props.clickedLetters[numOfClickedLetters - 1] === this.props.publicKey) {
      this.props.updateCurrentWord({ clicked: this.state.clicked });
      this.props.updateClickedLetters({ clicked: this.state.clicked });
      this.setState({
        clicked: this.props.clickedLetters.includes(this.props.publicKey),
      })
      return;
    }
    
    // allows user to click new letters adjacent to the most recently clicked letter
    if (numOfClickedLetters === 0 || this.adjacencyCheck(this.props.publicKey)) {
      if (!this.props.clickedLetters.includes(this.props.publicKey)){
        this.props.updateCurrentWord({clicked: this.props.clickedLetters.includes(this.props.publicKey), 
                                      letter: this.props.letter === 'q' ? 'Qu' : this.props.letter.toUpperCase()});
        this.props.updateClickedLetters({
          letterIndex: this.props.publicKey,
          clicked: this.props.clickedLetters.includes(this.props.publicKey)
        });
        this.setState({
          clicked: this.props.clickedLetters.includes(this.props.publicKey),
        })
      }
    }
  }

  render() {
    return <div className={this.props.clickedLetters.includes(this.props.publicKey) ? "clickedBoggleDie" : "boggleDie"} onClick={this.onClick}><b>{this.props.letter === 'q' ? "Qu" : this.props.letter.toUpperCase()}</b></div>
  }
}

export default connection(BoggleDice);