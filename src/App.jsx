import React, { createContext, useState } from "react";
import "./App.css";
import Form from "./components/form";
export const AppContext = createContext();
const productsData = [{Itm:"Hen",Pri:"100",qut:"3",Amt:300},{Itm:"dogs",Pri:"1000",qut:"3",Amt:3000}]
function App() {
  const [data,setData] = useState(productsData);
  const [state, setState] = useState(true);
  const [editItem,setEdit] = useState(undefined);
  const removeItem = function(i){
    data.splice(i,1);
    setData([...data])
  }
  return (
    <div className="App">
      <AppContext.Provider value={{ state, setState,data,setData,editItem,setEdit }}>
        <h1>Inventory Management App</h1>
        <div className="btn1">
          <button
            onClick={() => {
              setState(false);
            }}
          >
            Add Item
          </button>
        </div>
        <Form/>
        <div className="div2">
          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item,i)=>{
                return <tr key={i}>
                  <td>{item.Itm}</td>
                  <td>{item.Pri}</td>
                  <td>{item.qut}</td>
                  <td>{item.Amt}</td>
                  <td>
                    <button onClick={()=>{setEdit(i),setState(false)}}>Edit</button>
                    <button onClick={()=>{removeItem(i)}}>Delete</button>
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
