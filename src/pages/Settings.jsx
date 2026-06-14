import { useState } from "react";

const Settings = () => {
  const [camera, setCamera] =
    useState(true);

  const [microphone, setMicrophone] =
    useState(true);

  const [autoSave, setAutoSave] =
    useState(true);

  return (
    <div
      className="card"
      style={{ padding: "30px" }}
    >
      <h1>Settings</h1>

      <div style={{ marginTop: "25px" }}>

        <label>
          <input
            type="checkbox"
            checked={camera}
            onChange={() =>
              setCamera(!camera)
            }
          />
          {" "}Camera Enabled
        </label>

        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={microphone}
            onChange={() =>
              setMicrophone(!microphone)
            }
          />
          {" "}Microphone Enabled
        </label>

        <br /><br />

        <label>
          <input
            type="checkbox"
            checked={autoSave}
            onChange={() =>
              setAutoSave(!autoSave)
            }
          />
          {" "}Auto Save Reports
        </label>

        <br /><br />

        <button
          style={{
            padding: "10px 20px",
          }}
        >
          Reset Interview Data
        </button>

      </div>
    </div>
  );
};

export default Settings;