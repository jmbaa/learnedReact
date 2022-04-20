import React from "react";
import BurgerControl from "../BuildControl";
import css from "./style.module.css";
import {connect} from 'react-redux';

const BurgerControls = (props) => {

  const disabledIng = { ...props.ing };

  for (let key in disabledIng) {
    disabledIng[key] = disabledIng[key] <= 0;
  }

  return (
    <div className={css.BurgerControls}>
      <p>
        Бургерийн үнэ: <strong>{props.price}</strong>
      </p>
      {Object.keys(props.ingNames).map((el) => (
        <BurgerControl
          key={el}
          disabled={disabledIng}
          type={el}
          ingredient={props.ingNames[el]}
        />
      ))}

      <button
        disabled={!(props.price > 0)}
        onClick={props.showConfirmModal}
        className={css.OrderButton}
      >
        ЗАХИАЛАХ
      </button>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    ing: state.burgerReducer.ing,
    price: state.burgerReducer.price,
    ingNames: state.burgerReducer.ingNames
  };
};

export default connect(mapStateToProps)(BurgerControls);
