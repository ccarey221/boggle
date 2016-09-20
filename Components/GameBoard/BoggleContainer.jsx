import React from 'react';
import diceData from './../../Data/diceData.json';
import BoggleDice from './BoggleDice.jsx';
import { connection } from './GameBoardModel.jsx';

class BoggleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.data = diceData;
    this.renderDie = this.renderDie.bind(this);
    this.randomIndex = this.randomIndex.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.range = this.range.bind(this);
    var dieRange = this.range(0, 25);
    this.shuffledDieRange = this.shuffle(dieRange);
    this.shuffleDieFace = this.randomIndex();
  }

  renderDie() {
    return this.shuffledDieRange.map((dice, index) => {
      return (
        <span>
          <BoggleDice key={index} publicKey={index} letter={this.data[dice][this.shuffleDieFace[index]]}/>
        </span>
        )
      }
    )
  }

  shuffle(array, mode) {
    var index1, temp;
    for (var i = array.length - 1; 0 < i; i--) {
        index1 = (mode === 'face' ? this.randomIndex() : Math.floor(Math.random(0, i) * i));
        temp = array[i - 1];
        array[i - 1] = array[index1];
        array[index1] = temp;
    }
    return array;
  }

  range(start, end) {
    var rangeArray = [];
    for (var i = 0; i < end; i++) {
      rangeArray.push(i);
    }
    return rangeArray;
  }

  randomIndex() {
    var randomArray = [];
    for (var i = 0; i <= 25; i++) {
      randomArray.push(Math.floor(Math.random(0,6)*6));
    }
    return randomArray;
  }

  render() {
    return (
      <div className='boggleContainer'>
        {this.renderDie()}
      </div>
    )
  }
}

export default connection(BoggleContainer);