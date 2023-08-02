import React from "react";
import { Box, Typography } from "@mui/material";

const Logo = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100px",
				height: "100px",
				borderRadius: "50%",
				backgroundColor: "primary.dark",
				margin: "auto",
			}}
		>
			<Typography variant="h4" sx={{ color: "#fff" }}>
				Logo
			</Typography>
		</Box>
	);
};

export default Logo;
