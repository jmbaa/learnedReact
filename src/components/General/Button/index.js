import React from "react";
import css from "./style.module.css"

const Button = props => {
    return (
        <button onClick={props.clickedBtn} className={`${css.Button} ${css[props.btnType]}`}> {props.text}</button>
    );
}

export default Button;