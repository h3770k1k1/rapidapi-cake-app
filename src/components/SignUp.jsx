import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Logo from "./Logo";

const SignUpContainer = () => {
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
				<Logo />
				<Typography
					variant="h6"
					style={{ marginTop: "20px", marginBottom: "10px" }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
				<TextField
					type="password"
					label="Powtórz hasło"
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
						Sign Up
					</Button>
				</a>
			</div>
		</Container>
	);
};

export default SignUpContainer;
