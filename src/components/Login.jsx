import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const LoginContainer = () => {
	return (
		<Container maxWidth="sm">
			<div>
				<Typography variant="h4">Witaj, XYZ!</Typography>
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
			</div>
		</Container>
	);
};

export default LoginContainer;
