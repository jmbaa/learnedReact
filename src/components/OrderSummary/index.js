import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import {connect} from 'react-redux';

const OrderSummary = (props) => {
  return (
    <div className={css.OrderSummary}>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд</p>
      <ul>
        {Object.keys(props.ing).map((el) => (
          <li key={el}>
            <p>
              {props.ingNames[el]}: {props.ing[el]}{" "}
            </p>
          </li>
        ))}
      </ul>
      <p>Нийт дүн: {props.price}</p>
      <p>Та цааш үргэлжлүүлэх үү?</p>
      <Button
        clickedBtn={props.closeConfirmModal}
        btnType="Danger"
        text="Татгалзах"
      />
      <Button 
        clickedBtn={props.onContinue}
        btnType="Success" 
        text="Үргэлжлүүлэх" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ing: state.burgerReducer.ing, 
    price: state.burgerReducer.price,
    ingNames: state.burgerReducer.ingNames
  }
}

export default connect(mapStateToProps)(OrderSummary);
