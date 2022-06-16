import React from "react"
import "./BackgroundShop.css"

import Navbar from "../navbar/Navbar"
import ShopList from "../shop-list/ShopList"

const BackgroundShop = () => {
	return (
		<div className="background-shop">
			<Navbar />
			<ShopList />
		</div>
	)
}

export default BackgroundShop
