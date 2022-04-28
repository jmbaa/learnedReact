import React, { Fragment, useEffect, useState } from "react";
import css from "./style.module.css";
// import Orders from "../../components/Orders";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import Survey from "../../components/Survey";
import * as actions from "../../redux/action/surveyActions";
import Alert from "../../components/General/Alert";

const SurveyListPage = (props) => {
  useEffect(() => {
    props.loadSurveys();
  }, []);

  return (
    <div className={css.SurveyListPage}>
      {props.seeAlert && (
        <Alert type={props.alertType} message={props.alertMessage} />
      )}
      {props.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {props.surveys.map((el) => (
            <Survey key={el[0]} survey={el[1]} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveys: state.surveyReducer.surveys,
    loading: state.surveyReducer.loading,
    userId: state.authReducer.userId,
    seeAlert: state.surveyReducer.alert.see,
    alertType: state.surveyReducer.alert.type,
    alertMessage: state.surveyReducer.alert.message,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    loadSurveys: () => dispatch(actions.loadSurveys()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyListPage);
