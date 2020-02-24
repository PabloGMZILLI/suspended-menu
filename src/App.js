import React from "react";
import "./styles.css";
import SuspendedMenu from "./Components/SuspendedMenu";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";

export default function App() {
  return (
    <div className="App">
      <SuspendedMenu>Main</SuspendedMenu>
      <SuspendedMenu>Perfil</SuspendedMenu>
      <SuspendedMenu
        name='Settings'
        href='/settings'
        isEditMode={ true }
      />
      <h1>Hello CodeSandbox</h1>
      <div><h2>Start editing to see some magic <a href='/settings'>happen!</a></h2></div>
    </div>
  );
}
