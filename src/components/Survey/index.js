import React from "react";
import { Link } from "react-router-dom";
import Button from "../General/Button";
import { connect } from "react-redux";

import css from "./style.module.css";

const Survey = (props) => {
  return (
    <div className={css.Survey}>
      <p key={0} className={css.GeneralInfo}>
        <strong>{props.survey.name}</strong> (
        {props.survey.createdOrganizationId})
      </p>
      <p key={1} className={css.Description}>
        {"     "}
        {props.survey.description}
      </p>
      <p key={2} className={css.Group}>
        <p key={0} className={css.Group1}>
          <p key={0}>Нийт оролцох: {props.survey.beCount}</p>
          <p key={1}>
            Эцсийн хугацаа: <strong>{props.survey.deadline}</strong>{" "}
          </p>
        </p>
        <p key={1} className={css.Group2}>
          <p key={0}>
            <strong>{props.survey.pricePerUser}₮ / 1ХҮН</strong>
          </p>
          {props.seeMode ? (
            props.userRole === "work_poster" ? (
              <Link to={`/surveys`}>Хаах</Link>
            ) : (
              <Link onClick={props.postAnswers} to={`/surveys`}>
                Илгээх
              </Link>
            )
          ) : (
            <p key={1}>
              {props.userRole === "user" ? (
                <Link to={`/surveys/${props.survey._id}`}>Судалгаа өгөх</Link>
              ) : (
                <Link to={`/surveys/${props.survey._id}/report`}>Тайлан харах</Link>
              )}
            </p>
          )}
        </p>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userRole: state.authReducer.user.role,
  };
};

export default connect(mapStateToProps)(Survey);
