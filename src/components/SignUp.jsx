import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import SignUpPic from "./signup.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

const SignUpContainer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	const signUp = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
				setIsUserLoggedIn(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Container
			maxWidth="xs"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<div id="login-container">
				<img src={SignUpPic} style={{ width: "60%" }} />
				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "10px" }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</Typography>
			</div>
			<form onSubmit={signUp}>
				<h1>{isUserLoggedIn ? "Account Created" : "Create Account"}</h1>
				<input
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" disabled={isUserLoggedIn}>
					{isUserLoggedIn ? "Signed Up" : "Sign Up"}
				</button>
			</form>
		</Container>
	);
};

export default SignUpContainer;
