import React, { useState } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/action/loginActions";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";
import Alert from "../../components/General/Alert";

const LoginPage = (props) => {
  const [err, setErr] = useState(null);

  const [form, setForm] = useState({ email: "", password: "" });

  const getPass = (e) => {
    setForm((prevForm) => ({
      password: e.target.value,
      email: prevForm.email,
    }));
  };

  const getMail = (e) => {
    setForm((prevForm) => ({
      email: e.target.value,
      password: prevForm.password,
    }));
  };

  const doLogin = () => {
    if (!form.email || !form.password) {
      setErr("Цахим хаяг болон нууц үгийг оруулна уу!");
    } else {
      props.loginUser(form.email, form.password);
    }
  };

  return (
    <div className={css.LoginPage}>
      {props.userId && <Navigate to="/orders" />}

      <input
        onChange={getMail}
        type="text"
        placeholder="Цахим хаяг оруулах"
      ></input>

      <input
        onChange={getPass}
        type="password"
        placeholder="Нууц үг оруулах"
      ></input>

      {props.loading && <Spinner />}

      {err && <div style={{ color: "red" }}>{err}</div>}

      {props.error && (
        <div style={{ color: "red" }}>Алдаа гарлаа : {props.error}</div>
      )}

      <Button clickedBtn={doLogin} btnType="Success" text="НЭВТРЭХ"></Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.errDataBase,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
