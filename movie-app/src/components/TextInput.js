import React from 'react'

const TextInput = ({ name, placeholder, show=false }) => {
	let value = "";
	if (show) {
		value = placeholder;
	}
	return (
		<div className="w-full leading-loose">
            <label className="font-semibold">{name}</label>
            <br />
            <input type="text" placeholder={placeholder} value={value} className="w-full px-4 py-4 rounded-lg text-black"></input>
      	</div>
  	)
}

export default TextInput;