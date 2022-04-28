import React, { Component, Fragment, useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
  Link
} from "react-router-dom";
import css from "./style.module.css";
import * as actions from "../../redux/action/surveyActions";
import { connect } from "react-redux";
import Survey from "../Survey";
import Questions from "../Questions";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import Alert from "../General/Alert";


const PostSurvey = (props) => {
  const location = useLocation();
  const routeArray = location.pathname.split("/");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    props.getSurvey(routeArray[2]);
  }, []);

  const postAnswers = () => {
    const surveyResponse = {
      surveyId: props.survey._id,
      userId: props.userId,
      answers,
    };

    props.postSurveyAnswer(surveyResponse);
  };

  const addAnswer = (answer) => {
    setAnswers((prevAnswers) => {
      prevAnswers.forEach(function(value, i) {
        if (value.questionId === answer.questionId) {
          prevAnswers.splice(i, 1);
        }
      });

      prevAnswers.push(answer);
      return [...prevAnswers];
    });
  };

  return (
    <Fragment>
      {props.loading && <Spinner />}

      <div className={css.PostSurvey}>
        <Survey survey={props.survey} seeMode={true} postAnswers={postAnswers}/>
        <Questions surveyId={routeArray[2]} addAnswer={addAnswer} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    survey: state.surveyReducer.survey,
    userId: state.authReducer.user._id,
    loading: state.surveyReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSurvey: (surveyId) => dispatch(actions.getSurvey(surveyId)),
    postSurveyAnswer: (surveyResponse) =>
      dispatch(actions.postSurveyAnswer(surveyResponse)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSurvey);
