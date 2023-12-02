import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function Addtodo({ onNewitem }) {
  const [todoName, setTodoname] = useState("");
  const [todoDuedate, setTodoDuedate] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoName.trim() === "" || todoDuedate.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    if (new Date(todoDuedate) < new Date()) {
      alert("Please select a valid future date.");
      return;
    }
    onNewitem(todoName, todoDuedate);
    setTodoname("");
    setTodoDuedate("");
  };

  return (
    <div>
      <div className="todo">
        <form action="" onSubmit={handleAddTodo} className="row kg-row">
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
            <button type="submit" className="btn btn-success">
              <IoIosAddCircle style={{ fontSize: "30px" }} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addtodo;
