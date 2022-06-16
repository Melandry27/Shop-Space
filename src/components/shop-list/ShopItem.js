import React from "react"
import "./ShopItem.css"

import { useNavigate } from "react-router-dom"

const ShopItem = ({ img, title, price, id }) => {
	const navigate = useNavigate()
	return (
		<div className="item-container" onClick={() => navigate(`/shop/${id}`)}>
			<img src={img} alt={"Planète"} className="item-image" />
			<h1 className="item-tilte">{title}</h1>
			<h3 className="item-price">{price + " $"}</h3>
		</div>
	)
}

export default ShopItem
