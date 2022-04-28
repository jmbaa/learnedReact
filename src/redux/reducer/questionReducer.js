const initialState = {
  questions: [],
  loading: false,
  err: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_QUESTIONS_START":
      return {
        ...state,
        loading: true,
      };

    case "LOAD_QUESTIONS_SUCCESS":
      return {
        ...state,
        questions: action.questions,
        loading: false,
      };
    case "LOAD_QUESTIONS_ERROR":
      return {
        ...state,
        err: action.err,
      };

    default:
      return state;
  }
};

export default reducer;
