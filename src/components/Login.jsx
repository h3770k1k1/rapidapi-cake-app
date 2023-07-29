import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Logo from "./Logo";

const LoginContainer = () => {
	return (
		<Container maxWidth="sm">
			<div>
				<Logo />
				<Typography variant="h6">
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
				<Button variant="contained" color="primary">
					Log in
				</Button>
                <Typography variant="h6">
					Not a member? Sign up
				</Typography>
			</div>
		</Container>
	);
};

export default LoginContainer;
