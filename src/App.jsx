import React, { useState } from "react";
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/Todoitems";
import Welcomemsg from "./Components/Welcomemsg";
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
  // Add todo
  const [todoItems,setTodoitems] = useState(initialtodoItems)
  const handleNewitem = (itemName,itemDuedate)=>{
   // console.log(itemName + " Date " +  itemDuedate);
    const newtodoItems =[...todoItems,  {name:itemName,
    dueDate:itemDuedate}]
    setTodoitems(newtodoItems)
    // Delete todo

  }
  const handleDeleteItem = (todoItemname)=>{
   // console.log("Item Delete :- " + todoItemname)
    const newItem =  todoItems.filter(item =>item.name != todoItemname)
    setTodoitems(newItem)
  }

  return (
    <center className="todo-container">
      <AppName />
      <Addtodo onNewitem={handleNewitem}  />
      {todoItems.length== 0 && <Welcomemsg/>}
      <Todoitems todoItems={todoItems} onDeleteclick = {handleDeleteItem}/>
   
    </center>
  );
}

export default App;
