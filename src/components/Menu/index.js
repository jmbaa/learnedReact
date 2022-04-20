import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";
import { Fragment } from "react";
// import { Navigate } from "react-router-dom";

const Menu = (props) => (
  <ul className={css.Menu}>
    {props.userId ? (
      <Fragment>
        <MenuItem link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
        <MenuItem link="/orders">ЗАХИУЛГУУД</MenuItem>
        <MenuItem link="/logout">ГАРАХ</MenuItem>
      </Fragment>
    ) : (
      <Fragment>
        <MenuItem link="/login">НЭВТРЭХ</MenuItem>
        <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
      </Fragment>
    )}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
