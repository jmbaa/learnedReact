const initialState = {
    surveys: [],
    loading: false,
    err: null,
    survey: {},

    alert: {
      see: false,
      type: '',
      message: ''
    },
  
    newSurveyStatus: {
      saving: false,
      finished: false,
      error: null,
    },
  };
  
  const reducer = (state = initialState, action) => {
    
    switch(action.type) { 
      case 'CLEAR_SURVEY': return {
        ...state,
        newSurveyAnswerStatus: {
          finished: false,
          error: null,
        }
      }
  
      case 'LOAD_SURVEYS_START': return {
        ...state,
        loading: true
      }
  
      case 'LOAD_SURVEYS_SUCCESS': return {
        ...state,
        surveys: action.surveys,
        loading: false,
      }
      case 'LOAD_SURVEYS_ERROR': return {
        ...state,
        err: action.err,
      }
  
      case 'POST_SURVEY_START': return {
        ...state,
        newSurveyStatus: {
          ...state.newSurveyStatus,
          saving: true,
          error: null
        },
      }
  
      case 'POST_SURVEY_SUCCESS': return {
        ...state,
        newSurveyStatus: {
          ...state.newSurveyStatus,
          saving: false,
          finished: true,
          error: null
        },
      }
  
      case 'POST_SURVEY_ERROR': return {
        ...state,
        newSurveyStatus: {
          ...state.newSurveyStatus,
          saving: false,
          finished: true,
          error: action.error
        }
      }
  
      case 'GET_SURVEY_START': return {
        ...state,
        loading: true
      }
  
      case 'GET_SURVEY_SUCCESS': return {
        ...state,
        survey: action.survey,
        loading: false
      }
  
      case 'GET_SURVEY_ERROR': return {
        ...state,
        err: action.err,
        loading: false
      }

      case 'POST_SURVEY_ANSWER_SUCCESS': return {
        ...state,
        ...state.alert,
        alert: {
          see: true, 
          type: 'success', 
          message: 'Амжилттай илгээгдлээ!'
        },
        loading: false
      }
  
      case 'POST_SURVEY_ANSWER_START': return {
        ...state,
        loading: true
      }
  
      case 'POST_SURVEY_ANSWER_ERROR': return {
        ...state,
        err: action.err,
        loading: false
      }
  
      default: return state;
    }
  };
  
  export default reducer;
  