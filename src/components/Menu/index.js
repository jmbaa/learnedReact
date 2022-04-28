import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import DDMenuItem from "../DDMenuItem";
import { connect } from "react-redux";
import { Fragment } from "react";
// import { Navigate } from "react-router-dom";

const Menu = (props) => {
  const options = [{'profile':'ПРОФАЙЛ', 'logo': 'account_circle'}, {'logout': 'ГАРАХ', 'logo': 'logout'}];
  if (props.userRole === "user") {

    return (
      <ul className={css.Menu}>
        <Fragment>
          <MenuItem link="/works">АЖЛУУД</MenuItem>
          <MenuItem link="/problems">АСУУДЛУУД</MenuItem>
          <MenuItem link="/surveys">СУДАЛГААНУУД</MenuItem>
          <DDMenuItem link="/logout" options={options} title={props.fName}></DDMenuItem>
        </Fragment>
      </ul>
    );
  } else if (props.userRole === "work_poster") {
    return (
      <ul className={css.Menu}>
        <Fragment>
          <MenuItem link="/post-work">+ АЖИЛ</MenuItem>
          <MenuItem link="/post_problem">+ АСУУДАЛ</MenuItem>
          <MenuItem link="/post_survey">+ СУДАЛГАА</MenuItem>
          <MenuItem link="/works">АЖЛУУД</MenuItem>
          <MenuItem link="/problems">АСУУДЛУУД</MenuItem>
          <MenuItem link="/surveys">СУДАЛГААНУУД</MenuItem>
          <DDMenuItem link="/logout" options={options} title={props.fName}></DDMenuItem>
        </Fragment>
      </ul>
    );
  } else if (props.userRole === "operator") {
    return <div>This is operator</div>;
  } else if (props.userRole === "admin") {
    return <div>this is admin</div>;
  } else {
    return (
      <ul className={css.Menu}>
        <Fragment>
          <MenuItem link="/login">НЭВТРЭХ</MenuItem>
          <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
        </Fragment>
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    userRole: state.authReducer.user.role,
    fName: state.authReducer.user.firstName,
  };
};

export default connect(mapStateToProps)(Menu);
