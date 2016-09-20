// global actions shared across application
let actions = {};

/****************************************************************
                           GAMEPLAY
*****************************************************************/

// Updates score in global state
actions.updateCurrentScore = (previousState, data) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  const newScore = gameplay.currentScore+data;
  gameplay.currentScore = newScore;
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

// 
actions.updateSubmittedWords = (previousState, data) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  const submittedWords = previousState.gameplay.submittedWords;
  submittedWords.push(data.toLowerCase());
  gameplay.submittedWords = submittedWords;
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

actions.updateClickedLetters = (previousState, data) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  let clickedLetters = previousState.gameplay.clickedLetters;
  if (!data.clicked) {
    clickedLetters.push(data.letterIndex);
  } else {
    clickedLetters.pop();
  }
  gameplay.clickedLetters = clickedLetters;
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

actions.resetClickedLetters = (previousState) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  gameplay.clickedLetters = [];
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

// Updates current word in global state
actions.updateCurrentWord = (previousState, data) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  const currentWord = previousState.gameplay.currentWord;
  // checks to see if player is adding a letter or removing one
  const newWord = data.clicked ? currentWord.slice(0, currentWord.length-1) :
                  currentWord+data.letter;
  gameplay.currentWord = newWord;
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

actions.resetCurrentWord = (previousState) => {
  const gameplay = Object.assign({}, previousState.gameplay);
  const currentWord = previousState.gameplay.currentWord;
  const newWord = '';
  gameplay.currentWord = newWord;
  const newState = Object.assign({}, previousState, { gameplay });
  return newState;
};

export { actions };
