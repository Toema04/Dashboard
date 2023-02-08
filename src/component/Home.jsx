// import { BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
// import { MdAttachMoney } from "react-icons/md";
import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import "./home.css";
import GridHome3 from "./Grids/GridHome3";
import GridHome2 from "./Grids/GridHome2";
import GridHome1 from "./Grids/GridHome1";
import GridHome4 from "./Grids/GridHome4";
import GridHome5 from "./Grids/GridHome5";
import GridHome6 from "./Grids/GridHome6";
import GridHome7 from "./Grids/GridHome7";
import GridHome8 from "./Grids/GridHome8";
import GridHome9 from "./Grids/GridHome9";
import GridHome10 from "./Grids/GridHome10";
import GridHome11 from "./Grids/GridHome11";
import GridHome12 from "./Grids/GridHome12";
import GridHome13 from "./Grids/GridHome13";

const Home = () => {
	const StyleGrid = styled(Grid)({
		position: "relative",
		padding: "3rem 1rem 1rem 1rem",
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: ".5% 1%",
		flexGrow: 1,
	});

	return (
		<Box flex={5} sx={{ background: "#dfdcdc36", height: "98%" }}>
			<Typography
				variant="h4"
				sx={{ padding: " 20px 20px 0 20px", fontWeight: "700" }}
			>
				Dashboard
			</Typography>
			<div className="line2"></div>

			<StyleGrid container spacing={2} item className="styleGrid">
				<GridHome1 />
				<GridHome2 />
				<GridHome3 />
				<GridHome4 />
				<GridHome5 />
				<GridHome6 />
				<GridHome7 />
				<GridHome8 />
				<GridHome9 />
				<GridHome10 />
				<GridHome11 />
				<GridHome12 />
			</StyleGrid>
			<GridHome13 />
		</Box>
	);
};

export default Home;
