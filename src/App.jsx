import React, { useState } from "react";
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/Todoitems";
function App() {
  let time = new Date();
  let tododate = time.toLocaleDateString();
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "12/12/2023",
    },
    {
      name: "Go To College",
      dueDate: '14/12/2023',
    },
    {
      name: "Like this Video",
      dueDate:'Right Now',
    },
  ];
  const [todoItems,setTodoitems] = useState(initialtodoItems)
  const handleNewitem = (itemName,itemDuedate)=>{
    console.log(itemName + " Date " +  itemDuedate);
    const newtodoItems =[...todoItems,  {name:itemName,
    dueDate:itemDuedate}]
    setTodoitems(newtodoItems)
  }
  return (
    <center className="todo-container">
      <AppName />
      <Addtodo onNewitem={handleNewitem}  />
      <Todoitems todoItems={todoItems}/>
   
    </center>
  );
}

export default App;
