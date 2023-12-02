import React from "react";
import { MdDeleteForever } from "react-icons/md";
function Todoitems({todoItems, onDeleteclick }) {
  return (
    <div>
      <div className="items-container">
        {todoItems.map((item)=>{
          return <div key={item.name}  className="row kg-row">
        <div className="col-4">{item.name}</div>
        <div className="col-4" >{item.dueDate}</div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={()=>{onDeleteclick(item.name)}}>
            <MdDeleteForever style={{fontSize:'30px'}}/>
          </button>
        </div>
      </div>
        })}
      </div>
    </div>
  );
}

export default Todoitems;
