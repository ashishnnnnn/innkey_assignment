import "./Modal.css";
import { useState } from "react";
import { useUserData } from "../context/userContext";
export const Modal = ({ user, toggle_modal, reset_modal }) => {
  const { setUserData } = useUserData();
  const [currUser, setCurrUser] = useState(user ? user : {});
  console.log(currUser);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCurrUser((pre_user) => ({ ...pre_user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.employee_no) {
      setUserData({
        type: "EDIT",
        payload: {
          ...currUser,
        },
      });
    } else {
      setUserData({
        type: "ADD",
        payload: {
          ...currUser,
        },
      });
    }
    toggle_modal();
    reset_modal();
  };
  return (
    <div className="pop_up">
      <div className="pop_up_background"></div>
      <div className="pop_up_input ">
        <div
          onClick={() => {
            toggle_modal();
            reset_modal();
          }}
          className="cross "
        >
          &times;
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="employee_no"
            className="input "
            placeholder="Add employee_no"
            value={currUser.employee_no || ""}
            onChange={handleChange}
            required
          ></input>
          <input
            name="employee_name"
            className="input "
            placeholder="Add employee_name"
            value={currUser.employee_name || ""}
            onChange={handleChange}
            required
          ></input>
          <input
            name="designation"
            className="input "
            placeholder="Add designation"
            value={currUser.designation || ""}
            onChange={handleChange}
            required
          ></input>
          <input
            name="date_of_joining"
            className="input "
            placeholder="Add date_of_joining"
            value={currUser.date_of_joining || ""}
            onChange={handleChange}
            required
          ></input>
          <input
            name="salary"
            className="input "
            placeholder="Add salary"
            value={currUser.salary || ""}
            onChange={handleChange}
            required
          ></input>

          <div className="pop_up_buttons ">
            <button type="submit" className="btn btn-primary ">
              Add
            </button>
            <button
              onClick={() => {
                toggle_modal();
                reset_modal();
              }}
              className="btn btn-secondary "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
