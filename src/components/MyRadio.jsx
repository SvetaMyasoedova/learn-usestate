import React, { useState } from "react";

function MyRadio() {
  const [value, setValue] = useState("JS");

  function changeRadio(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <label>
        <input
          type="radio"
          name="radio"
          value="Pyton"
          checked={value === "Pyton" ? true : false}
          onChange={changeRadio}
        />{" "}
        Pyton
      </label>

      <label>
        <input
          type="radio"
          name="radio"
          value="C"
          checked={value === "C" ? true : false}
          onChange={changeRadio}
        />{" "}
        C
      </label>

      <label>
        <input
          type="radio"
          name="radio"
          value="JS"
          checked={value === "JS" ? true : false}
          onChange={changeRadio}
        />{" "}
        JS
      </label>

      <p>I love {value}</p>
    </div>
  );
}

export default MyRadio;
