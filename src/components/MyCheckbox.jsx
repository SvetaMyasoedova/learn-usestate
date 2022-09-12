import React, {useState} from "react";

function MyCheckbox() {
	const [checked, setChecked] = useState(true);
	
	return <div>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p>checkbox state: {checked ? 'ON' : 'OFF'}</p>
	</div>;
}

export default MyCheckbox;