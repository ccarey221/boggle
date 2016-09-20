import  { connect } from 'react-redux';

const mapStateToProps = state => {
  return (
  {
    currentScore: state.gameplay.currentScore,
    currentWord: state.gameplay.currentWord,
    submittedWords: state.gameplay.submittedWords,
    clickedLetters: state.gameplay.clickedLetters,
  });
};

const mapDispatchToProps = dispatch => (
  {
    updateCurrentScore: points => {
      dispatch({ type: 'updateCurrentScore', data: points });
    },
    updateCurrentWord: data => {
      dispatch({ type: 'updateCurrentWord', data });
    },
    resetCurrentWord: () => {
      dispatch({ type: 'resetCurrentWord' });
    },
    updateSubmittedWords: word => {
      dispatch({ type: 'updateSubmittedWords', data: word });
    },
    updateClickedLetters: letter => {
      dispatch({ type: 'updateClickedLetters', data: letter });
    },
    resetClickedLetters: () => {
      dispatch({ type: 'resetClickedLetters' });
    },
  }
);

const connection = connect(mapStateToProps, mapDispatchToProps);
export { connection };