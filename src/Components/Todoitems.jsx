import React from "react";
function Todoitems({todoItems, onDeleteclick }) {
  return (
    <div>
      <div class="items-container">
        {todoItems.map((item,index)=>{
          return <div key={index}  class="row kg-row">
        <div class="col-4">{item.name}</div>
        <div class="col-4" >{item.dueDate}</div>
        <div class="col-2">
          <button className="btn btn-danger" onClick={()=>{onDeleteclick(item.name)}}>Delete</button>
        </div>
      </div>
        })}
      </div>
    </div>
  );
}

export default Todoitems;
