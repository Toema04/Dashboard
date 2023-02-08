import { Box, Typography } from "@mui/material";
import React from "react";
import "./gridHome11.css";
import { FaRegComments } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const GridHome11 = () => {
	return (
		<Box sx={{ background: "white" }} className="box12">
			<Typography fontSize={25} fontWeight="bold" padding="10px 10px 0px 15px">
				Latest Post
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginLeft: "20px",
					marginTop: "20px",
				}}
			>
				<Box>
					<img
						className="img-4"
						src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Four/imgs/avatar.png"
						alt=""
					/>
				</Box>
				<Box sx={{ marginLeft: "15px" }}>
					<Typography fontSize={19} fontWeight="bold">
						Seif Teima
					</Typography>
					<Typography sx={{ color: "grey" }}>About 3 Hours Ago</Typography>
				</Box>
			</Box>
			<div className="line4"></div>
			<p className="prag">
				You Can Fool All Of The People Some Of The Time, And Some Of The People
				All Of The Time, But You Can't Fool All Of The People All Of The Time.
			</p>
			<div className="line4 bottom"></div>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					margin: "0 15px 20px 15px",
				}}
			>
				<Box display="flex" alignItems="center">
					<FiHeart fontSize={20} color="grey" />
					<Typography sx={{ paddingLeft: "4px" }}>1.8k</Typography>
				</Box>
				<Box display="flex" alignItems="center">
					<FaRegComments fontSize={20} color="grey" />
					<Typography sx={{ paddingLeft: "4px" }}>500</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default GridHome11;
