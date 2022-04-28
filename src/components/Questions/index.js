import React, { Fragment, useEffect, useState } from "react";
import css from "./style.module.css";
// import Orders from "../../components/Orders";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/action/questionActions";
import Question from "../Question";

const Questions = (props) => {

  useEffect(() => {
    props.loadQuestions(props.surveyId);
  }, []);

  return (
    <div className={css.Questions}>
      {props.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {props.questions.map((el) => (
            <Question key={el[0]} question={el[1]} addAnswer={props.addAnswer}/>
          ))}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questionReducer.questions,
    loading: state.questionReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadQuestions: (surveyId) => dispatch(actions.loadQuestions(surveyId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
