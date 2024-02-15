import React from 'react'

const HeroImage = () => {
	return (
		<div
			className="relative h-screen bg-cover bg-center"
        	style={{ backgroundImage: 'url("/static/media/hero.jpg")' }}
    	>
        	<div className="absolute inset-0 bg-black opacity-50"></div>
      	</div>
  	)
}

export default HeroImage;