import axios from "axios";

export const signUpUser = (email, password) => {
  return function (dispatch) {
    dispatch(signUpUserStart());

    let data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzcoVa086KV0PIJhEzUZTWIvx-6rxYJiM",
        data
      )
      .then((res) => {

        const token = res.data.idToken;
        const userId = res.data.localId;

        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        dispatch(signUpUserSuccess(token, userId));
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

export const signUpUserSuccess = (token ,userId) => {
  return {
    type: "SIGN_UP_USER_SUCCESS",
    token,
    userId
  };
};

export const signUpUserError = (err) => {
  return {
    type: "SIGN_UP_USER_ERROR",
    err
  };
};
