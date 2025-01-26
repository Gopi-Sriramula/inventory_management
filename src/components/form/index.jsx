import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { AppContext } from "../../App";
function Form() {
  const { state, setState, data, editItem, setEdit } = useContext(AppContext);
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [state4, setState4] = useState("");
  useEffect(() => {
    if (editItem > -1) {
      setState1(data[editItem].Itm);
      setState2(data[editItem].Pri);
      setState3(data[editItem].qut);
      setState4(data[editItem].Amt);
     }
}, [editItem]);
const clear = function () {
     setState1("");
     setState2("");
     setState3("");
     setState4("");
};
const onSubmit = function (e) {
     e.preventDefault();
     if (editItem > -1) {
          data[editItem] = { Itm: state1, Pri: state2, qut: state3, Amt: state4 };
          setState(true);
          setEdit(undefined);
     } else {
          data.push({ Itm: state1, Pri: state2, qut: state3, Amt: state4 });
          setState(true);
    }
    clear();
  };
  return (
    <div
      className="form-container"
      style={{ display: state ? "none" : "flex" }}
    >
      <form className="form" onSubmit={onSubmit}>
        <span
          className="close"
          onClick={() => {
            setState(true);
            if(!undefined){
               clear();
            }
          }}
        >
          &times;
        </span>
        <label htmlFor="name">Product Name :</label>
        <input
          type="text"
          placeholder="Item Name"
          value={state1}
          onChange={(e) => {
            setState1(e.target.value);
          }}
          id="name"
          required
        />
        <label htmlFor="price">Price :</label>
        <input
          type="text"
          placeholder="Enter Price"
          value={state2}
          onChange={(e) => {
            setState2(e.target.value);
          }}
          id="price"
          required
        />
        <label htmlFor="Quantity">Quantity :</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={state3}
          onChange={(e) => {
            setState3(e.target.value), setState4(state2 * e.target.value);
          }}
          id="quantity"
          required
        />
        <label htmlFor="amount">Amount :</label>
        <input
          type="text"
          placeholder="Enter Amount"
          value={state4}
          id="amount"
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
