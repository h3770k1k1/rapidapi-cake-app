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
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				bgcolor: "white",
				boxShadow: 24,
				p: 4,
				borderRadius: "4px",
				outline: "none",
				border: "3px solid black",
				borderRadius: "15px",
				webkitBoxShadow: "-3px 8px 0px 0px rgba(0, 0, 0, 1)",
				boxShadow: "-2px 4px 0px 0px rgba(0, 0, 0, 1)",
				height: "90%",
			}}
		>
			<img src={SignUpPic} style={{ width: "60%" }} />
			<h1>{isUserLoggedIn ? "Account Created" : "Create Account"}</h1>

			<Typography variant="h6" style={{}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit
			</Typography>

			<form
				onSubmit={signUp}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "space-between",
				}}
			>
				<TextField
					type="email"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ width: 1, marginTop: "1rem" }}
				/>
				<TextField
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					sx={{ width: 1, marginTop: "1rem" }}
				/>
				<Button type="submit" variant="contained" disabled={isUserLoggedIn}>
					{isUserLoggedIn ? "Signed Up" : "Sign Up"}
				</Button>
			</form>
		</Container>
	);
};

export default SignUpContainer;
