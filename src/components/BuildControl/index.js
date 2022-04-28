import React, {useContext} from "react";
import css from "./style.module.css";
import {connect} from 'react-redux';
import * as actions from '../../redux/action/burgerActions';
import BurgerContext from "../../contexts/BurgerContext";

const BurgerControl = (props) => {

    const burgerCtx = useContext(BurgerContext).toString();

    return (
        <div className={css.BurgerControl}>

            <div className={css.Label}>{props.ingredient}</div>

            <button onClick={() => props.decIng(props.type)}
                disabled={props.disabled[props.type]}
                className={css.Less}
            >
                Хасах
            </button>

            <button
                onClick={() => props.incIng(props.type)}
                className={css.More}
            >
                Нэмэх {burgerCtx}
            </button>
            
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      incIng: (ingName) => dispatch(actions.addIng(ingName)),
      decIng: (ingName) => dispatch(actions.removeIng(ingName)),
    };
  };

export default connect(null, mapDispatchToProps)(BurgerControl);
