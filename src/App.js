import React, { useState } from "react";
import { Hello } from "./Hello";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Hello increment={() => setCount(count + 1)} />
			<div>Count: {count}</div>
		</div>
	);
}

export default App;
