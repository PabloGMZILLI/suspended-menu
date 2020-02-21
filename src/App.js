import React from "react";
import "./styles.css";
import SuspendedMenu from "./SuspendedMenu";
import SettingsPage from "./SettingsPage";

export default function App() {
  return (
    <div className="App">
      <SuspendedMenu>Main</SuspendedMenu>
      <SuspendedMenu>Perfil</SuspendedMenu>
      <SuspendedMenu>Settings</SuspendedMenu>
      <h1>Hello CodeSandbox</h1>
      <div><h2>Start editing to see some magic happen!</h2><SettingsPage/></div>
    </div>
  );
}
