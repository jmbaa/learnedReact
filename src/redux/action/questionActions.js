import axios from "axios";

export const loadQuestions = (surveyId) => {
  return function(dispatch) {
    dispatch(loadQuestionsStart());

    axios
      .get(`http://localhost:8000/api/v1/surveys/${surveyId}/questions`)
      .then((res) => {
        const arr = Object.entries(res.data.data);
        dispatch(loadQuestionsSuccess(arr));
      })
      .catch((err) => {
        dispatch(loadQuestionsError(err));
      });
  };
};

export const loadQuestionsStart = () => {
  return {
    type: "LOAD_QUESTIONS_START",
  };
};

export const loadQuestionsSuccess = (loadedQuestions) => {
  return {
    type: "LOAD_QUESTIONS_SUCCESS",
    questions: loadedQuestions,
  };
};

export const loadQuestionsError = (err) => {
  return {
    type: "LOAD_QUESTIONS_ERROR",
    err,
  };
};
