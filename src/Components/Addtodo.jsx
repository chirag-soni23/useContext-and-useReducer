import React, { useState, useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";

function Addtodo({ onNewitem }) {
  const todoNameelement = useRef();
  const todoDuedateelement = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();

    const todoname = todoNameelement.current.value;
    const duedate = todoDuedateelement.current.value;

    if (todoname.trim() === "" || duedate.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (new Date(duedate) < new Date()) {
      alert("Please select a valid future date.");
      return;
    }
    todoNameelement.current.value = "";
    todoDuedateelement.current.value = "";

    onNewitem(todoname, duedate);
  };

  return (
    <div>
      <div className="todo">
        <form onSubmit={handleAddTodo} className="row kg-row">
          <div className="col-4">
            <input
              type="text"
              ref={todoNameelement}
              placeholder="Enter Todo here..."
            />
          </div>
          <div className="col-4">
            <input type="date" ref={todoDuedateelement} />
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
