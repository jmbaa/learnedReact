const initialState = {
  orders: [],
  loading: false,
  err: null,

  newOrderStatus: {
    saving: false,
    finished: false,
    error: null,
  }
};

const reducer = (state = initialState, action) => {
  
  switch(action.type) {
    case 'CLEAR_ORDER': return {
      ...state,
      newOrderStatus: {
        saving: false,
        finished: false,
        error: null,
      }
    }

    case 'LOAD_ORDERS_START': return {
      ...state,
      loading: true
    }

    case 'LOAD_ORDERS_SUCCESS': return {
      ...state,
      orders: action.orders,
      loading: false,
    }
    case 'LOAD_ORDERS_ERROR': return {
      ...state,
      err: action.err,
    }

    case 'SAVE_ORDER_START': return {
      ...state,
      newOrderStatus: {
        ...state.newOrderStatus,
        saving: true,
        error: null
      },
    }

    case 'SAVE_ORDER_SUCCESS': return {
      ...state,
      newOrderStatus: {
        ...state.newOrderStatus,
        saving: false,
        finished: true,
        error: null
      },
    }

    case 'SAVE_ORDER_ERROR': return {
      ...state,
      newOrderStatus: {
        ...state.newOrderStatus,
        saving: false,
        finished: true,
        error: action.error
      }
    }

    default: return state;
  }
};

export default reducer;
