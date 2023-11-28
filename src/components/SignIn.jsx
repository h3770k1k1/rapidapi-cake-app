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
import {
	getAuth,
	GoogleAuthProvider,
	signInWithRedirect,
	getRedirectResult,
} from "firebase/auth";

const SignInContainer = ({ onLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleClick = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider); //z przekierowaniem
		/*signInWithPopup(auth, provider).then((data) => {
		setEmail(data.user.email); //z popupem
	});*/
	};
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				onLogin(userCredential.user);
			})
			.catch((error) => {
				console.log(error);
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
				backgroundColor: "white",
				zIndex: "10",
			}}
		>
			<div>
				<AuthDetails onLogout={onLogin} />
				<img src={LoginPic} alt="" style={{ width: "60%" }} />
				<form onSubmit={signIn}>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Sign In</button>
					<Button onClick={handleClick}>Sign In With Google</Button>
				</form>
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
