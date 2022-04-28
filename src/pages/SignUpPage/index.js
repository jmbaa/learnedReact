import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/action/signUpActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

const SignUpPage = (props) => {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const getMail = (e) => {
    setEmail(e.target.value);
  };

  const getPass1 = (e) => {
    setPass1(e.target.value);
  };

  const getPass2 = (e) => {
    setPass2(e.target.value);
  };

  const doSignUp = () => {
    if (pass1 === pass2) {
      props.signUpUser(email, pass1);
    } else {
      setError("Нууц үг хоорондоо тохирохигүй байна.");
    }
  };

  return (
    <div className={css.SignUpPage}>
      {props.userId && <Navigate to="/" />}

      <input
        onChange={getMail}
        type="text"
        placeholder="Цахим хаяг оруулах"
      ></input>

      <input
        onChange={getPass1}
        type="password"
        placeholder="Нууц үг оруулах"
      ></input>
      
      <input
        onChange={getPass2}
        type="password"
        placeholder="Нууц үгээ дахин оруулах"
      ></input>

      {error && <div style={{ color: "red" }}>Алдаа гарлаа : {error}</div>}

      {props.loading && <Spinner />}

      {props.errFireBase && (
        <div style={{ color: "red" }}>Алдаа гарлаа : {props.errFireBase}</div>
      )}

      <Button
        clickedBtn={doSignUp}
        btnType="Success"
        text="БҮРТГҮҮЛЭХ"
      ></Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    errFireBase: state.authReducer.errFireBase,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, pass) => dispatch(actions.signUpUser(email, pass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
