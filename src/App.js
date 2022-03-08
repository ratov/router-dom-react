import React from "react";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

import {
	Routes,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<ul>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/about'>О нас</Link>
					</li>
					<li>
						<Link to='/contacts'>Контакты</Link>
					</li>
				</ul>
			</header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
