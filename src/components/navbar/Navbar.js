import React from "react"
import "./Navbar.css"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left-section">
				<a href="/">Space Store</a>
			</div>
			<div className="right-section">
				<a href="/">Home</a>
				<a href="/shop">Shop</a>
			</div>
		</div>
	)
}

export default Navbar
