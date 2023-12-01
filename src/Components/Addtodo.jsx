import React, { useState } from 'react'

function Addtodo({onNewitem}) {
  const [todoName,setTodoname] = useState()
  const [todoDuedate,setTodoDuedate] = useState()

  return (
    <div>
          <div class="row kg-row">
          <div class="col-4">
            <input type="text" value={todoName} placeholder="Enter Todo here..." onChange={(e)=>setTodoname(e.target.value)} />
          </div>
          <div class="col-4">
            <input type="date" value={todoDuedate} onChange={(e)=>setTodoDuedate(e.target.value)} />
          </div>
          <div class="col-2">
            <button className="btn btn-success" onClick={()=>onNewitem(todoName,todoDuedate , setTodoDuedate(""),setTodoname("")) }>Add</button>
          </div>
        </div>
    </div>
  )
}

export default Addtodo