import axios from "axios";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    let data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzcoVa086KV0PIJhEzUZTWIvx-6rxYJiM",
        data
      )
      .then((res) => {
        const userId = res.data.localId;
        const token = res.data.idToken;
        const expiresIn = res.data.expiresIn;
        const refreshToken = res.data.refreshToken;

        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expireDate", expireDate);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(loginUserSuccess(userId, token));
        dispatch(logOutAfterMillSec(expiresIn * 3000));
      })
      .catch((err) => {
        dispatch(loginUserError(err));
      });
  };
};

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};

export const loginUserSuccess = (userId, token) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    userId,
    token,
  };
};

export const loginUserError = (err) => {
  return {
    type: "LOGIN_USER_ERROR",
    err,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const logOutAfterMillSec = (ms) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
