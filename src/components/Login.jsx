import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Logo from "./Logo";
import "./Login.css";

const LoginContainer = () => {
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
				<Logo />
				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "10px" }}
				>
					{/* Add margin to the Typography component */}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Typography>
			</div>
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
						style={{ marginTop: "10px", marginBottom: "10px" }}
					>
						{/* Add margin to the Button component */}
						Log in
					</Button>
				</a>
				<Typography variant="h6">Not a member? Sign up</Typography>
			</div>
		</Container>
	);
};

export default LoginContainer;
