export const saveQuestions = (questions) => {
  return {
    type: 'SAVE_QUESTIONS',
    questions
  };
};
export const saveResponse = (response) => {
  return {
    type: 'SAVE_RESPONSE',
    response
  };
};
