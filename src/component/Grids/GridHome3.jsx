import React from "react";
import { BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { Box, Grid, styled, Typography } from "@mui/material";
import "./gridHome3.css";

const Typography3 = styled(Typography)({
	color: "grey",
	fontSize: "15px",
	margin: "0px 0 5px 0",
});
const Typography4 = styled(Typography)({
	fontWeight: "bold",
	margin: "0px 0 -18px 0",
});

const STypography = styled(Typography)({
	fontSize: "30px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "5rem",
	fontSize: "27px",
	fontWeight: "500",
});

const Box2 = styled(Box)({
	width: "15%",
	height: "5rem",
	margin: "15px 10px 20px 17px",
});

const GridHome3 = () => {
	return (
		<Grid className="grid3" sx={{ background: "white" }}>
			<Typography
				variant="h5"
				sx={{ padding: "20px 10px 5px 15px", fontWeight: "bold" }}
			>
				Yearly Targets
			</Typography>
			<Typography
				variant="h6"
				sx={{
					color: "grey",
					fontSize: "15px",
					padding: "0px 10px 10px 15px",
				}}
			>
				Targets Of The Year
			</Typography>
			<Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box2>
						<STypography variant="h6" className="h6STypography">
							<MdAttachMoney />
						</STypography>
					</Box2>
					<Box m="0 0 10px 0">
						<Typography3>Money</Typography3>
						<Typography4>$10,000</Typography4>
						<span className="span">80%</span>
						<div className="LineSkills"></div>
					</Box>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box2>
						<STypography variant="h5" className="h5STypography">
							<BsCodeSlash />
						</STypography>
					</Box2>
					<Box m="0 0 10px 0">
						<Typography3>Project</Typography3>
						<Typography4>10</Typography4>

						<span className="span2">55%</span>
						<div className="LineSkills2"></div>
					</Box>
				</Box>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box2>
						<STypography variant="h4" className="h4STypography">
							<BsFillPersonFill />
						</STypography>
					</Box2>
					<Box m="0 0 10px 0">
						<Typography3>Team</Typography3>
						<Typography4>1</Typography4>
						<span className="span3">75%</span>
						<div className="LineSkills3"></div>
					</Box>
				</Box>
			</Box>
		</Grid>
	);
};

export default GridHome3;
