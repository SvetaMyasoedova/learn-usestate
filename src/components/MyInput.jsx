import React, { useState } from "react";

function MyInput() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  function change1(event) {
    setValue1(event.target.value);
  }

  function change2(event) {
    setValue2(event.target.value);
  }

  function forClick() {
    setResult(Number(value1) + Number(value2));
  }

  return (
    <div>
      <input className="Input" value={value1} onChange={change1} />
      <input className="Input" value={value2} onChange={change2} />

      <button onClick={forClick}>add numbers</button>
      <p> RESULT: {result}</p>
    </div>
  );
}

export default MyInput;
