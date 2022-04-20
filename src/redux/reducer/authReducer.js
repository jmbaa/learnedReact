const initialState = {
  loading: false,
  errFireBase: null,
  token: "",
  userId: "",
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
        token: action.token,
        userId: action.userId,
      };

    case "LOGIN_USER_ERROR":

      console.log(action.err);
      return {
        ...state,
        loading: false,
        errFireBase: action.err.response.data.error,
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
        token: action.token,
        userId: action.userId,
      };

    case "SIGN_UP_USER_ERROR":
      return {
        ...state,
        loading: false,
        errFireBase: action.err.response.data.error.message,
      };

    case "LOGOUT":
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expireDate");
      return {
        ...state,
        token: null,
        userId: null
      };

    default:
      return state;
  }
};

export default reducer;
