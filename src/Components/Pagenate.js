import React from "react";
import "./Pagenate.css";

export const Pagenate = ({ currPage, dataPerPage, dataLength, pagenate }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(dataLength / dataPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagenate" style={{ display: "flex" }}>
      <button
        onClick={() => {
          pagenate(currPage - 1);
        }}
        disabled={currPage === 1}
      >
        Back
      </button>
      {pages.map((ele, idx) => (
        <button
          className={ele === Number(currPage) ? "active" : ""}
          key={idx}
          style={{}}
          onClick={() => {
            pagenate(ele);
          }}
        >
          {ele}
        </button>
      ))}
      <button
        onClick={() => {
          pagenate(currPage + 1);
        }}
        disabled={currPage === pages.length}
      >
        Next
      </button>
    </div>
  );
};
