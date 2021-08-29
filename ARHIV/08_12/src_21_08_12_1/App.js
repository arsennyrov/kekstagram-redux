import React from "react";

import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
import { Footer } from "./layout/Footer";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			photo: {},
		};
	}

	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		);
	}
}
