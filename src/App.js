import React, { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log({ email });
	console.log({ password });
	return (
		<div>
			<input
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
		</div>
	);
}

export default App;
