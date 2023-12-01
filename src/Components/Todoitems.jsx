import React from "react";
function Todoitems({todoItems}) {
  return (
    <div>
      <div class="items-container">
        {todoItems.map((item)=>{
          return <div  class="row kg-row">
        <div class="col-4">{item.name}</div>
        <div class="col-4" >{item.dueDate}</div>
        <div class="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
        })}
      </div>
    </div>
  );
}

export default Todoitems;
