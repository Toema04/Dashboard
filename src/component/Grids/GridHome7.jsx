import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome7.css";

const GridHome7 = () => {
	return (
		<Box sx={{ background: "white" }} className="box8">
			<Typography
				fontSize="25px"
				fontWeight="bold"
				padding="10px 10px 20px 15px"
			>
				Top Search Items
			</Typography>

			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography sx={{ color: "grey" }}>Keyword</Typography>
				<Typography sx={{ color: "grey" }}>Search Count</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">Programming</Typography>
				<Typography className="Typographybtn">220</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">JavaScript</Typography>
				<Typography className="Typographybtn">180</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">PHP</Typography>
				<Typography className="Typographybtn">160</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">Code</Typography>
				<Typography className="Typographybtn">145</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">Design</Typography>
				<Typography className="Typographybtn">110</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					padding: "0 15px 25px 15px",
				}}
			>
				<Typography fontSize="17px">Logic</Typography>
				<Typography className="Typographybtn">95</Typography>
			</Box>
		</Box>
	);
};

export default GridHome7;
