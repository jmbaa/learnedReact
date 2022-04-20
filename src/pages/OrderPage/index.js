import React, { useEffect } from "react";
import css from "./style.module.css";
import Orders from "../../components/Orders";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/action/orderActions";

const OrderPage = (props) => {

  useEffect(() => {
    props.loadOrders(props.userId);
  }, []);

  return (
    <div className={css.OrderPage}>
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          {props.orders.map((el) => (
            <Orders key={el[0]} orders={el[1]} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
