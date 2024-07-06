import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from "@mui/material/Typography";
import { Box, Modal, Backdrop, Fade } from "@mui/material";
import SignIn from "./SignIn";
import { useAuth } from "./AuthProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
const Navbar = () => {
	const { authUser } = useAuth();
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
					<Link to="/" style={{ textDecoration: 'none', color: 'black' }}><Typography className="logo" variant="h6" component="div">
						Cake App
					</Typography></Link>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography>{authUser ? `Signed in as: ${authUser.email}` : "Signed out "}</Typography>
					<AccountCircleIcon
						fontSize="large"
						onClick={handleOpenModal}
						sx={{ cursor: "pointer" }}
					/>
					<Link to="/favourites" style={{ underline: 'none', color: "black" }}><FavoriteIcon fontSize="large" /></Link>
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
