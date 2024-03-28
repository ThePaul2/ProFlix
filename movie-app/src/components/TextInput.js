import React from 'react'

const TextInput = ({ name, placeholder, show=false }) => {
	let value = "";
	if (show) {
		value = placeholder;
	}
	const NameLabel = () => {
		if (name === "") {
			return (
				<div></div>
			);
		} else {
			return (
				<div>
					<label className="font-semibold">{name}</label>
    	       		<br />
				</div>
			);
		}
	}
	return (
		<div className="w-full leading-loose">
			<NameLabel />
            <input type="text" placeholder={placeholder} defaultValue={value} className="w-full px-4 py-4 rounded-lg text-black"></input>
      	</div>
  	)
}

export default TextInput;