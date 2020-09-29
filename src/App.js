import React, { useState } from "react";
import "./App.css";
import {useForm} from "./useForm";

function App() {
	const [values, handleChange] = useForm({email: "", password: ""});

	console.log({ email });
	console.log({ password });
	return (
		<div>
			<input
				name="email"
				value={values.email}
				onChange={handleChange}
			/>
			<input
				type="password"
				name="password"
				value={values.password}
				onChange={handleChange}
			/>
		</div>
	);
}

export default App;
