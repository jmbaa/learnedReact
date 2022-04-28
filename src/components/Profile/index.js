import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../General/Button";
import { connect } from "react-redux";
import * as actions from '../../redux/action/userActions';

import css from "./style.module.css";
import Spinner from "../General/Spinner";

const Profile = (props) => {

  const [editMode, setEditMode] = useState(true);
  const [user, setUser] = useState({
    regNumber: props.user.regNumber,
    lastName: props.user.lastName,
    firstName: props.user.firstName,
    email: props.user.email,
    phone: props.user.phone,
  });

  const updateHandler = () => {
    if (!editMode) {
      props.updateUser(user);
      setEditMode((prev) => !prev);
    } else {
      setEditMode((prev) => !prev);
    }
  };

  const regNumberHandler = (e) => {
    setUser({ ...user, regNumber: e.target.value });
  };

  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const emailHandler = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const phoneHandler = (e) => {
    setUser({ ...user, phone: e.target.value });
  };

  return (
    <div className={css.Profile}>
      <div className={css.form}>
        <div key={0} className={`${css.inputContainer} ${css.ic1}`}>
          <input
            id="regNo"
            className={css.input}
            type="text"
            placeholder=" "
            onChange={(e) => regNumberHandler(e)}
            readOnly={editMode}
            defaultValue={props.user.regNumber ? props.user.regNumber : ""}
          />
          <label for="regNo" className={css.placeholder}>
            Регистерийн дугаар
          </label>
        </div>
        <div key={1} className={`${css.inputContainer} ${css.ic1}`}>
          <input
            id="lastName"
            className={css.input}
            type="text"
            placeholder=" "
            onChange={(e) => lastNameHandler(e)}
            readOnly={editMode}
            defaultValue={props.user.lastName ? props.user.lastName : ""}
          />
          <label for="lastName" className={css.placeholder}>
            Овог
          </label>
        </div>
        <div key={2} className={`${css.inputContainer} ${css.ic2}`}>
          <input
            id="firstName"
            className={css.input}
            type="text"
            placeholder=" "
            onChange={(e) => firstNameHandler(e)}
            readOnly={editMode}
            defaultValue={props.user.firstName ? props.user.firstName : ""}
          />
          <label for="firstName" className={css.placeholder}>
            Нэр
          </label>
        </div>
        <div key={3} className={`${css.inputContainer} ${css.ic2}`}>
          <input
            id="email"
            className={css.input}
            type="text"
            placeholder=" "
            onChange={(e) => emailHandler(e)}
            readOnly={editMode}
            defaultValue={props.user.email ? props.user.email : ""}
          />
          <label for="email" className={css.placeholder}>
            Цахим хаяг
          </label>
        </div>
        <div  key={4} className={`${css.inputContainer} ${css.ic2}`}>
          <input
            id="phone"
            className={css.input}
            type="text"
            placeholder=" "
            onChange={(e) => phoneHandler(e)}
            readOnly={editMode}
            defaultValue={props.user.phone ? props.user.phone : ""}
          />
          <label for="phone" className={css.placeholder}>
            Утас
          </label>
        </div>
        {props.loading ? (<Spinner/>) : ('')}
        <button
          onClick={updateHandler}
          type="text"
          className={editMode ? css.submit : css.save}
        >
          {editMode ? "Засах" : "Хадгалах"}
        </button>
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    user: state.authReducer.user,
    loading: state.authReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => dispatch(actions.updateUser(user))
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(Profile);
