import React from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<div className="navbar">
			<div className="left-section">
				<button onClick={() => navigate("/")}>Space Store</button>
			</div>
			<div className="right-section">
				<button onClick={() => navigate("/")}>Home</button>
				<button onClick={() => navigate("/shop")}>Shop</button>
			</div>
		</div>
	)
}

export default Navbar
