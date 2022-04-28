import axios from "axios";

export const updateUser = (user) => {
  return function (dispatch, getState) {
    dispatch(updateUserStart());

    const userId = getState().authReducer.user._id;
    const token = getState().authReducer.token;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(`http://localhost:8000/api/v1/users/${userId}`, user, config)
      .then((res) => {
        const updatedUser = res.data.data;
        dispatch(updateUserSuccess(updatedUser));
      })
      .catch((err) => {
        dispatch(updateUserError(err));
      });
  };
};

export const updateUserStart = () => {
  return {
    type: "UPDATE_USER_START",
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: "UPDATE_USER_SUCCESS",
    user,
  };
};

export const updateUserError = (err) => {
  return {
    type: "UPDATE_USER_ERROR",
    err,
  };
};
