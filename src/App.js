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
		console.log("render");
	}, [values.email, values.password]);

	return (
		<div>
			<input name="email" placeholder="email" value={values.email} onChange={handleChange} />
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
