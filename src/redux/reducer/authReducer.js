const initialState = {
  loading: false,
  errDataBase: null,
  token: "",
  userUpdated: false,
  user: {
    balance: 0,
    _id: "",
    firstName: "",
    lastName: "",
    regNumber: "",
    email: "",
    role: "",
    isMailActivated: false,
    isPhoneActivated: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER_START":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.user,
        token: action.token,
      };

    case "LOGIN_USER_ERROR":
      return {
        ...state,
        loading: false,
        errDataBase: action.err.response.data.error.message,
      };

    case "SIGN_UP_USER_START":
      return {
        ...state,
        loading: true,
      };

    case "SIGN_UP_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.user,
        token: action.token,
      };

    case "SIGN_UP_USER_ERROR":
      return {
        ...state,
        loading: false,
        errDataBase: action.err.response.data.error.message,
      };

    case "LOGOUT":
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expireDate");
      return {
        ...state,
        user: {},
        token: "",
        errDataBase: "",
      };

    case "UPDATE_USER_START":
      return {
        ...state,
        loading: true,
      };

    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        ...state.user,
        loading: false,
        user: action.user,
      };

    case "UPDATE_USER_ERROR":
      return {
        ...state,
        loading: false,
        errDataBase: action.err,
      };

    default:
      return state;
  }
};

export default reducer;
