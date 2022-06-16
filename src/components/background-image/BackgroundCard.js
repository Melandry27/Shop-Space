import React from "react"
import "./BackgroundCard.css"

import { useParams } from "react-router-dom"
import Item from "../../models/item"
import ItemLook from "../shop-list/ItemLook"
import Navbar from "../navbar/Navbar"

const BackgroundCard = () => {
	const params = useParams()
	const id = Item[params.id - 1].id
	const title = Item[params.id - 1].title
	const price = Item[params.id - 1].price
	const img = Item[params.id - 1].img
	const desc = Item[params.id - 1].description

	return (
		<div className="background-card">
			<Navbar />
			<ItemLook key={id} img={img} title={title} price={price} desc={desc} />
		</div>
	)
}

export default BackgroundCard
