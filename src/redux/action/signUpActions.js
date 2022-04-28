import axios from "axios";

export const signUpUser = (email, password) => {
  return function (dispatch) {
    dispatch(signUpUserStart());

    let data = {
      email,
      password,
      balance: 0
    };

    axios
      .post(
        "http://localhost:8000/api/v1/users",
        data
      )
      .then((res) => {

        const user = res.data.user;
        const token =  res.data.token;

        // const token = res.data.idToken;
        // const userId = res.data.localId;
        // localStorage.setItem('token', token);
        // localStorage.setItem('userId', userId);

        dispatch(signUpUserSuccess(user, token));
      })
      .catch((err) => {
        dispatch(signUpUserError(err))
      });
  };
};

export const signUpUserStart = () => {
  return {
    type: "SIGN_UP_USER_START",
  };
};

export const signUpUserSuccess = (user ,token) => {
  return {
    type: "SIGN_UP_USER_SUCCESS",
    user, 
    token
  };
};

export const signUpUserError = (err) => {
  return {
    type: "SIGN_UP_USER_ERROR",
    err
  };
};
