import React from "react"
import "./ShopList.css"

import ShopItem from "./ShopItem"
import Item from "../../models/item"

const ShopList = () => {
	const list = Item.map((item) => (
		<ShopItem img={item.img} title={item.title} price={item.price} id={item.id} />
	))
	return (
		<div className="shoplist-container">
			<div className="shoplist">
				<div className="shoplist-title">
					<h1>SHOP LIST | SPACE STORE</h1>
				</div>
				<div className="shoplist-content">{list}</div>
			</div>
		</div>
	)
}

export default ShopList
