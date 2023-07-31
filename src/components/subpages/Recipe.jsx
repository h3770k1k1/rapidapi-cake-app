import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CakeIcon from "@mui/icons-material/Cake";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import React, { useState } from "react";
const Recipe = () => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	return (
		<div>
			<Box
				sx={{ backgroundColor: "pink", width: "100vw", height: "40vh" }}
			></Box>
			<Container
				maxWidth="lg"
				sx={{ marginTop: "2%", display: "flex", flexDirection: "column" }}
			>
				<Typography variant="h4">Cake Name</Typography>
				<Typography
					variant="h6"
					sx={{ display: "flex", justifyContent: "space-between" }}
				>
					Difficulty: <span style={{ marginLeft: "auto" }}>Hard</span>
				</Typography>
				<Typography variant="body1">
					Przykładowy opis przepisu. Reminiscent of school traybakes with pink
					icing, these raspberry and custard muffins are given a suitably chic
					update simply by turning cupcakes upside down. Adding custard to the
					cake batter creates a moist crumb and another layer of nostalgia, that
					pairs brilliantly with the raspberry in the jam icing.
				</Typography>
				<Typography
					variant="h6"
					sx={{ display: "flex", justifyContent: "space-between" }}
				>
					Portion:{" "}
					<span style={{ marginLeft: "auto" }}>
						5<CakeIcon fontSize="large" sx={{ marginBottom: "-0.25rem" }} />
					</span>
				</Typography>
				<Typography variant="h6">
					Time:
					<Typography variant="body1">
						Hands-on time 45 minutes. Oven time 1 hour 20 minutes, plus cooling.
					</Typography>
				</Typography>
				<Typography variant="h6">Ingredients:</Typography>
				<List>
					<ListItem>
						<ListItemText primary="Ingredient 1" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Ingredient 2" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Ingredient 3" />
					</ListItem>
				</List>{" "}
				<Container sx={{ backgroundColor: "#D8D9DA" }}>
					<Typography
						variant="h6"
						onClick={handleExpandClick}
						sx={{ cursor: "pointer" }}
					>
						Step 1
					</Typography>
					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<Typography variant="body1">
							Heat the oven to 160°C fan/gas 4. Beat the butter and sugar until
							light and fluffy, add the vanilla, then beat in the eggs one at a
							time. Stir in the lemon zest and juice, then gently mix in the
							flour, salt and baking powder. Divide the mix among the tins and
							level the tops. Bake for 20 minutes until a skewer pushed into the
							middle comes out clean. Transfer the tins to a rack to cool
							completely, then remove the cakes from the tins. Reduce the oven
							to 120°C fan/gas.
						</Typography>
					</Collapse>
				</Container>
			</Container>
		</div>
	);
};

export default Recipe;
