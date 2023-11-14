import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import Logo from "./Logo";
import SignUpPic from "./signup.png";
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
				<img src={SignUpPic} style={{ width: "60%" }} />
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
						style={{
							marginTop: "10px",
							marginBottom: "10px",
							marginTop: "10px",
							marginBottom: "10px",
							fontWeight: "700",
							border: "3px solid black",
							borderRadius: "20px",
							webkitBoxShadow: "-3px 8px 0px 0px rgba(0, 0, 0, 1)",
							boxShadow: "-2px 4px 0px 0px rgba(0, 0, 0, 1)",
						}}
					>
						Sign Up
					</Button>
				</a>
			</div>
		</Container>
	);
};

export default SignUpContainer;
