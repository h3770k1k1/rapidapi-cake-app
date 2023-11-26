import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Box, Modal, Backdrop, Fade, Button } from "@mui/material";
import SignIn from "./SignIn"; // Załóżmy, że komponent LoginContainer znajduje się w tym samym katalogu

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userName, setUserName] = useState("");

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const handleLogin = (user) => {
		setIsLoggedIn(true);
		setUserName(user.email); // You can customize this based on your user data
		handleCloseModal();
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		// Additional logout logic if needed
	};
	return (
		<>
			<AppBar
				position="sticky"
				elevation={0}
				sx={{
					bgcolor: "primary.main",
					color: "black",
					height: "10vh",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					padding: "0 16px",
					borderBottom: "3px solid black",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography className="logo" variant="h4" component="div">
						Logo
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography>{userName}</Typography>

					<FavoriteIcon
						fontSize="large"
						onClick={handleOpenModal}
						sx={{ cursor: "pointer" }}
					/>
				</Box>
			</AppBar>

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
						{/* Wyświetlamy komponent LoginContainer w okienku */}
						<SignIn onLogin={handleLogin} />
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default Navbar;
