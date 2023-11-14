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

const LoginContainer = () => {
	const [showSignUp, setShowSignUp] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleSignUpClick = () => {
		setShowSignUp(true);
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
				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "10px" }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Typography>
				<div>
					<TextField
						label="Nazwa użytkownika"
						variant="outlined"
						fullWidth
						margin="normal"
					/>
					<TextField
						type="password"
						label="Hasło"
						variant="outlined"
						fullWidth
						margin="normal"
					/>
					<a href="/favourites">
						<Button
							variant="contained"
							color="primary"
							style={{
								marginTop: "10px",
								marginBottom: "10px",
								fontWeight: "700",
								border: "3px solid black",
								borderRadius: "20px",
								webkitBoxShadow: "-3px 8px 0px 0px rgba(0, 0, 0, 1)",
								boxShadow: "-2px 4px 0px 0px rgba(0, 0, 0, 1)",
							}}
						>
							Log in
						</Button>
					</a>
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
