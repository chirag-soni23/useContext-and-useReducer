import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

function Addtodo({ onNewitem }) {
  const [todoName, setTodoname] = useState('');
  const [todoDuedate, setTodoDuedate] = useState('');

  const handleAddTodo = () => {
    // Check if both fields are filled
    if (todoName.trim() === '' || todoDuedate.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Check if the date is valid
    if (new Date(todoDuedate) < new Date()) {
      alert('Please select a valid future date.');
      return;
    }

    // Call the onNewitem function
    onNewitem(todoName, todoDuedate);

    // Clear the input fields
    setTodoname('');
    setTodoDuedate('');
  };

  return (
    <div>
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo here..."
            onChange={(e) => setTodoname(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDuedate}
            onChange={(e) => setTodoDuedate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success" onClick={handleAddTodo} >
        <IoIosAddCircle style={{fontSize:"30px"}}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
