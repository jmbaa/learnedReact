import axios from "axios";

export const loadSurveys = () => {
  return function(dispatch, getState) {
    dispatch(loadSurveysStart());

    const userId = getState().authReducer.user._id;
    const token = getState().authReducer.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
    axios
      .get(`http://localhost:8000/api/v1/surveys`, {userId}, config)
      .then((res) => {
        const arr = Object.entries(res.data.items);
        dispatch(loadSurveysSuccess(arr));
      })
      .catch((err) => {
        dispatch(loadSurveysError(err));
      });
  };
};

export const loadSurveysStart = () => {
  return {
    type: "LOAD_SURVEYS_START",
  };
};

export const loadSurveysSuccess = (loadedSurveys) => {
  return {
    type: "LOAD_SURVEYS_SUCCESS",
    surveys: loadedSurveys,
  };
};

export const loadSurveysError = (err) => {
  return {
    type: "LOAD_SURVEYS_ERROR",
    err,
  };
};

export const postSurvey = (survey) => {
  return function(dispatch, getState) {
    dispatch(postSurveyStart());

    const token = getState().authReducer.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post("http://localhost:8000/api/v1/surveys", survey, config)
      .then((res) => {
        dispatch(postSurveySuccess());
      })
      .catch((err) => {
        dispatch(postSurveyError(err));
      });
  };
};

export const postSurveyStart = () => {
  return {
    type: "POST_SURVEY_START",
  };
};

export const postSurveySuccess = () => {
  return {
    type: "POST_SURVEY_SUCCESS",
  };
};

export const postSurveyError = (err) => {
  return {
    type: "POST_SURVEY_ERROR",
    error: err,
  };
};

export const clearSurvey = () => {
  return {
    type: "CLEAR_SURVEY",
  };
};

export const postSurveyAnswer = (surveyResponse) => {
  return function(dispatch, getState) {
    dispatch(postSurveyAnswerStart());

    const token = getState().authReducer.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .post(
        `http://localhost:8000/api/v1/surveys/${surveyResponse.surveyId}/answers`,
        surveyResponse,
        config
      )
      .then((res) => {
        dispatch(postSurveyAnswerSuccess());
      })
      .catch((err) => {
        dispatch(postSurveyAnswerError(err));
      });
  };
};

export const postSurveyAnswerStart = () => {
  return {
    type: "POST_SURVEY_ANSWER_START",
  };
};

export const postSurveyAnswerSuccess = () => {
  return {
    type: "POST_SURVEY_ANSWER_SUCCESS",
  };
};

export const postSurveyAnswerError = (err) => {
  return {
    type: "POST_SURVEY_ANSWER_ERROR",
    error: err,
  };
};

export const getSurvey = (surveyId) => {
  return function(dispatch) {
    dispatch(getSurveyStart());

    axios
      .get(`http://localhost:8000/api/v1/surveys/${surveyId}`)
      .then((res) => {
        const survey = res.data.data;

        dispatch(getSurveySuccess(survey));
      })
      .catch((err) => {
        dispatch(getSurveyError(err));
      });
  };
};

export const getSurveyStart = () => {
  return {
    type: "GET_SURVEY_START",
  };
};

export const getSurveySuccess = (survey) => {
  return {
    type: "GET_SURVEY_SUCCESS",
    survey,
  };
};

export const getSurveyError = (err) => {
  return {
    type: "GET_SURVEY_ERROR",
    error: err,
  };
};
