import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

function App() {
	const [values, handleChange] = useForm({
		email: "",
		password: "",
		firstName: "",
	});

	const [count, setCount] = useState(() =>
		JSON.parse(localStorage.getItem("count"))
	);
	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

	useEffect(() => {
		localStorage.setItem("count", JSON.stringify(count));
	}, [count]);

	return (
		<div>
			<div>{!data ? "loading..." : data}</div>
			<div>count: {count} </div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>

			{/* <input
				name="email"
				placeholder="email"
				value={values.email}
				onChange={handleChange}
			/>
			<input
				name="firstName"
				placeholder="First Name"
				value={values.firstName}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={values.password}
				onChange={handleChange}
			/> */}
		</div>
	);
}

export default App;
