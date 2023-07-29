import React from "react";
import { Box, Typography } from "@mui/material";

const Logo = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "50px",
				height: "50px",
				borderRadius: "50%",
				backgroundColor: "#007bff", 
			}}
		>
			<Typography variant="h6" sx={{ color: "#fff" }}>
				Logo
			</Typography>
		</Box>
	);
};

export default Logo;
