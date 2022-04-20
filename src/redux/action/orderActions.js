import axios from '../../axios-config';

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    dispatch(loadOrdersStart());

    const token = getState().authReducer.token;

    axios
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((res) => {
        const arr = Object.entries(res.data);
        dispatch(loadOrdersSucess(arr));
      })
      .catch((err) => {
        dispatch(loadOrdersError(err));
      });
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSucess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (err) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    err,
  };
};


export const saveOrder = (order) => {
  
  return function (dispatch, getState) {
    dispatch(saveOrderStart());

    const token = getState().authReducer.token;

    axios
      .post(`/orders.json?auth=${token}`, order)
      .then((res) => {
        dispatch(saveOrderSucess());
      })
      .catch((err) => {
        dispatch(saveOrderError(err));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSucess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS"
  };
};

export const saveOrderError = (err) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error: err
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER"
  };
};