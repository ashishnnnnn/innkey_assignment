import "./App.css";
import { useUserData } from "./context/userContext";
import { useState } from "react";
import { Pagenate } from "./Components/Pagenate";
import { dataAfterSearch } from "./Utils/dataAfterSearch";
import { Modal } from "./Components/Modal";

function App() {
  const { userData, setUserData } = useUserData();
  const [selectedRow, setSelectedRow] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currUser, setCurrModalUser] = useState({});
  const toggle_modal = () => {
    setShowModal((pre_val) => !pre_val);
  };
  const reset_modal = () => {
    setCurrModalUser({});
    setSelectedRow(0);
  };
  const dataPerPage = 5;

  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCuurentPage] = useState(1);
  const dataLastIndex = currPage * dataPerPage;
  const dataFirstIndex = dataLastIndex - dataPerPage;
  const seacrhResult = dataAfterSearch(userData, searchValue);
  const dataToShow = seacrhResult.slice(dataFirstIndex, dataLastIndex);
  const pagenate = (pageNumber) => setCuurentPage(pageNumber);

  return (
    <div className="App">
      <div className="header">
        <h2>Employee List Page</h2>
        <input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          placeholder="search"
        />
      </div>
      <div className="tableContainer">
        <table>
          <tr>
            <th>Employee No</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Date Of Joining</th>
            <th>Salary(PA)</th>
          </tr>
          {dataToShow.map((ele) => (
            <tr
              className={
                selectedRow === ele.employee_no ? "active datarow" : "datarow"
              }
              key={ele.employee_no}
              onClick={() => {
                setSelectedRow(ele.employee_no);
                setCurrModalUser(ele);
              }}
            >
              <td>{ele.employee_no}</td>
              <td>{ele.employee_name}</td>
              <td>{ele.designation}</td>
              <td>{ele.date_of_joining}</td>
              <td>{ele.salary}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="action-buttons">
        <Pagenate
          currPage={currPage}
          dataPerPage={dataPerPage}
          dataLength={seacrhResult.length}
          pagenate={pagenate}
        />
        <button
          disabled={selectedRow !== 0}
          onClick={toggle_modal}
          style={{ marginLeft: "auto" }}
        >
          Add
        </button>
        <button disabled={selectedRow === 0} onClick={toggle_modal}>
          Edit
        </button>
        <button
          onClick={() => {
            alert("Do you really want to delete");
            setSelectedRow(0);
            setUserData({ type: "DELETE", payload: selectedRow });
          }}
          disabled={selectedRow === 0}
        >
          Delete
        </button>
      </div>
      {showModal && (
        <Modal
          user={currUser}
          toggle_modal={toggle_modal}
          reset_modal={reset_modal}
        />
      )}
    </div>
  );
}

export default App;
