import React from "react"
import "./Background.css"

import Home from "../homepage/Home"
import Navbar from "../navbar/Navbar"

const Background = () => {
	return (
		<div className="background-home">
			<Navbar />
			<Home />
		</div>
	)
}

export default Background
