import React from "react";

const SuspendMenu = props => {
  // dragElement(document.getElementById("mydiv"));
  let menu = document.querySelector(".suspended-menu");
  console.log(menu);
  return (
    <div id="mydiv" className="suspendMenu">
      <div className="suspendMenuHeader" id="mydivheader">
        Click here to move
      </div>
      <div className="suspended-menu">
        <a href="/main">Main</a>
      </div>
      <div className="suspended-menu">
        <a href="/perfil">Perfil</a>
      </div>
      <div className="suspended-menu">
        <a href="/perfil">Logoff</a>
      </div>
    </div>
  );
};

export default SuspendMenu;
