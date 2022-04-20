import React, { useEffect, useState, useRef } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../General/Spinner";
import * as actions from "../../redux/action/orderActions";
import { connect } from "react-redux";

const ShipContact = (props) => {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const navigate = useNavigate();

  const totalPriceRef = useRef();

  useEffect(() => {
    if(totalPriceRef.current.style.color === 'red') 
      totalPriceRef.current.style.color = 'green';
    else totalPriceRef.current.style.color = 'red';
  });

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.err) {
      navigate("/orders");
    }

    return () => {
      if (props.newOrderStatus.finished) {
        props.clearOrder();
      }
    };
  }, [props.newOrderStatus.finished]);

  const postOrder = () => {
    const order = {
      userId: props.userId,
      ing: props.ing,
      totalPrice: props.price,
      address: {
        name: name,
        city: city,
        district: street,
      },
    };

    props.saveOrder(order);
  };

  // useEffect(() => {
  //   if change email in real time
  // }, [email]);

  return (
    <div className={css.ShipContact}>
      <div ref={totalPriceRef}><strong>Дүн: {props.price}₮</strong></div>

      <p>
        {props.newOrderStatus.error &&
          `Алдаа гарлаа: ${props.newOrderStatus.error.err}`}
      </p>

      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <p>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="нэр"
            ></input>
          </p>
          <p>
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              type="text"
              placeholder="хот"
            ></input>
          </p>
          <p>
            <input
              type="text"
              onChange={(e) => setStreet(e.target.value)}
              placeholder="хаяг"
            ></input>
          </p>
          <Button clickedBtn={postOrder} text="ИЛГЭЭХ" btnType="Success" />
          <Outlet />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ing: state.burgerReducer.ing,
    price: state.burgerReducer.price,
    userId: state.authReducer.userId,
    newOrderStatus: state.orderReducer.newOrderStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (order) => dispatch(actions.saveOrder(order)),
    clearOrder: () => dispatch(actions.clearOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShipContact);
