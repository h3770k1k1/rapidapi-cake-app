import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Box, Modal, Backdrop, Fade } from "@mui/material";
import SignIn from "./SignIn";
import { useAuth } from "./AuthProvider"; // Import the context

const Navbar = () => {
	const { authUser } = useAuth(); // Use the context to get the authUser
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
					<Typography>{authUser ? authUser.email : ""}</Typography>
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
						<SignIn />
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default Navbar;
