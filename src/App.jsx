import React, { createContext, useState } from "react";
import "./App.css";
import Form from "./components/form";
export const AppContext = createContext();
const productsData = [{Itm:"dogs",Pri:"100",qut:"10",Amt:300},{Itm:"hens",Pri:"1000",qut:"3",Amt:3000},{Itm:"item1",Pri:"1000",qut:"15",Amt:15000},{Itm:"item2",Pri:"1000",qut:"2",Amt:2000}]
function App() {
  productsData.sort((a,b)=>a.qut-b.qut);
  const [data,setData] = useState(productsData);
  const [state, setState] = useState(true);
  const [editItem,setEdit] = useState(undefined);
  const removeItem = function(i){
    data.splice(i,1);
    setData([...data])
  }
  
  const onChange = function(e){
    const filteredItems = productsData.filter(item=>item.Itm.toLowerCase().includes(e.target.value.toLowerCase()));
    setData(filteredItems);
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
        <div className="search">
          <span className="material-icons">search</span>
          <input type="text" placeholder="Search item" onChange={onChange}/>
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
                  <td style={{background:item.qut<10?"limegreen":"transparent"}}>{item.qut}</td>
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
