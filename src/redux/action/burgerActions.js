export const addIng = (ingName) => {
  return {
    type: "ADD_ING",
    ingName,
  };
};

export const removeIng = (ingName) => {
  return {
    type: "REM_ING",
    ingName,
  };
};
