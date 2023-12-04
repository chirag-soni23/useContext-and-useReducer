import React, { useState } from "react";
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/Todoitems";
import Welcomemsg from "./Components/Welcomemsg";
import { Store } from "./Store/Store";
function App() {
  let time = new Date();
  let tododate = time.toLocaleDateString();
  // Add todo
  const [todoItems, setTodoitems] = useState([]);
  const handleNewitem = (itemName, itemDuedate) => {
    // console.log(itemName + " Date " +  itemDuedate);
    // setTodoitems(newtodoItems)
    setTodoitems((currVal) => {
      const newtodoItems = [
        ...currVal,
        { name: itemName, dueDate: itemDuedate },
      ];
      return newtodoItems;
    });
    // Delete todo
  };
  const handleDeleteItem = (todoItemname) => {
    // console.log("Item Delete :- " + todoItemname)
    const newItem = todoItems.filter((item) => item.name != todoItemname);
    setTodoitems(newItem);
  };
  const defaultTodoitems = [{ name: "buy ghee", dueDate: "1233" }];
  //console.log(defaultTodoitems);
  return (
    <Store.Provider value={{todoItems:todoItems,addnewItem:handleNewitem,deleteitem:handleDeleteItem}}>
      <center className="todo-container">
        <AppName />
        <Addtodo onNewitem={handleNewitem} />
        <Welcomemsg todoItems={todoItems} />
        <Todoitems todoItems={todoItems} onDeleteclick={handleDeleteItem} />
      </center>
    </Store.Provider>
  );
}

export default App;
