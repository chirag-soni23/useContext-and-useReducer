import {createContext} from 'react'
export const Store = createContext([]);

const TodoitemsContextProvider = ()=>{
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
  

}
export default TodoitemsContextProvider;