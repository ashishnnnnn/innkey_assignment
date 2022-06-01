export const userDataReducer = (state, action) => {
  const type = action.type;
  switch (type) {
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      const selectdUser = action.payload;
      return state.filter((ele) => ele.employee_no !== selectdUser);
    case "EDIT":
      const editedUser = action.payload;
      return state.map((ele) =>
        ele.employee_no === editedUser.employee_no ? editedUser : ele
      );
    default:
      return state;
  }
};
