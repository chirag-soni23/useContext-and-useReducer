import React, { useReducer } from "react";
import AppName from "./Components/AppName";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/Todoitems";
import Welcomemsg from "./Components/Welcomemsg";
import { Store } from "./Store/Store";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDuedate },
    ];
  } else if (action.type === 'DELETE_ITEM') {
    newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
  }

  return newTodoItems;
};

function App() {
  // UseReducer
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // Add todo
  const handleNewitem = (itemName, itemDuedate) => {
    const newitemAction = {
      type: 'NEW_ITEM',
      payload: {
        itemName,
        itemDuedate,
      },
    };
    dispatchTodoItems(newitemAction);
  };

  // Delete todo
  const handleDeleteItem = (itemName) => {
    const deleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <Store.Provider value={{ todoItems, addnewItem: handleNewitem, deleteitem: handleDeleteItem }}>
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
