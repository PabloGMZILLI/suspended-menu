import React from "react";

const SettingsPage = () => {
    const onChange = event =>{
        localStorage.setItem("editMode", JSON.stringify( { "editSuspendedMenu" : event.target.checked }));
    };
  return (
    <div>
      <h1>Settings</h1>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            id="editSuspendedMenu"
            name="editSuspendedMenu"
            onChange={onChange}
            defaultChecked={false}
          />
          Set Menu Position Buttons
        </label>
      </div>
    </div>
  );
};
export default SettingsPage;
