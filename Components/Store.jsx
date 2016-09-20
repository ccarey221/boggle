import { createStore } from 'redux';
import { actions as globalActions } from './Actions.js';

// actions object where keys are action names and value is action
const defaultState = {
  gameplay: {
    submittedWords: [],
    clickedLetters: [],
    currentWord: '',
    currentScore: 0,
  },
};

let actions = Object.assign({}, globalActions);

const reducer = (previousState = defaultState, action) => {
  if (actions[action.type]) {
    return actions[action.type](previousState, action.data);
  }
  console.warn(`action ${action.type} does not exist`);
  return previousState;
};

const addToActions = (newActions) => {
  actions = Object.assign({}, actions, newActions);
};

const store = createStore(reducer);


export { store };