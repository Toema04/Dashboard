import { DeleteOutline } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import "./gridHome6.css";

const Typography1 = styled(Typography)({
	fontWeight: "bold",
	fontSize: "26px",
	padding: "10px 0px 10px 20px",
});

const GridHome6 = () => {
	return (
		<Box sx={{ background: "white" }} className="box7">
			<Typography1>Latest Tasks</Typography1>
			<Box className="boxCon">
				<Box>
					<Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
						Record One New Video
					</Typography>
					<Typography sx={{ color: "gray", fontSize: "17px" }}>
						Record Python Create Exe Project
					</Typography>
				</Box>
				<Box>
					<DeleteOutline className="muiIcon" />
				</Box>
			</Box>
			<div className="line5"></div>
			<Box className="boxCon">
				<Box>
					<Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
						Write Article
					</Typography>
					<Typography sx={{ color: "gray", fontSize: "17px" }}>
						Write Low Level vs High Level Languages
					</Typography>
				</Box>
				<Box>
					<DeleteOutline className="muiIcon" />
				</Box>
			</Box>
			<div className="line5"></div>
			<Box className="boxCon">
				<Box>
					<Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
						Finish Project
					</Typography>
					<Typography sx={{ color: "gray", fontSize: "17px" }}>
						Publish Academy Programming Project
					</Typography>
				</Box>
				<Box>
					<DeleteOutline className="muiIcon" />
				</Box>
			</Box>
			<div className="line5"></div>
			<Box className="boxCon">
				<Box>
					<Typography
						className="TypographyDis"
						sx={{ fontWeight: "bold", fontSize: "16px" }}
					>
						Attend The Meeting
					</Typography>
					<Typography className="TypographyDis2" sx={{ fontSize: "17px" }}>
						Attend The Project Business Analysis Meeting
					</Typography>
				</Box>
				<Box>
					<DeleteOutline className="muiIcon2" />
				</Box>
			</Box>
			<div className="line5"></div>
			<Box className="boxCon">
				<Box>
					<Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
						Finish Lesson
					</Typography>
					<Typography sx={{ color: "gray", fontSize: "17px" }}>
						Finish Teaching Flex Box
					</Typography>
				</Box>
				<Box>
					<DeleteOutline className="muiIcon" />
				</Box>
			</Box>
		</Box>
	);
};

export default GridHome6;
