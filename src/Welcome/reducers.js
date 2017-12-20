export const questions = (store = [], action) => {
  switch (action.type) {
  case 'SAVE_QUESTIONS':
    return [...store, ...action.questions];
  default:
    return store;
  }
};
export const thing = (store = [], action) => {
  switch (action.type) {
  case 'THING':
    return [...store, ...action.questions];
  default:
    return store;
  }
};
