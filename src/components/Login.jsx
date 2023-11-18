import React, { useState } from "react";
import {
	Box,
	Modal,
	TextField,
	Button,
	Container,
	Typography,
	Backdrop,
	Fade,
} from "@mui/material";
import Logo from "./Logo";
import SignUp from "./SignUp";
import "./Login.css";
import LoginPic from "./loginpic.png";
import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginContainer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				console.log(userCredential);
				setIsUserLoggedIn(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const signOut = () => {
		// Dodaj kod do obsługi wylogowywania, jeśli to jest potrzebne
		// Np. poprzez wywołanie funkcji signOut(auth)
		setIsUserLoggedIn(false);
	};
	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<Container
			maxWidth="xs" // Set the maxWidth to "xs" for a narrower container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<div id="login-container">
				<img src={LoginPic} alt="Login" style={{ width: "60%" }} />
				<form onSubmit={isUserLoggedIn ? signOut : signIn}>
					<h1>{isUserLoggedIn ? "Sign Out" : "Log In to your Account"}</h1>
					<TextField
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit">
						{isUserLoggedIn ? "Sign Out" : "Log In"}
					</Button>
				</form>
				<Typography
					variant="h6"
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					Not a member?{" "}
					<Typography
						variant="h6"
						onClick={handleOpenModal}
						sx={{
							textDecoration: "underline",
							cursor: "pointer",
							color: "primary.main",
						}}
					>
						{" "}
						Sign up
					</Typography>
				</Typography>
			</div>

			<Modal
				open={isModalOpen}
				onClose={handleCloseModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={isModalOpen}>
					<Box
						sx={{
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
						}}
					>
						<SignUp />
					</Box>
				</Fade>
			</Modal>
		</Container>
	);
};

export default LoginContainer;
