import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";

const MenuItem = props => (
  <li className={css.MenuItem}>
    <Link to={props.link}>
      {props.children}
    </Link>
  </li>
);

export default MenuItem;
