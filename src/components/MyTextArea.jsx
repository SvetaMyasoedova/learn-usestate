import React, {useState} from "react";

function MyTextArea () {
	const [value, setValue] = useState('');
	
	function changeText(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<textarea value={value} onChange={changeText} />
		<p>Your text: {value}</p>
	</div>;
}

export default MyTextArea;