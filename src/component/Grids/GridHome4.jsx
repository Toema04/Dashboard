import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import "./gridHome4.css";
import { FaRegListAlt, FaSpinner } from "react-icons/fa";
import { TbCircleCheck } from "react-icons/tb";
import { VscError } from "react-icons/vsc";

const Typography1 = styled(Typography)({
	fontWeight: "bold",
	fontSize: "26px",
	padding: "0px 0px 7px 0px",
});
const Typography2 = styled(Typography)({
	color: "grey",
	fontSize: "15px",
	padding: "0px 0px 20px 0px",
});

const Box2 = styled(Box)({
	display: "grid",
	gridTemplateColumns: "auto auto",
	gap: "20px",
	justifyContent: "center",
	// alignItems: "center",
});

const GridHome4 = () => {
	return (
		<Box className="mainBox">
			<Grid sx={{ background: "white" }}>
				<Box padding="20px 0px 0 15px">
					<Typography1 variant="h4">Tickets Statistics</Typography1>
					<Typography2 variant="h6">
						Everything About Support Tickets
					</Typography2>
					<Box2>
						<Box
							className="box"
							sx={{
								margin: "0 0 0 10px",
							}}
						>
							<Box className="box1">
								<FaRegListAlt color="orange" fontSize="30px" />
								<Typography fontSize="25px" fontWeight="bold">
									2500
								</Typography>
								<Typography>Total</Typography>
							</Box>
						</Box>
						<Box
							className="box"
							sx={{
								margin: "0 0 0 10px",
							}}
						>
							<Box className="box1">
								<FaSpinner color="#0075ff" fontSize="30px" />
								<Typography fontSize="25px" fontWeight="bold">
									500
								</Typography>
								<Typography>Pending</Typography>
							</Box>
						</Box>
						<Box
							className="box"
							sx={{
								margin: "0 0 0 10px",
							}}
						>
							<Box className="box1">
								<TbCircleCheck color="#22c55e" fontSize="30px" />
								<Typography fontSize="25px" fontWeight="bold">
									1900
								</Typography>
								<Typography>Closed</Typography>
							</Box>
						</Box>
						<Box
							className="box"
							sx={{
								margin: "0 0 0 10px",
							}}
						>
							<Box className="box1">
								<VscError color="#f44336" fontSize="30px" />
								<Typography fontSize="25px" fontWeight="bold">
									600
								</Typography>
								<Typography>Deleted</Typography>
							</Box>
						</Box>
					</Box2>
				</Box>
			</Grid>
		</Box>
	);
};

export default GridHome4;
