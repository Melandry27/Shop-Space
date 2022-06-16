/*import React from "react"
import "./ShopList.css"

import ShopItem from "./ShopItem"
import Item from "../../models/item"

const ShopList = () => {
	return (
		<div className="shoplist-container">
			<div className="shoplist">
				<div className="shoplist-title">
					<h1>SHOP LIST | SPACE STORE</h1>
				</div>
				<div className="shoplist-content">
					<ShopItem img={Item[0].img} title={Item[0].title} price={Item[0].price} id={Item[0].id} />
					<ShopItem img={Item[1].img} title={Item[1].title} price={Item[1].price} id={Item[1].id} />
					<ShopItem img={Item[2].img} title={Item[2].title} price={Item[2].price} id={Item[2].id} />
					<ShopItem img={Item[3].img} title={Item[3].title} price={Item[3].price} id={Item[3].id} />
					<ShopItem img={Item[4].img} title={Item[4].title} price={Item[4].price} id={Item[4].id} />
					<ShopItem img={Item[5].img} title={Item[5].title} price={Item[5].price} id={Item[5].id} />
				</div>
			</div>
		</div>
	)
}

export default ShopList*/

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
