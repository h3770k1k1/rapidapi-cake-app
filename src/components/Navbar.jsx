import AppBar from "@mui/material/AppBar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./Navbar.css";

const Navbar = () => {
	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: "grey",
				height: "10vh",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between", // Zmień justifyContent na "space-between"
				padding: "0 16px", // Dodaj wewnętrzne marginesy
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Typography className="logo" variant="h4" component="div">
					Logo
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<a href="/favourites">
					<FavoriteIcon fontSize="large"></FavoriteIcon>
				</a>
			</Box>
		</AppBar>
	);
};

export default Navbar;
