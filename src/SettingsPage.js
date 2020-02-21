import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

const SettingsPage = () => {
  return (
    <div>
      <input type="checkbox" id="editSuspendedMenu" name="editSuspendedMenu" value={false} />
      <label for="editSuspendedMenu">Set Menu Position Buttons</label>
    </div>
  );
};

export default SettingsPage
