import React, { useEffect } from "react";
import "./App.css";
import { useForm } from "./useForm";

function App() {
	const [values, handleChange] = useForm({
		email: "",
		password: "",
		firstName: "",
	});

	console.log(values.email);
	console.log(values.password);

	useEffect(() => {
		const onMouseMove = (e) => {
			console.log(e);
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => {
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, [values.email]);

	// useEffect(() => {
	// 	console.log("mount1");
	// }, []);

	// useEffect(() => {
	// 	console.log("mount2");
	// }, []);

	return (
		<div>
			<input
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
		</div>
	);
}

export default App;
