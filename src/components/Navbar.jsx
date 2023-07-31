import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Box, Modal, Backdrop, Fade, Button } from "@mui/material";
import "./Navbar.css";
import Login from "./Login"; // Załóżmy, że komponent LoginContainer znajduje się w tym samym katalogu

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<AppBar
				position="static"
				sx={{
					bgcolor: "grey",
					height: "10vh",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					padding: "0 16px",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography className="logo" variant="h4" component="div">
						Logo
					</Typography>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					
						<FavoriteIcon fontSize="large" onClick={handleOpenModal} />
					
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
						}}
					>
						{/* Wyświetlamy komponent LoginContainer w okienku */}
						<Login />
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default Navbar;
