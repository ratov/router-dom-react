import React from "react";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";

import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<ul>
					<li>
						<a href="/">Главная</a>
					</li>
					<li>
						<a href="/about">О нас</a>
					</li>
					<li>
						<a href="/contacts">Контакты</a>
					</li>
				</ul>
			</header>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
