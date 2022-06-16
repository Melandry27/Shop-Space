import React from "react"
import "./ItemLook.css"

const ItemLook = ({ img, title, price, desc }) => {
	return (
		<div className="itemlook">
			<div className="itemlook-container">
				<div className="img-container">
					<img src={img} alt="" />
				</div>
				<div className="description-container">
					<h2 className="title">{title}</h2>
					<h2 className="desc">{"Description: " + desc}</h2>
					<h2 className="price">{price + " $"}</h2>
					<div className="button-container">
						<button className="back" onClick={() => window.history.back()}>
							BACK
						</button>
						<button
							className="buy"
							onClick={() => alert(`You just bought the planet ${title} for ${price} $`)}
						>
							BUY
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemLook
