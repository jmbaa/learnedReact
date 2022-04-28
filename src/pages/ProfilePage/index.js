import React from "react";
import { Link } from "react-router-dom";
// import Button from "../General/Button";
import Profile from "../../components/Profile";
import ProfileGeneral from "../../components/ProfileGeneral";

import css from "./style.module.css";

const ProfilePage = (props) => {
  return (
    <div className={css.ProfilePage}>
      <div className={css.Group1}>
        <ProfileGeneral/>
      </div>
      <div className={css.Group2}>
        <Profile/>
      </div>
    </div>
  );
};

export default ProfilePage;
