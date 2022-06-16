import React from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

const Home = () => {
	const navigate = useNavigate()

	return (
		<div className="home-container">
			<div className="text-container">
				<h1 className="title">S P A C E S H O P </h1>
				<h2 className="description">" Discover the latest fashionable collection on the space "</h2>
			</div>
			<div className="button-container">
				<p> {">>"} </p>
				<button onClick={() => navigate("/shop")}>S H O P N O W !</button>
				<p> {"<<"} </p>
			</div>
		</div>
	)
}

export default Home
