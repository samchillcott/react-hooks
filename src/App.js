import React, { useState } from "react";
// import { Hello } from "./Hello";
import { useFetch } from "./useFetch";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const {data} = useFetch("https://api.kanye.rest");

	return (
		<div>
			<div>Count: {count}</div>
			<div>{data}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

export default App;
