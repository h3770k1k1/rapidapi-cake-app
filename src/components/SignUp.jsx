import React, { useState } from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	IconButton,
} from "@mui/material";
import SignUpPic from "./signup.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import ClearIcon from "@mui/icons-material/Clear";

const SignUpContainer = ({ handleCloseModal }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

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
	const handleClose = () => {
		setIsUserLoggedIn(false);
		handleCloseModal();
		console.log("gowno"); // Call the provided handleCloseModal function
	};

	return (
		<Container
			maxWidth="xs"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "space-between",
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
			<IconButton
				onClick={handleClose}
				style={{ position: "absolute", top: "0", right: "0", padding: "1rem" }}
			>
				<ClearIcon />
			</IconButton>
			<div id="signup-container">
				<div>
					<img src={SignUpPic} style={{ width: "60%" }} alt="Signup" />
				</div>
				<h1>{isUserLoggedIn ? "Account Created" : "Create Account"}</h1>

				<Typography variant="h6">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</Typography>

				<form
					onSubmit={signUp}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "space-between",
						justifyContent: "center",
					}}
				>
					<div>
						<TextField
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							sx={{ width: "80%", marginTop: "1rem" }}
						/>
						<TextField
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							sx={{ width: "80%", marginTop: "1rem" }}
						/>
						<Button
							type="submit"
							variant="contained"
							disabled={isUserLoggedIn}
							sx={{ marginTop: "1rem", width: "80%" }}
						>
							{isUserLoggedIn ? "Signed Up" : "Sign Up"}
						</Button>
					</div>
				</form>
			</div>
		</Container>
	);
};

export default SignUpContainer;
