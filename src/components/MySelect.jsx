import React, { useState } from "react";

function MySelect() {
  const [value, setValue] = useState("");

  function changeSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <select value={value} onChange={changeSelect}>
        <option>apple</option>
        <option>banana</option>
        <option>pear</option>
        <option>orange</option>
      </select>
      <p>your choice: {value}</p>
    </div>
  );
}

export default MySelect;
