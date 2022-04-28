import React from "react";
import { Link } from "react-router-dom";
import Button from "../General/Button";
import {connect} from "react-redux";
import profileAvatar from "../../assets/images/profileAvatar.png";

import css from "./style.module.css";

const ProfileGeneral = (props) => {

  return (
    <div className={css.ProfileGeneral}>
      <p>
        <img src={profileAvatar} alt="logo"></img>
      </p>
      <p>{props.userName}</p>
      <p><strong>{props.balance}₮</strong></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.authReducer.user.lastName + " " + state.authReducer.user.firstName,
    balance: state.authReducer.user.balance,
  }
}

export default connect(mapStateToProps)(ProfileGeneral);
