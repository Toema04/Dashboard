import { Grid, Typography, Button, styled, Box } from "@mui/material";
import React from "react";
import "./gridHome2.css";
const GridHome2 = () => {
	const Button2 = styled(Button)({
		// position: "relative",
		// // left: "85%",
		// marign: "0px 10px 0 0",
		// padding: "5px 5px 5px 5px",
		float: "right",
		fontSize: "12px",
		marginRight: "12px",
		padding: "4px 10px",
		display: "flex",
		alignItems: "center",
	});

	return (
		<Grid className="grid2" item sx={{ background: "#fff" }}>
			<Typography fontSize="25px" fontWeight="bold">
				Quick Draft
			</Typography>
			<Typography sx={{ color: "grey", fontSize: "17px" }}>
				Write A Drift For Your Ideas
			</Typography>
			<Box>
				<input className="input2" type="text" placeholder="Title" />
				<textarea
					className="input3"
					type="massage"
					placeholder="Your thoughs"
				></textarea>
				<Button2 variant="contained">Save</Button2>
			</Box>
		</Grid>
	);
};

export default GridHome2;
