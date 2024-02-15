import React from 'react'

const TextInput = ({ name, placeholder }) => {
	return (
		<div className="w-full leading-loose">
            <label className="font-semibold">{name}</label>
            <br />
            <input type="text" placeholder={placeholder} className="w-full px-4 py-4 rounded-lg text-black"></input>
      	</div>
  	)
}

export default TextInput;