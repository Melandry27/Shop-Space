import "./App.css"
import Background from "./components/background-image/Background"
import BackgroundShop from "./components/background-image/BackgroundShop"
import BackgroundCard from "./components/background-image/BackgroundCard"

import { Routes, Route } from "react-router-dom"
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Background />} />
				<Route path="/shop" element={<BackgroundShop />} />
				<Route path="/shop/:id" element={<BackgroundCard />} />
			</Routes>
		</div>
	)
}

export default App
