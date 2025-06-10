import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [division, setDivision] = useState("Khordha");

  return (
    <div className="upload-container">
      <label htmlFor="division" className="division-label">
        Choose your Division
      </label>
      <select
        id="division"
        value={division}
        onChange={(e) => setDivision(e.target.value)}
        className="division-select"
      >
        <option value="Khordha">Khordha</option>
        <option value="Waltair">Waltair</option>
        <option value="Sambalpur">Sambalpur</option>
      </select>
    </div>
  );
};

export default Upload;
