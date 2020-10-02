import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
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

	const inputRef = useRef();

	// useLayoutEffect(() => {
	// 	console.log(inputRef.current.getBindingClientRect());
	// }, []);

	return (
		<div>
			<div>{!data ? "loading..." : data}</div>
			<div>count: {count} </div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>

			<input
				ref={inputRef}
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
			/>
			<button
				onClick={() => {
					inputRef.current.focus();
				}}
			>
				Focus
			</button>
		</div>
	);
}

export default App;
