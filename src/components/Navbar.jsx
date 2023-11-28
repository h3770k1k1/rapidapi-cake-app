import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const Navbar = ({ authUser, onLogout }) => {
	return (
		<AppBar position="sticky">
			<Box display="flex" justifyContent="space-between" p={2}>
				<Typography variant="h6" component="div">
					Logo
				</Typography>
				{authUser && (
					<Box display="flex" alignItems="center">
						<Typography variant="body1" component="p">
							{`Signed In as ${authUser.email}`}
						</Typography>
						<Button onClick={onLogout}>Sign Out</Button>
					</Box>
				)}
			</Box>
		</AppBar>
	);
};

export default Navbar;
