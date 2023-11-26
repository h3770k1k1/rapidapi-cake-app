import React, { useState, useEffect } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import AuthDetails from "./AuthDetails"; // Import AuthDetails component
import SignUp from "./SignUp";
import LoginPic from "./loginpic.png";
import ClearIcon from '@mui/icons-material/Clear';

const SignInContainer = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		// Check if the user is already logged in
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setIsUserLoggedIn(true);
			} else {
				setIsUserLoggedIn(false);
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

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

	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setEmail(data.user.email);
		});
	};

	const handleSignOut = () => {
		signOut(auth).then(() => {
			setIsUserLoggedIn(false);
		});
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
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
			<div id="login-container">
				<AuthDetails /> {/* Display user details and log out button */}
				<img src={LoginPic} alt="" style={{ width: "60%" }} />
				<form
					onSubmit={isUserLoggedIn ? handleSignOut : signIn}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "space-between",
					}}
				>
					<h1>{isUserLoggedIn ? "Sign Out" : "Sign In"}</h1>
					<TextField
						type="email"
						placeholder="Enter your email"
						size="medium"
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
					<br />
					{isUserLoggedIn ? (
						<Button type="button" variant="contained" onClick={handleSignOut}>
							Sign Out
						</Button>
					) : (
						<>
							<Button type="submit" variant="contained">
								Log In
							</Button>
							<br />
							<Button onClick={handleClick}>Sign In With Google</Button>
						</>
					)}
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
					<Box>
						<SignUp />
					</Box>
				</Fade>
			</Modal>
		</Container>
	);
};

export default SignInContainer;
