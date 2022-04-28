import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../General/Button";
import { connect } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";

import css from "./style.module.css";
import Donut from "../General/Donut";

const Question = (props) => {
  const [answer, setAnswer] = useState({
    questionId: props.question._id,
    questionType: props.question.questionTypeId.slug,
    answers: [],
    answer: "",
  });

  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const mySeries = [];
    const myLabels = [];
    props.question.reports.map((el, i) => {
      let myMap = Object.entries(props.question.reports[i]);
      mySeries.push(myMap[0][1]);
      myLabels.push(myMap[0][0]);
    });
    setSeries(mySeries);
    setLabels(myLabels);
  }, []);

  const inputHandler = (e) => {
    if (
      props.question.questionTypeId.slug === "short" ||
      props.question.questionTypeId.slug === "long"
    ) {
      setAnswer({ ...answer, answer: e.target.value });
    } else if (props.question.questionTypeId.slug === "many") {
      let newAnswers = [];
      setAnswer((prevState) => {
        newAnswers = [...prevState.answers];

        if (e.target.checked) {
          newAnswers.push(e.target.value);
        } else {
          newAnswers.forEach(function(value, i) {
            if (value === e.target.value) {
              newAnswers.splice(i, 1);
            }
          });
        }

        return {
          ...prevState,
          answers: [...newAnswers],
        };
      });
    } else if (props.question.questionTypeId.slug === "one") {
      setAnswer({ ...answer, answers: [e.target.value] });
    }

    props.addAnswer(answer);
  };

  return (
    <div className={css.Question}>
      <p key={0} className={css.GeneralInfo}>
        <h3>{props.question.question} </h3>
        <div className={css.Warning}>
          ({props.question.questionTypeId.name})
        </div>
      </p>

      {props.question.questionTypeId.slug === "short" &&
        props.userRole === "user" && (
          <input type="text" onChange={inputHandler}></input>
        )}

      {props.question.questionTypeId.slug === "short" &&
        props.userRole === "work_poster" &&
        props.question.report.map((el, i) => {
          return (
            <Fragment>
              <p key={el}> {el}</p>
            </Fragment>
          );
        })}

      {props.question.questionTypeId.slug === "long" &&
        props.userRole === "user" && (
          <input type="textarea" onChange={inputHandler}></input>
      )}

      {props.question.questionTypeId.slug === "long" &&
        props.userRole === "work_poster" && <div>this is long </div>}

      {props.question.questionTypeId.slug === "one" &&
        props.userRole === "user" && (
          <div className={css.Input}>
            {props.question.pAnswers.map((el, i) => {
              return (
                <Fragment>
                  <input
                    key={i}
                    type="radio"
                    value={el}
                    name={props.question._id}
                    onChange={inputHandler}
                  />
                  <strong>{el}</strong>
                </Fragment>
              );
            })}
          </div>
        )}

      {props.question.questionTypeId.slug === "one" &&
        props.userRole === "work_poster" && (
          <div className={css.Input}>
            <div className={css.Diagram}>
              <Donut labels={labels} series={series} />
            </div>
          </div>
        )}

      {props.question.questionTypeId.slug === "many" &&
        props.userRole === "work_poster" && (
          <div className={css.Input}>
            <div className={css.Diagram}>
              <Donut labels={labels} series={series} />
            </div>
          </div>
        )}

      {props.question.questionTypeId.slug === "many" &&
        props.userRole === "user" && (
          <div className={css.Input}>
            {props.question.pAnswers.map((el, i) => {
              return (
                <Fragment>
                  <input
                    key={i}
                    type="checkbox"
                    value={el}
                    name={props.question._id}
                    onChange={inputHandler}
                  />
                  <strong>{el}</strong>
                </Fragment>
              );
            })}
          </div>
        )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userRole: state.authReducer.user.role,
  };
};

export default connect(mapStateToProps)(Question);
