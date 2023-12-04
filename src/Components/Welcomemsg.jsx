import React, { useContext } from "react";
import { Store } from "../Store/Store";

function Welcomemsg() {
  const contextObj  = useContext(Store)
  const todoItems = contextObj.todoItems
  return (
    <div>
     { todoItems.length == 0 &&
      <p style={{ fontSize: "20px",  marginTop: "100px",fontWeight:"600" }}>
        Enjoy Your Day 😍😍
      </p>}
    </div>
  );
}

export default Welcomemsg;
