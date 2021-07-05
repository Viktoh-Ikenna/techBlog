import React from "react";
import "./settings.css";

export const Settins = () => {
  return (
    <div className="admin_settings">
      <div className="settings_control">
        <div>New User</div>
        <div>Credentials</div>
      </div>
      <div className="settings_view">
        <table>
          <tbody>
            <tr key="">
              <td>UserName</td>
              <td>
                <input type="text" value="ojukwu" disabled />
              </td>
            </tr>
            <tr key="">
              <td>Email</td>
              <td>
                <input type="text" value="ojukwu" disabled />
              </td>
            </tr>
            <tr key="">
              <td>Password</td>
              <td>
                <input type="password" value="ojukwu" disabled />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='upadate_details'>Update</div>
      </div>
    </div>
  );
};
