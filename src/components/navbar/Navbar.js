import React from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<div className="navbar">
			<div className="left-section">
				<a href="/" onClick={() => navigate("/")}>
					Space Store
				</a>
			</div>
			<div className="right-section">
				<a href="/" onClick={() => navigate("/")}>
					Home
				</a>
				<a href="/shop" onClick={() => navigate("/shop")}>
					Shop
				</a>
			</div>
		</div>
	)
}

export default Navbar
