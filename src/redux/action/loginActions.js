import axios from "axios";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    let data = {
      email,
      password
    };

    axios
      .post(
        "http://localhost:8000/api/v1/users/login",
        data
      )
      .then((res) => {
        const user = res.data.user;
        const token =  res.data.token;

        // const userId = res.data.user._id;
        // const token = res.data.token;
        // const userRole = res.data.user.role;
        // const fName= res.data.user.firstName;
        // localStorage.setItem("token", token);
        // localStorage.setItem("userId", userId);
        // localStorage.setItem("userRole", userRole);

        dispatch(loginUserSuccess(user, token));
        // const expiresIn = res.data.expiresIn;
        // const refreshToken = res.data.refreshToken;

        // const expireDate = new Date(new Date().getTime() + expiresIn * 1000);

        // localStorage.setItem("token", token);
        // localStorage.setItem("userId", userId);
        // localStorage.setItem("expireDate", expireDate);
        // localStorage.setItem("refreshToken", refreshToken);
        // dispatch(logOutAfterMillSec(expiresIn * 3000));
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

export const loginUserSuccess = (user, token) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    user,
    token
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
