export const questions = (store = [], action) => {
  switch (action.type) {
  case 'SAVE_QUESTIONS':
    return [...store, ...action.questions];
  default:
    return store;
  }
};
