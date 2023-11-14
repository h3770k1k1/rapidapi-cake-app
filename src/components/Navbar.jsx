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
							border: "3px solid black",
							borderRadius: "15px",
							webkitBoxShadow: "-3px 8px 0px 0px rgba(0, 0, 0, 1)",
							boxShadow: "-2px 4px 0px 0px rgba(0, 0, 0, 1)",
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
