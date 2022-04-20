import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as actions from "../../redux/action/loginActions";

const Logout = (props) => {
  useEffect(() => {
    props.logout();
  }, []);

  return (
    <div>
      <Navigate to="/" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
