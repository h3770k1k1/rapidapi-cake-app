import React, { useState } from "react";
import { Container, Typography, Collapse } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const CookingStep = () => {
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Container
			sx={{
				backgroundColor: "primary.main",
				marginBottom: "5%",
				paddingTop: "1%",
				paddingBottom: "1%",
			}}
		>
			<Typography
				variant="h6"
				onClick={handleExpandClick}
				sx={{
					cursor: "pointer",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				Step 1
				<ExpandLessIcon
					fontSize="large"
					sx={{
						transform: expanded ? "rotate(180deg)" : "none", // Obrót 180 stopni dla ikony w zależności od stanu expanded
						transition: "transform 0.3s ease-in-out", // Dodajemy płynność animacji
					}}
				/>
			</Typography>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Typography variant="body1">
					Heat the oven to 160°C fan/gas 4. Beat the butter and sugar until
					light and fluffy, add the vanilla, then beat in the eggs one at a
					time. Stir in the lemon zest and juice, then gently mix in the flour,
					salt and baking powder. Divide the mix among the tins and level the
					tops. Bake for 20 minutes until a skewer pushed into the middle comes
					out clean. Transfer the tins to a rack to cool completely, then remove
					the cakes from the tins. Reduce the oven to 120°C fan/gas.
				</Typography>
			</Collapse>
		</Container>
	);
};

export default CookingStep;
