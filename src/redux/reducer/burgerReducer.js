const initialState = {
  ing: {
    bacon: 0,
    meat: 0,
    cheese: 0,
    salad: 0,
  },
  price: 0,
  ingNames: {
    bacon: "Гахайн мах",
    cheese: "Бяслаг",
    salad: "Салад",
    meat: "Үхрийн мах",
  },
};

const INGREDIENT_PRICES = { salad: 150, cheese: 350, bacon: 1500, meat: 2000 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ORDER":
      return initialState;

    case "ADD_ING":
      return {
        ...state,
        ing: {
          ...state.ing,
          [action.ingName]: state.ing[action.ingName] + 1,
        },
        price: state.price + INGREDIENT_PRICES[action.ingName],
      };

    case "REM_ING":
      return {
        ...state,
        ing: {
          ...state.ing,
          [action.ingName]: state.ing[action.ingName] - 1,
        },
        price: state.price - INGREDIENT_PRICES[action.ingName],
      };

    default:
      return state;
  }
};

export default reducer;
