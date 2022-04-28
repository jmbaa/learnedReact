import React, { useState } from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const DDMenuItem = (props) => {

  const renderOptions = () => {
    if (!props.options) {
      return;
    }

    return props.options.map((option, i) => {
      const arr = Object.entries(option);

      return (
        <div>
          <Link key={i} to={arr[0][0]}>
            <div key={i} className={css.Icon}>
                <i key={i} className="material-icons" style={{verticalAlign: "text-bottom"}}>{arr[1][1]}</i>{" "}
                {arr[0][1]}
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className={css.DDMenuItem}>
      <div key={0} className={css.DropDown}>
        <Link to="/">{props.title}</Link>
      </div>

      <div key={1} className={css.DropdownContent}>{renderOptions()}</div>
    </div>
  );
};

export default DDMenuItem;
