import React from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import "./gridHome1.css";
const UserBox = styled(Box)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	position: "relative",
	top: "3.5rem",
});

const TextTypography = styled(Typography)({
	fontSize: "20px",
});
const TextSmallTypography = styled(Typography)({
	fontSize: "15px",
});

const StyleButton = styled(Button)({
	float: "right",
	position: "relative",
	top: "9em",
	// left: "-13px",
	fontSize: "12px",
	marginRight: "12px",
	padding: "4px 10px",
	display: "flex",
	alignItems: "center",
});

const GridHome1 = () => {
	return (
		<Grid item className="seif-grid" sx={{ paddingTop: "2" }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box>
					<Typography
						sx={{
							padding: "10px 10px 0 10px",
							fontSize: "28px",
						}}
						variant="h4"
					>
						Welcome
					</Typography>
					<Typography
						sx={{
							padding: "0px 10px 0 10px",
							fontSize: "20px",
							color: "#7e7a7a",
						}}
						variant="h6"
					>
						Teima
					</Typography>
				</Box>
				<img
					className="image"
					src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/welcome.png"
					alt=""
				/>
			</Box>
			<img
				className="seifImg"
				src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/avatar.png"
				alt=""
			/>
			<Grid
				className="grid"
				item
				sx={{
					background: "white",
					padding: "0px 0px 50px 0px",
				}}
			>
				<br />
				<div className="topLine"></div>
				<Box sx={{ display: "flex", justifyContent: "space-around" }}>
					<UserBox>
						<TextTypography variant="h5">SeifTeima</TextTypography>
						<TextSmallTypography variant="h7">Developer</TextSmallTypography>
					</UserBox>
					<UserBox>
						<TextTypography variant="h5">20</TextTypography>
						<TextSmallTypography variant="h7">Project</TextSmallTypography>
					</UserBox>
					<UserBox>
						<TextTypography variant="h5">$5,200</TextTypography>
						<TextSmallTypography variant="h7">Earned</TextSmallTypography>
					</UserBox>
				</Box>
				<div className="bottomLine"></div>
				<StyleButton variant="contained">profile</StyleButton>
			</Grid>
		</Grid>
	);
};

export default GridHome1;
