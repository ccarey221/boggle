import React from 'react';
import { connection } from './../GameBoard/GameBoardModel.jsx';

class ScoreTable extends React.Component {
  constructor(props) {
    super(props);
    this.wordScore = this.wordScore.bind(this);
  }

  wordScore(wordLength) {
    if (wordLength < 3) {return 0;}
    if (wordLength <= 4) {return 1;}
    if (wordLength === 5) {return 2;}
    if (wordLength === 6) {return 3;}
    if (wordLength === 7) {return 5;}
    return 11;
  }

  render() {
    return (<table className="scoreTable">
              <thead>
                <tr>
                  <th><b>Word</b></th>
                  <th><b>Score</b></th>
                </tr>
              </thead>
              <tbody>
                {this.props.submittedWords.map(word => {
                  return (
                    <tr>
                      <td>{word}</td>
                      <td>{this.wordScore(word.length)}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th><b>Total</b></th>
                  <th>{this.props.currentScore}</th>
                </tr>
              </tfoot>
            </table>
            )
  }
}

export default connection(ScoreTable);